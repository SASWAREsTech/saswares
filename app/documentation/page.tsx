'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Documentation() {
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-gray-800 dark:text-gray-200 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent leading-tight">
          Documentation
        </h1>

        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Everything you need to get started with SASWAREs products and integrations.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 text-left mt-12">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
            <p className="text-sm opacity-80 mb-2">
              Learn how to set up your SASWAREs integration and get your first project running.
            </p>
            <Link href="#" className="text-blue-600 dark:text-red-400 text-sm hover:underline">View Docs →</Link>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">API Reference</h3>
            <p className="text-sm opacity-80 mb-2">
              Detailed API documentation for developers building on SASWAREs tech stack.
            </p>
            <Link href="#" className="text-blue-600 dark:text-red-400 text-sm hover:underline">View API Docs →</Link>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">FAQ & Troubleshooting</h3>
            <p className="text-sm opacity-80 mb-2">
              Find answers to common questions and learn how to resolve technical issues.
            </p>
            <Link href="#" className="text-blue-600 dark:text-red-400 text-sm hover:underline">View FAQ →</Link>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Deployment & CI/CD</h3>
            <p className="text-sm opacity-80 mb-2">
              Learn how to deploy SASWAREs apps and set up automated pipelines.
            </p>
            <Link href="#" className="text-blue-600 dark:text-red-400 text-sm hover:underline">View Guides →</Link>
          </div>
        </div>

        <p className="mt-10 text-sm opacity-60">
          Need help? Contact us at{' '}
          <a href="mailto:dev@saswares.com" className="underline text-blue-600 dark:text-red-400">
            dev@saswares.com
          </a>
        </p>
      </div>
    </section>
  )
}
