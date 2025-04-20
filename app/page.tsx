import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import TechStack from './components/TechStack'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CTASection from './components/CTASection'
import FAQ from './components/FAQ'
import Stats from './components/Stats'



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
    creator: '@yourhandle'
  }
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Services/>
      <Testimonials />
      <Stats />
      <TechStack/>
      <CTASection />
      <FAQ />
      <ContactForm/>
      {/* <TeamSection /> */}
      {/* <Footer/> */}
      {/* <DarkModeToggle /> */}
    </div>
  )
}
