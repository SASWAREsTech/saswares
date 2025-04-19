// app/layout.tsx
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar'
import StickyCTA from './components/StickyCTA'
import Footer from './components/Footer'

export const metadata = {
  title: 'SASWAREs',
  description: 'Engineering Digital Intelligence'
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
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
