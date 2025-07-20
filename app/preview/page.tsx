"use client"

import React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Package } from "lucide-react"
import dynamic from "next/dynamic"
import PlannerPDF from "@/components/PlannerPDF"

// ✅ Dynamically import PDFViewer and PDFDownloadButton to avoid SSR issues
const PDFViewer = dynamic(() => import("@react-pdf/renderer").then(mod => mod.PDFViewer), { ssr: false })
const PDFDownloadButton = dynamic(() => import("@/components/PDFDownloadButton"), { ssr: false })

export default function PreviewPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const cycleDays = parseInt(searchParams.get("cycleDays") || "5")
  const timeBlocks = JSON.parse(searchParams.get("timeBlocks") || "[]")
  const name = searchParams.get("name") || ""

  const handleOrderPhysical = () => {
    router.push(`/order?${searchParams.toString()}`)
  }

  const handleBack = () => {
    router.push(`/customize?${searchParams.toString()}`)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8 relative">
        <div className="absolute -top-2 -left-4 text-3xl animate-pulse">👀</div>
        <div className="absolute -top-4 -right-2 text-2xl animate-bounce">✨</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Preview Your Planner
        </h1>
        <p className="text-gray-700 text-lg">
          Here's how your custom weekly planner will look! 🎉
        </p>
      </div>

      {/* Action Buttons */}
      <div className="max-w-xl mx-auto mb-10">
        <Button
          onClick={handleOrderPhysical}
          variant="outline"
          className="w-full mb-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 hover:border-purple-500 hover:from-purple-100 hover:to-pink-100 text-purple-700 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg py-6 rounded-full"
          size="lg"
        >
          📦 <Package className="h-5 w-5 ml-2" /> Order a Physical Copy
        </Button>

        <PDFDownloadButton
          name={name}
          cycleDays={cycleDays}
          timeBlocks={timeBlocks}
          className="w-full mb-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 hover:border-purple-500 hover:from-purple-100 hover:to-pink-100 text-purple-700 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg py-6 rounded-full"
        />

        <Button
          onClick={handleBack}
          variant="outline"
          className="w-full bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 hover:border-purple-500 hover:from-purple-100 hover:to-pink-100 text-purple-700 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg py-6 rounded-full"
          size="lg"
        >
          🔙 Back to Customize
        </Button>
      </div>

      {/* PDF Viewer Preview */}
      <div className="w-full overflow-auto flex justify-center">
        <div className="max-w-[1600px] w-full">
          <PDFViewer width="100%" height={1000} showToolbar>
            <PlannerPDF name={name} cycleDays={cycleDays} timeBlocks={timeBlocks} />
          </PDFViewer>
        </div>
      </div>
    </div>
  )
}
