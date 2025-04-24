'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="relative py-36 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#0a0a0a] transition-colors duration-300 overflow-hidden text-center text-gray-900 dark:text-white scroll-mt-24">
      {/* Background Glows */}
      <div className="absolute w-[400px] h-[400px] top-[-120px] left-[-120px] bg-gradient-to-br from-pink-500 to-purple-500 blur-[120px] opacity-15 animate-pulse -z-10 will-change-transform" />
      <div className="absolute w-[400px] h-[400px] bottom-[-120px] right-[-120px] bg-gradient-to-tr from-blue-500 to-cyan-500 blur-[120px] opacity-15 animate-pulse -z-10 will-change-transform" />

      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let&apos;s Build Something Unforgettable
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Whether it&apos;s AI, automation, dashboards or complete web platforms — our team makes it real.
      </motion.p>

      <motion.p
        className="text-base italic text-gray-500 dark:text-gray-400 mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        “The best time to start was yesterday. The next best time is now.”
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/#contact" scroll={true}>
          <button className="px-8 py-4 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-500 hover:to-cyan-500 transition-all text-white shadow-md shadow-pink-500/30 hover:shadow-cyan-500/40">
            🚀 Start Your Project
          </button>
        </Link>
      </motion.div>

      <p className="mt-6 text-sm text-gray-400 dark:text-white/40">
        No pressure. We usually respond within 24 hours.
      </p>
    </section>
  )
}

export default CTASection
