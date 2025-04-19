'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Particles from '@tsparticles/react'
import { loadBasic } from '@tsparticles/basic'
import { Engine } from '@tsparticles/engine'

const particlesInit = async (engine: Engine) => {
  await loadBasic(engine)
}

const CTASection = () => {
  return (
    <section className="relative py-36 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#0a0a0a] transition-colors duration-300 overflow-hidden text-center text-gray-900 dark:text-white scroll-mt-24">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            color: { value: '#ffffff' },
            links: { enable: true, color: '#ffffff', distance: 150, opacity: 0.15 },
            move: { enable: true, speed: 0.5 },
            size: { value: { min: 0.5, max: 2 } },
            opacity: { value: 0.3 },
            number: { value: 60, density: { enable: true, area: 800 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Animated Light Blobs */}
      <div className="absolute w-[500px] h-[500px] top-[-150px] left-[-150px] bg-gradient-to-br from-pink-500 to-purple-500 blur-[180px] opacity-20 animate-pulse -z-10" />
      <div className="absolute w-[500px] h-[500px] bottom-[-150px] right-[-150px] bg-gradient-to-tr from-blue-500 to-cyan-500 blur-[180px] opacity-20 animate-pulse -z-10" />

      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Build Something Unforgettable
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Whether it's AI, automation, dashboards or complete web platforms — our team makes it real.
      </motion.p>

      {/* Psychology trigger line */}
      <motion.p
        className="text-base italic text-gray-500 dark:text-gray-400 mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        “The best time to start was yesterday. The next best time is now.”
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Link href="#contact">
          <button className="px-8 py-4 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-500 hover:to-cyan-500 transition-all text-white shadow-md shadow-pink-500/30 hover:shadow-cyan-500/40">
            🚀 Start Your Project
          </button>
        </Link>
      </motion.div>

      <p className="mt-4 text-sm text-gray-500 dark:text-white/40">
        No pressure. We usually respond within 24 hours.
      </p>
    </section>
  )
}

export default CTASection
