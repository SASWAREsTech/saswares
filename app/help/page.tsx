'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HelpCenter() {
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
          Help Center
        </h1>

        <p className="text-lg mb-8 text-center">Need assistance? Here's where to start.</p>

        <div className="grid gap-8 sm:grid-cols-2 mt-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">How can I get started?</h3>
            <p className="text-sm mb-2">
              Visit our <Link href="/#services" className="text-blue-600 dark:text-red-400 underline">Services</Link> section to explore what we offer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Where do I contact support?</h3>
            <p className="text-sm mb-2">
              Head to our <Link href="/#contact" className="text-blue-600 dark:text-red-400 underline">Contact</Link> section and send us a message.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">What technologies do you use?</h3>
            <p className="text-sm">We use full-stack JS, Python, AI/ML models, and scalable architectures.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Is your work customized?</h3>
            <p className="text-sm">Absolutely. Every solution is tailored based on your specific needs.</p>
          </div>
        </div>

        <p className="mt-16 text-sm text-center opacity-60">
          Still have questions? Email us at <a href="mailto:hello@saswares.com" className="underline text-blue-600 dark:text-red-400">hello@saswares.com</a>
        </p>
      </div>
    </section>
  )
}
