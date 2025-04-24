'use client'

import { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen'

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const wait = async () => {
      if (document.fonts?.ready) await document.fonts.ready
      // await new Promise(r => setTimeout(r, 5550)) // <- add delay here if testing
      setReady(true)
    }
    wait()
  }, [])

  if (!ready) return <SplashScreen />
  return <>{children}</>
}
