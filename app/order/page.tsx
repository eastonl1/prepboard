"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Package } from "lucide-react"

export default function OrderPage() {
  const [formData, setFormData] = useState({
    bindingStyle: "ring",
    quantity: "1",
    email: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    alert("📬 You’ll be notified when ordering goes live!")
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-8 relative">
        <div className="absolute -top-2 -left-4 text-3xl animate-bounce">📦</div>
        <div className="absolute -top-4 -right-2 text-2xl animate-pulse">✨</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Choose Your Planner Style
        </h1>
        <p className="text-gray-700 text-lg">
          Get a sneak peek of how your printed planner will look — then join the waitlist to order 📬
        </p>
      </div>

      {/* Product Options */}
      <form onSubmit={handleNotify} className="space-y-8">
        <Card className="border-2 border-purple-200 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Package className="h-6 w-6" />
              Pick Your Format (22"x17")
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 p-6">
            {[
              {
                id: "ring",
                label: "Ring Flip (spiral bound) 🌀",
                description: "Lays flat, easy to flip pages",
              },
              {
                id: "tearoff",
                label: "Tear-off Pad (perforated) ✂️",
                description: "Remove and share pages easily",
              },
            ].map((option) => (
              <div
                key={option.id}
                onClick={() => handleInputChange("bindingStyle", option.id)}
                className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${
                  formData.bindingStyle === option.id
                    ? "border-purple-500 bg-purple-100"
                    : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                }`}
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{option.label}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-end gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="quantity" className="text-lg font-semibold text-gray-800">
              🔢 Quantity
            </Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              max={10}
              value={formData.quantity}
              onChange={(e) => handleInputChange("quantity", e.target.value)}
              className="border-2 border-purple-200 focus:border-purple-500"
            />
          </div>
          <Button
            type="button"
            disabled
            className="bg-gray-300 text-gray-600 font-semibold py-6 px-8 rounded-xl cursor-not-allowed"
          >
            🛒 Checkout (Coming Soon)
          </Button>
        </div>

        <Card className="border-2 border-blue-200 shadow bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            <CardTitle className="text-xl">📧 Get Notified</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Label htmlFor="email" className="text-gray-800 font-medium">
              Enter your email to be the first to know when orders open:
            </Label>
            <div className="flex gap-4">
              <Input
                id="email"
                type="email"
                required
                placeholder="you@school.edu"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="border-2 border-blue-200 focus:border-blue-500"
              />
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg"
              >
                Notify Me
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
