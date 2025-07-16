"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import type { ButtonProps } from "@/components/ui/button"

interface InteractiveButtonProps extends ButtonProps {
  loadingText?: string
  successText?: string
  onAsyncClick?: () => Promise<void>
}

export function InteractiveButton({
  children,
  loadingText = "Loading...",
  successText = "Success!",
  onAsyncClick,
  onClick,
  ...props
}: InteractiveButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onAsyncClick) {
      setIsLoading(true)
      try {
        await onAsyncClick()
        setIsSuccess(true)
        setTimeout(() => setIsSuccess(false), 2000)
      } catch (error) {
        console.error("Button action failed:", error)
      } finally {
        setIsLoading(false)
      }
    } else if (onClick) {
      onClick(e)
    }
  }

  const getButtonContent = () => {
    if (isLoading) {
      return (
        <>
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
          {loadingText}
        </>
      )
    }
    if (isSuccess) {
      return successText
    }
    return children
  }

  return (
    <Button
      {...props}
      onClick={handleClick}
      disabled={isLoading || props.disabled}
      data-cursor-variant={isLoading ? "loading" : "hover"}
      className={`${props.className} transition-all duration-300 ${
        isSuccess ? "bg-green-600 hover:bg-green-700" : ""
      } ${isLoading ? "cursor-wait" : "cursor-pointer"}`}
    >
      {getButtonContent()}
    </Button>
  )
}
