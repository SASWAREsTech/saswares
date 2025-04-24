'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowUp, FaArrowLeft } from 'react-icons/fa'

const StickyNavButtons = () => {
  const [showScroll, setShowScroll] = useState(false)
  const [showBack, setShowBack] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Only show back button if user came from another page/site
    if (typeof window !== 'undefined') {
      const cameFromExternal = document.referrer && !document.referrer.includes(window.location.hostname)
      const hasRealHistory = window.history.length > 1

      // Only show back if it’s not just splash → home
      setShowBack(cameFromExternal || hasRealHistory)
    }

    // Scroll listener for Scroll-to-top button
    const onScroll = () => {
      setShowScroll(window.scrollY > 100)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* 🔝 Scroll to Top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg dark:bg-red-500 dark:hover:bg-red-600 transition"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* 🔙 Back Button */}
      {showBack && (
        <button
          onClick={() => router.back()}
          className="fixed top-6 left-6 z-50 p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-lg dark:bg-gray-200 dark:text-black dark:hover:bg-gray-100 transition"
          aria-label="Go back"
        >
          <FaArrowLeft />
        </button>
      )}
    </>
  )
}

export default StickyNavButtons
