'use client'

import { useRef, useEffect, useState, memo } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaProjectDiagram,
  FaCodeBranch,
  FaLayerGroup,
  FaUsers
} from 'react-icons/fa'

// Memoized animated counter
const AnimatedCounter = memo(({ value }: { value: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1000
    const steps = 30
    const stepTime = duration / steps
    let current = 0

    const interval = setInterval(() => {
      current += 1
      const progress = Math.min(current / steps, 1)
      setCount(Math.floor(progress * value))
      if (progress >= 1) clearInterval(interval)
    }, stepTime)

    return () => clearInterval(interval)
  }, [isInView, value])

  return <span ref={ref}>{count}+</span>
})

const stats = [
  {
    label: 'Projects Delivered',
    value: 5,
    Icon: FaProjectDiagram
  },
  {
    label: 'Years Combined Experience',
    value: 2,
    Icon: FaCodeBranch
  },
  {
    label: 'Tech Stacks Mastered',
    value: 12,
    Icon: FaLayerGroup
  },
  {
    label: 'Team Members',
    value: 3,
    Icon: FaUsers
  }
]

const Stats = () => (
  <section className="py-24 px-6 bg-white dark:bg-black transition-colors" id="stats">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-gray-900 dark:text-white">
        Why Clients Trust Us
      </h2>

      <div className="flex flex-wrap justify-center gap-x-14 gap-y-10 sm:gap-x-20">
        {stats.map(({ label, value, Icon }, index) => (
          <motion.div
            key={label}
            className="flex flex-col items-center group text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl font-bold mb-1 text-blue-600 dark:text-red-400 tabular-nums">
              <AnimatedCounter value={value} />
            </p>
            <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 relative">
              <Icon className="text-blue-600 dark:text-red-400 text-lg mr-1" />
              <span className="relative group-hover:text-blue-600 dark:group-hover:text-red-400 transition-colors">
                {label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 group-hover:w-full transition-all duration-500"></span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Stats
