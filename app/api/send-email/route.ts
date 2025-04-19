// /app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()

  if (data.botField) return NextResponse.json({ status: 'spam' })

  const { name, email, message, service, recaptchaToken } = data

  // Optionally: Verify reCAPTCHA token with Google
  // (Server-side check not mandatory but more secure)

  try {
    const emailRes = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'saswares.tech@gmail.com',
      subject: `New Contact Form Submission`,
      html: `
        <h3>New message from SASWAREs:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || 'Not selected'}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json(emailRes)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
  }
}
