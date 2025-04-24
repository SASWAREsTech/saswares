'use client'

import { motion } from 'framer-motion'

export default function Careers() {
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
          Careers at SASWAREs
        </h1>

        <p className="text-lg mb-6 max-w-2xl mx-auto">
          At SASWAREs, we build scalable, AI-driven software products using actual engineering principles. We believe in craftsmanship, clarity, and pushing technology forward.
        </p>

        <p className="text-base mb-4 opacity-80">
          While we're not hiring at the moment, we're always on the lookout for curious minds and creative problem-solvers.
        </p>

        <p className="text-base opacity-80">
          Keep checking back for future openings — or drop us a line if you're passionate about building meaningful tech.
        </p>

        <p className="mt-10 text-sm opacity-60">Last updated: April 23, 2025</p>
      </div>
    </section>
  )
}
