'use client'

import { motion } from 'framer-motion'
import { FaComments } from 'react-icons/fa'

const StickyCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed z-50 bottom-6 right-6 sm:bottom-8 sm:right-8"
    >
      <a href="#contact">
        <div className="flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg shadow-pink-500/30 hover:shadow-purple-500/40 transition-all hover:scale-105 cursor-pointer">
          <FaComments className="text-lg" />
          <span className="whitespace-nowrap">Let&apos;s Talk</span>
        </div>
      </a>
    </motion.div>
  )
}

export default StickyCTA
