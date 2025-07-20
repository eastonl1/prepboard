"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle, Mail, FileText } from "lucide-react"

export default function EmailPDFPage() {
  const [email, setEmail] = useState("")
  const [paperSize, setPaperSize] = useState("8.5x11")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-md">
        <Card className="text-center border-2 border-green-300 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="pt-8 pb-8">
            <div className="relative mb-6">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto animate-bounce" />
              <div className="absolute -top-2 -right-2 text-2xl animate-spin">✨</div>
              <div className="absolute -bottom-2 -left-2 text-xl animate-pulse">🎉</div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
              Success! 🎉
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              We'll send your beautiful PDF shortly to
              <br />
              <span className="font-semibold text-green-700">{email}</span> 📧
            </p>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-full px-8"
            >
              🏠 Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="text-center mb-8 relative">
        <div className="absolute -top-2 -left-4 text-3xl animate-bounce">📧</div>
        <div className="absolute -top-4 -right-2 text-2xl animate-pulse">✨</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Get Your PDF
        </h1>
        <p className="text-gray-700 text-lg">We'll email you a high-quality PDF of your custom planner! 🎯</p>
      </div>

      <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Mail className="h-6 w-6" />
            Email Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@school.edu 📚"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-blue-200 focus:border-blue-500 h-12 text-lg"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Paper Size
              </Label>
              <RadioGroup value={paperSize} onValueChange={setPaperSize}>
                <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="8.5x11" id="letter" />
                    <Label htmlFor="letter" className="font-medium text-gray-800">
                      8.5×11 (Letter) 📄
                    </Label>
                  </div>
                  <span className="text-sm text-gray-600">Perfect for home printing!</span>
                </div>
                <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="11x17" id="tabloid" />
                    <Label htmlFor="tabloid" className="font-medium text-gray-800">
                      11×17 (Tabloid) 📋
                    </Label>
                  </div>
                  <span className="text-sm text-gray-600">Extra space for notes!</span>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg py-6 rounded-full"
              size="lg"
            >
              📧 Send My PDF
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
