'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Lazy load typed animation
const ReactTyped = dynamic(() => import('react-typed').then(mod => mod.ReactTyped), { ssr: false })

const Hero = () => {
  const [showBlobs, setShowBlobs] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(() => setShowBlobs(true))
    } else {
      setTimeout(() => setShowBlobs(true), 200)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden py-28 sm:py-36 bg-gradient-to-br from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#0a0a0a] transition-colors duration-300"
    >
      {/* Delayed Animated Background Blobs */}
      {showBlobs && (
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
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            AI-Powered Software<br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 bg-clip-text text-transparent">
              Built by Engineers.
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Scalable, smart, full-stack — we turn your ideas into reality using bleeding-edge tech and actual engineering principles...
          </motion.p>

          <motion.div
            className="mt-6 text-sm sm:text-base font-mono text-blue-600 dark:text-red-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ReactTyped
              strings={[
                'MLOps CICD Pipelines',
                'AI Agents and Chatbots',
                'Artificial Intelligence',
                'Software Development',
                'Data Analysis and Engineering',
                'Website Development',
                'Organizational Management Systems'
              ]}
              typeSpeed={30}
              backSpeed={15}
              backDelay={2000}
              loop
            />
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-md dark:bg-red-500 dark:hover:bg-red-600 transition-colors"
            >
              Let&apos;s Work Together
            </a>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-red-400 hover:underline text-lg font-medium"
            >
              View Projects →
            </Link>
          </motion.div>
        </div>

        {/* Right: Logo or Illustration */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.04, rotateX: 1, rotateY: 2 }}
            className="relative p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 shadow-lg backdrop-blur-lg max-w-[260px] w-full transform-gpu transition-transform"
          >
            <Image
              src="/logo.png"
              alt="SASWAREs Logo"
              width={240}
              height={120}
              className="w-full h-auto object-contain"
            />

            {/* Animated Glow */}
            <motion.div
              className="absolute inset-0 z-[-1] rounded-xl blur-[100px]"
              style={{
                background: 'conic-gradient(from 180deg,rgb(108, 153, 224),rgb(71, 46, 95),rgb(252, 241, 241), #3b82f6)'
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'linear'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
