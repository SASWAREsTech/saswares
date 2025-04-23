'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaXTwitter
} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#0a0a0a] text-gray-800 dark:text-gray-300 px-6 pt-28 pb-10 overflow-hidden scroll-mt-28 transition-colors duration-300">
      {/* Background Blobs (lighter blur/opacity) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] top-[-100px] left-[-100px] bg-pink-500/20 dark:bg-pink-500/10 blur-[120px]" />
        <div className="absolute w-[300px] h-[300px] bottom-[-100px] right-[-80px] bg-cyan-400/20 dark:bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        {/* Branding */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="SASWAREs" width={48} height={48} className="rounded" />
            <div>
              <p className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">SASWAREs</p>
              <p className="text-sm text-gray-600 dark:text-white/50">Love at first byte</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
            We engineer intelligent systems that drive businesses forward — turning code into impact, one byte at a time.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            {[
              ['About Us', '/#home'],
              ['Careers', '/#home'],
              ['Our Work', '/projects'],
              ['Press Kit', '/#home'],
            ].map(([label, href]) => (
              <li key={href} className="group relative">
                <Link
                  href={href}
                  className="inline-block transition-all duration-200 hover:text-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                >
                  {label}
                  <span className="block h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            {[
              ['Help Center', '/help'],
              ['Contact', '/#contact'],
              ['Documentation', '/#home'],
              ['Privacy Policy', '/privacy-policy'],
            ].map(([label, href]) => (
              <li key={href} className="group relative">
                <Link
                  href={href}
                  className="inline-block transition-all duration-200 hover:text-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {label}
                  <span className="block h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-3">Stay in the loop</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Get the latest updates, project launches, and engineering insights.
          </p>
          <a
            href="mailto:saswares.tech@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 rounded-md transition-colors"
          >
            <FaEnvelope />
            Join our mailing list
          </a>

          <div className="flex gap-4 mt-6 text-xl text-gray-600 dark:text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaXTwitter /></a>
            <a href="https://www.youtube.com/@saswares" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube /></a>
            <a href="https://www.instagram.com/saswares" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/saswares/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
            <a href="https://github.com/SASWAREsTech" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Divider + Legal */}
      <div className="border-t border-gray-200 dark:border-white/10 pt-6 mt-6 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>Built with 💻 by engineers who <span className="text-pink-500">love what they do</span>.</p>
        <p className="mt-2 sm:mt-0">&copy; {new Date().getFullYear()} SASWAREs. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
