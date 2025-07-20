"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function GetAccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Optional: Save to Supabase, Resend, etc.
    // await fetch("/api/collect-email", { method: "POST", body: JSON.stringify({ email }) })

    const previewURL = new URL("/preview", window.location.origin)

    // Preserve all existing customization params
    searchParams.forEach((value, key) => {
      previewURL.searchParams.set(key, value)
    })

    router.push(previewURL.toString())
  }

  return (
    <div className="container max-w-xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Access Your Planner</h1>
      <p className="text-gray-600 mb-6 text-lg">
        Enter your email to unlock the preview and download page.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-left">
          <Label htmlFor="email" className="text-lg font-medium">Email Address <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1"
          />
        </div>

        <Button
          type="submit"
          disabled={submitting || !email}
          className="w-full text-lg py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          ➡️ Continue to Preview
        </Button>
      </form>
    </div>
  )
}
