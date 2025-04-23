'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 bg-gradient-to-br from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#0a0a0a] transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-blue-400/20 dark:bg-red-400/20 rounded-full blur-[120px] top-[-80px] left-[-80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-purple-400/20 dark:bg-blue-300/20 rounded-full blur-[100px] bottom-[-60px] right-[-60px]"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900 dark:text-white">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At SASWAREs, your privacy is paramount. We collect minimal data necessary to provide and improve our services, and we never sell your information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Data We Collect</h2>
        <p className="mb-4">We may collect basic usage data and contact info submitted through forms. No sensitive personal data is stored without consent.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Data</h2>
        <p className="mb-4">Data is used to respond to inquiries, improve the user experience, and ensure the security and functionality of our site.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cookies & Analytics</h2>
        <p className="mb-4">We use cookies for basic analytics to understand site traffic and usage patterns. No personally identifiable data is collected via cookies.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Your Rights</h2>
        <p>You can request access, updates, or deletion of your personal data at any time by contacting us.</p>

        <p className="mt-10 text-sm text-center opacity-60">Last updated: April 23, 2025</p>
      </div>
    </section>
  )
}
