"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "slideInUp" | "zoomIn" | "fadeIn"
  delay?: number
  className?: string
}

export function AnimatedSection({ children, animation = "fadeInUp", delay = 0, className = "" }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClass} opacity-0 translate-y-8`
        case "slideInLeft":
          return `${baseClass} opacity-0 -translate-x-8`
        case "slideInRight":
          return `${baseClass} opacity-0 translate-x-8`
        case "slideInUp":
          return `${baseClass} opacity-0 translate-y-8`
        case "zoomIn":
          return `${baseClass} opacity-0 scale-95`
        case "fadeIn":
          return `${baseClass} opacity-0`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
