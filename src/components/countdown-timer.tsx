"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center space-x-4">
      <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
        <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
        <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
        <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  )
}
