"use client"

import React from "react"
import { PDFViewer } from "@react-pdf/renderer"
import dynamic from "next/dynamic"
import PlannerPDF from "./PlannerPDF"

interface PDFPreviewWrapperProps {
  name: string
  cycleDays: number
  timeBlocks: string[]
}

function PDFPreviewWrapper({
  name,
  cycleDays,
  timeBlocks,
}: PDFPreviewWrapperProps) {
  return (
    <PDFViewer width="100%" height={1000} showToolbar>
      <PlannerPDF
        name={name}
        cycleDays={cycleDays}
        timeBlocks={timeBlocks}
      />
    </PDFViewer>
  )
}

// ✅ Disable SSR for this component because PDFViewer requires browser APIs
export default dynamic(() => Promise.resolve(PDFPreviewWrapper), {
  ssr: false,
})
