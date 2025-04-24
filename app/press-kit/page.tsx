'use client'

import { motion } from 'framer-motion'

export default function PressKit() {
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
          Press Kit
        </h1>

        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Here you can find all the media and press assets related to SASWAREs. Feel free to use these resources in your coverage, articles, or any other creative endeavors.
        </p>

        <p className="text-base mb-6 opacity-80">
          Download logos, screenshots, and more, in high quality, by clicking the links below.
        </p>

        <div className="space-y-4">
          <div className="flex justify-center gap-6">
            <a
              href="/assets/press-kit/logo.zip"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Download Logo Pack
            </a>

            <a
              href="/assets/press-kit/screenshots.zip"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Download Screenshots
            </a>
          </div>

          <p className="text-base opacity-80 mt-6">
            If you need any additional materials or information, feel free to contact our press team at{' '}
            <a href="mailto:saswares.tech@gmail.com" className="text-blue-600 dark:text-red-400 hover:underline">
              saswares.tech@gmail.com
            </a>
            .
          </p>

          <p className="mt-10 text-sm opacity-60">Last updated: April 23, 2025</p>
        </div>
      </div>
    </section>
  )
}
