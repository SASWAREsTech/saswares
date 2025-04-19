'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqItems = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in Python, AI/ML, SQL, MongoDB, Java, FastAPI, Oracle DB, React, and modern desktop/web development.',
  },
  {
    question: 'Do you work internationally?',
    answer:
      'Absolutely. We collaborate with clients across the globe — our workflows are entirely remote-friendly.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope. Smaller projects take 1-2 weeks, while larger systems range from 4-6 weeks or more.',
  },
  {
    question: 'Can you handle both backend and frontend?',
    answer:
      "Yes — we're a full-stack team. We build frontend UIs, backend APIs, and architect the database and system logic.",
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) =>
    setActiveIndex(index === activeIndex ? null : index)

  return (
    <section
      id="faq"
      className="relative py-32 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-[#0c0c0c] dark:to-[#0a0a0a] transition-colors duration-300 text-gray-900 dark:text-white overflow-hidden scroll-mt-28"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] top-[-100px] left-[-100px] bg-gradient-to-br from-purple-500 to-pink-500 blur-[160px] opacity-20" />
        <div className="absolute w-[400px] h-[400px] bottom-[-150px] right-[-100px] bg-gradient-to-tr from-blue-500 to-cyan-500 blur-[140px] opacity-20" />
      </div>

      <motion.h2
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md px-6 py-4 transition-colors"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left text-lg sm:text-xl font-medium text-gray-800 dark:text-white focus:outline-none"
            >
              <span>{item.question}</span>
              <motion.div
                key={activeIndex === index ? 'minus' : 'plus'}
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3 text-gray-700 dark:text-white/70 text-sm sm:text-base leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
