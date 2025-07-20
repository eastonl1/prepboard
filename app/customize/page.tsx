"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X, Clock, Calendar } from "lucide-react"

function CustomizePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [cycleDays, setCycleDays] = useState("")
  const [name, setName] = useState("")
  const [timeBlocks, setTimeBlocks] = useState<string[]>([""])

  // Prefill from query params
  useEffect(() => {
    const initialCycleDays = searchParams.get("cycleDays")
    const initialName = searchParams.get("name")
    const initialTimeBlocks = searchParams.get("timeBlocks")

    if (initialCycleDays) setCycleDays(initialCycleDays)
    if (initialName) setName(initialName)
    if (initialTimeBlocks) {
      try {
        const parsed = JSON.parse(initialTimeBlocks)
        if (Array.isArray(parsed)) setTimeBlocks(parsed)
      } catch (e) {
        console.error("Invalid timeBlocks JSON:", e)
      }
    } else {
      setTimeBlocks(Array(8).fill(""))
    }

  }, [searchParams])

  const addTimeBlock = () => setTimeBlocks([...timeBlocks, ""])
  const removeTimeBlock = (index: number) => setTimeBlocks(timeBlocks.filter((_, i) => i !== index))
  const updateTimeBlock = (index: number, value: string) => {
    const updated = [...timeBlocks]
    updated[index] = value
    setTimeBlocks(updated)
  }

  const handlePreview = () => {
    const params = new URLSearchParams({
      cycleDays,
      name,
      timeBlocks: JSON.stringify(timeBlocks),
    })
    router.push(`/preview?${params.toString()}`)
  }

  const isFormValid = !!cycleDays

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-8 relative">
        <div className="absolute -top-2 -left-4 text-3xl animate-spin-slow">📅</div>
        <div className="absolute -top-4 -right-2 text-2xl animate-bounce">✏️</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Customize Your Planner
        </h1>
        <p className="text-gray-700 text-lg">Design a weekly planner that fits your teaching style perfectly! 🎯</p>
      </div>

      <Card className="border-2 border-purple-200 shadow-xl bg-gradient-to-br from-white to-purple-50">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
          <CardTitle className="text-xl">Planner Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          {/* Name Input */}
          <div className="space-y-3">
            <Label htmlFor="name" className="text-lg font-semibold text-gray-800">
              Your Name
            </Label>
            <Input
              id="name"
              placeholder="e.g., Ms. Milne, or leave Blank!"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-200 focus:border-purple-500"
            />
          </div>

          {/* Cycle Days */}
          <div className="space-y-3">
            <Label htmlFor="cycle-days" className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>
                Number of Cycle Days <span className="text-red-500">*</span>
              </span>
            </Label>
            <Select value={cycleDays} onValueChange={setCycleDays}>
              <SelectTrigger className="border-2 border-blue-200 focus:border-blue-500 h-12">
                <SelectValue placeholder="Select cycle days 📅" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 9 }, (_, i) => i + 2).map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} Days
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Time Blocks */}
          <div className="space-y-3">
            <Label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              Time Blocks
            </Label>
            <div className="space-y-3">
              {timeBlocks.map((block, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="e.g., 9:00–9:45, Lunch 🍎, Planning Period ✏️, or leave Blank!"
                    value={block}
                    onChange={(e) => updateTimeBlock(index, e.target.value)}
                    className="border-2 border-green-200 focus:border-green-500"
                  />
                  {timeBlocks.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeTimeBlock(index)}
                      className="border-2 border-red-200 hover:border-red-400 hover:bg-red-50"
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addTimeBlock}
                className="w-full bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-400 hover:from-green-100 hover:to-emerald-100"
              >
                <Plus className="h-4 w-4 mr-2 text-green-600" />
                Add Time Block ➕
              </Button>
            </div>
          </div>

          {/* Preview Button */}
          <Button
            onClick={handlePreview}
            disabled={!isFormValid}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg py-6 rounded-full"
            size="lg"
          >
            🔍 Preview Your Planner
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
export default dynamic(() => Promise.resolve(CustomizePage), { ssr: false })
