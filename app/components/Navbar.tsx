'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import DarkModeToggle from './DarkModeToggle'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '#contact' }
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scrollspy Logic
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            break
          }
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.25
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? 'backdrop-blur-md bg-white/80 dark:bg-[#0a0a0a]/80 shadow-md'
        : 'bg-[#fafafa] dark:bg-[#111]'
        }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="SASWAREs" width={32} height={32} />
          <span className="font-bold text-xl text-gray-900 dark:text-white tracking-tight">
            SASWAREs
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isAnchor = item.href.startsWith('#')
            const isActive = isAnchor && activeSection === item.href.replace('#', '')

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group px-1 transition duration-200 font-medium text-gray-700 dark:text-gray-300 ${isActive ? 'text-blue-600 dark:text-red-400' : ''
                  }`}
              >
                {item.label}

                {/* Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-600 dark:bg-red-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                ></span>

                {/* Shadow Glow */}
                <span
                  className={`absolute inset-0 rounded px-2 py-1 transition duration-300 blur-sm opacity-0 group-hover:opacity-40 ${isActive
                      ? 'bg-blue-500/20 dark:bg-red-500/20'
                      : 'bg-blue-400/10 dark:bg-red-400/10'
                    }`}
                />
              </Link>

            )
          })}
          <DarkModeToggle />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-white dark:bg-[#111] px-6 py-6 space-y-4 border-t border-gray-200 dark:border-gray-700 shadow-md z-40 transition-all">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 dark:text-gray-200 text-base font-medium hover:text-blue-600 dark:hover:text-red-400 transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
