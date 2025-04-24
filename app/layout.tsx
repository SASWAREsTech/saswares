// app/layout.tsx
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar'
import StickyCTA from './components/StickyCTA'
import Footer from './components/Footer'
import AppLoader from './components/AppLoader'
import StickyNavButtons from './components/StickyNavButtons'

export const metadata = {
  title: 'SASWAREs — Engineering Digital Intelligence',
  description: 'We build custom AI, software, and full-stack solutions for startups and businesses. Love at first byte.',
  keywords: ['SASWAREs', 'AI agency', 'software development', 'AI solutions', 'Python', 'ML', 'Oracle', 'FastAPI'],
  authors: [{ name: 'SASWAREs Team', url: 'https://saswares.tech' }],
  creator: 'SASWAREs',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'SASWAREs — AI-Powered Software Agency',
    description: 'Love at first byte — AI, full-stack, desktop, and database experts.',
    url: 'https://saswares.tech',
    siteName: 'SASWAREs',
    images: [
      {
        url: '/og-image.png', // Add this to /public/
        width: 1200,
        height: 630,
        alt: 'SASWAREs AI Software Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SASWAREs — AI Software Engineers',
    description: 'We turn your ideas into reality. AI, backend, frontend, and automation experts.',
    images: ['/og-image.png'],
    creator: '@saswares'
  }
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* 🔳 Subtle Grid Pattern */}
          <div
            className="fixed inset-0 -z-10 pointer-events-none bg-[length:40px_40px] opacity-[0.04] dark:opacity-[0.06] bg-grid-pattern"

          />

          {/* Page Structure */}
          <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 min-h-screen">
            <Navbar />
            <StickyCTA />
            <StickyNavButtons/>
            <AppLoader>
            <main>{children}</main>
            </AppLoader>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
