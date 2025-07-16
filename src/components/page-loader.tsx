"use client"

import { useEffect, useState } from "react"
import { LoadingOverlay } from "./loading-overlay"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return <LoadingOverlay isLoading={isLoading} message="Preparing your vision restoration journey..." />
}
