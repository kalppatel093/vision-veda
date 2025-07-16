"use client"

import { useEffect, useState } from "react"

export function CursorAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .cursor-pointer, input, textarea, select',
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true)
          const element = el as HTMLElement
          if (element.dataset.cursorVariant) {
            setCursorVariant(element.dataset.cursorVariant)
          } else {
            setCursorVariant("hover")
          }
        })
        el.addEventListener("mouseleave", () => {
          setIsHovering(false)
          setCursorVariant("default")
        })
      })
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Initial setup and re-setup on DOM changes
    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      observer.disconnect()
    }
  }, [])

  const getCursorSize = () => {
    switch (cursorVariant) {
      case "hover":
        return isClicking ? "scale-75" : "scale-150"
      case "text":
        return "scale-125"
      case "loading":
        return "scale-200"
      default:
        return isClicking ? "scale-75" : "scale-100"
    }
  }

  const getCursorColor = () => {
    switch (cursorVariant) {
      case "hover":
        return "bg-blue-500/30 border-blue-500"
      case "text":
        return "bg-green-500/30 border-green-500"
      case "loading":
        return "bg-purple-500/30 border-purple-500"
      default:
        return "bg-blue-400/20 border-blue-400"
    }
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 w-6 h-6 rounded-full border-2 pointer-events-none z-[9999] transition-all duration-200 ease-out ${getCursorSize()} ${getCursorColor()}`}
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        }}
      />

      {/* Cursor trail */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998] transition-all duration-500 ease-out ${
          isHovering ? "bg-blue-500/50" : "bg-gray-400/30"
        }`}
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      />

      {/* Loading cursor animation */}
      {cursorVariant === "loading" && (
        <div
          className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9997]"
          style={{
            transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
          }}
        >
          <div className="w-full h-full border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  )
}
