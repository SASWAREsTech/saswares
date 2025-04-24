'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    setIsOnline(navigator.onLine)

    const updateStatus = () => setIsOnline(navigator.onLine)
    window.addEventListener('online', updateStatus)
    window.addEventListener('offline', updateStatus)

    return () => {
      window.removeEventListener('online', updateStatus)
      window.removeEventListener('offline', updateStatus)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">

      {/* ☀️ Light Mode Background */}
      <div className="block dark:hidden absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* 🌙 Dark Mode Background (replaced with your new version) */}
      <div className="hidden dark:block absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          className="w-32 h-32 mb-5"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo.png"
            alt="SASWAREs Logo"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          SASWAREs
        </motion.h1>

        <motion.div
          className="mt-3 text-base sm:text-lg text-gray-800 dark:text-gray-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          love at first byte
        </motion.div>

        {/* WebM Loader */}
        <motion.div
          className="mt-6 w-[200px] h-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <video
            src="/splash-anim.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Animated Loading... */}
        <motion.div
          className="mt-2 flex items-center justify-center text-blue-600 dark:text-red-300 text-lg font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="relative inline-flex">
            <span className="animate-bounce [animation-delay:0s]">L</span>
            <span className="animate-bounce [animation-delay:0.05s]">o</span>
            <span className="animate-bounce [animation-delay:0.1s]">a</span>
            <span className="animate-bounce [animation-delay:0.15s]">d</span>
            <span className="animate-bounce [animation-delay:0.2s]">i</span>
            <span className="animate-bounce [animation-delay:0.25s]">n</span>
            <span className="animate-bounce [animation-delay:0.3s]">g</span>
            <span className="animate-bounce [animation-delay:0.35s]">.</span>
            <span className="animate-bounce [animation-delay:0.4s]">.</span>
            <span className="animate-bounce [animation-delay:0.45s]">.</span>
          </span>
        </motion.div>

        {!isOnline && (
          <motion.div
            className="mt-4 text-sm text-red-500 dark:text-red-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            You're offline. Trying to reconnect...
          </motion.div>
        )}
      </div>
    </div>
  )
}
