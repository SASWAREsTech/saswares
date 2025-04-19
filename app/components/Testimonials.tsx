'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Product Manager, AI Startup',
    quote:
      'SASWAREs delivered beyond expectations. Their backend team is incredibly fast and their ML pipeline saved us weeks of dev time.'
  },
  {
    name: 'Ali Raza',
    role: 'CTO, Enterprise App',
    quote:
      'From API integration to full-stack delivery, their team is top-tier. Professional, sharp, and reliable.'
  },
  {
    name: 'Emma Lin',
    role: 'Founder, HealthTech',
    quote:
      'They helped us automate 70% of our data pipeline with Python and FastAPI. The team was super responsive.'
  }
]

const Testimonials = () => {
  const [visibleIndex, setVisibleIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleNext = () => setVisibleIndex(i => (i + 1) % testimonials.length)
  const handlePrev = () => setVisibleIndex(i => (i - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[visibleIndex]
  const next = testimonials[(visibleIndex + 1) % testimonials.length]

  // Autoplay: advance every 5s unless hovered
  useEffect(() => {
    if (isHovered) return

    timerRef.current = setTimeout(handleNext, 3000)

    return () => clearTimeout(timerRef.current!)
  }, [visibleIndex, isHovered])

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0c0c0c] transition-colors">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>

        <div
          className="relative h-[300px] sm:h-[280px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Bottom stacked card (next) */}
          <div className="absolute top-6 left-0 w-full opacity-50 scale-95 z-0">
            <Tilt
              glareEnable
              glareMaxOpacity={0.08}
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              className="rounded-xl"
            >
              <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-xl p-8 shadow-lg backdrop-blur-xl pointer-events-none">
                <p className="text-md text-gray-500 dark:text-gray-400 italic mb-4">“{next.quote}”</p>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">{next.name}</h4>
                <p className="text-xs text-gray-400 dark:text-gray-500">{next.role}</p>
              </div>
            </Tilt>
          </div>

          {/* Top visible card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -120) handleNext()
                else if (info.offset.x > 120) handlePrev()
              }}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full z-10 cursor-grab active:cursor-grabbing"
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.1}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="rounded-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: '0 12px 32px rgba(0,0,0,0.15)' }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="relative bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-xl p-8 shadow-xl backdrop-blur-md group transition-all duration-300"
                >
                  {/* Soft glow behind */}
                  <div
                    className="absolute inset-0 z-[-1] blur-[80px] opacity-40"
                    style={{
                      background: 'radial-gradient(circle at center, #3b82f6, #9333ea, #ef4444)'
                    }}
                  />

                  <p className="text-lg text-gray-800 dark:text-gray-200 italic mb-6">“{current.quote}”</p>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{current.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{current.role}</p>
                </motion.div>
              </Tilt>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-sm mt-10 text-gray-400 dark:text-gray-500">
          Drag left/right to navigate →
        </p>
      </div>
    </section>
  )
}

export default Testimonials
