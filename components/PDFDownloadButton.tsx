"use client"

import React from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PlannerPDF from "./PlannerPDF"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface Props {
  name: string
  cycleDays: number
  timeBlocks: string[]
  className?: string
}

export default function PDFDownloadButton({
  name,
  cycleDays,
  timeBlocks,
  className = "",
}: Props) {
  return (
    <PDFDownloadLink
      document={<PlannerPDF name={name} cycleDays={cycleDays} timeBlocks={timeBlocks} />}
      fileName="prepboard-planner.pdf"
    >
      {({ loading }) => (
        <Button
          variant="outline"
          className={className}
        >
          <Download className="h-5 w-5 mr-2" />
          {loading ? "Generating PDF..." : "⬇️ Download PDF"}
        </Button>
      )}
    </PDFDownloadLink>
  )
}
