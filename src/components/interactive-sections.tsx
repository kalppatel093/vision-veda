"use client"

import { InteractiveButton } from "./interactive-button"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ReactNode } from "react"

export { InteractiveButton } from './interactive-button'

export function HeaderButtons() {
  return (
    <InteractiveButton
      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg"
      onAsyncClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        // Simulate order processing
      }}
      loadingText="प्रोसेसिंग..."
      successText="कार्ट में जोड़ा गया!"
    >
      अभी ऑर्डर करें
      <ArrowRight className="ml-2 h-4 w-4" />
    </InteractiveButton>
  )
}

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <InteractiveButton
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300"
        onAsyncClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000))
          // Simulate order processing
        }}
        loadingText="ऑर्डर प्रोसेसिंग..."
        successText="ऑर्डर पुष्टि!"
      >
        अभी ऑर्डर करें - 50% छूट
        <ArrowRight className="ml-2 h-5 w-5" />
      </InteractiveButton>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Badge className="bg-blue-600 text-white">GMP</Badge>
          <Badge className="bg-green-600 text-white">FDA अनुमोदित</Badge>
          <Badge className="bg-purple-600 text-white">आयुर्वेदिक</Badge>
        </div>
      </div>
    </div>
  )
}

export function BenefitsButton() {
  return (
    <InteractiveButton 
      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3"
      onAsyncClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }}
      loadingText="प्रोसेसिंग..."
      successText="कार्ट में जोड़ा गया!"
    >
      आज ही जोखिम मुक्त आज़माएं
    </InteractiveButton>
  )
}

export function TestimonialsButton() {
  return (
    <InteractiveButton 
      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3"
      onAsyncClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }}
      loadingText="प्रोसेसिंग..."
      successText="कार्ट में जोड़ा गया!"
    >
      संतुष्ट ग्राहकों में शामिल हों
    </InteractiveButton>
  )
}

export function IngredientsButton() {
  return (
    <InteractiveButton 
      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
      onAsyncClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }}
      loadingText="प्रोसेसिंग..."
      successText="कार्ट में जोड़ा गया!"
    >
      प्राकृतिक शक्ति का अनुभव करें
    </InteractiveButton>
  )
}

interface FlexibleButtonProps {
  children: ReactNode
}

export function PricingButton({ children }: FlexibleButtonProps) {
  return (
    <InteractiveButton
      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-lg py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
      onAsyncClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }}
      loadingText="ऑर्डर प्रोसेसिंग..."
      successText="ऑर्डर पुष्टि!"
    >
      {children}
    </InteractiveButton>
  )
}

export function ContactButton({ children }: FlexibleButtonProps) {
  return (
    <InteractiveButton
      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-lg py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
      onAsyncClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }}
      loadingText="भेज रहा है..."
      successText="संदेश भेजा गया!"
    >
      {children}
    </InteractiveButton>
  )
} 