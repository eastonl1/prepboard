import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Printer, Truck, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 text-yellow-400 text-4xl animate-bounce">✨</div>
        <div className="absolute -top-2 -right-8 text-pink-400 text-3xl animate-pulse">🌟</div>
        <div className="absolute top-20 -left-8 text-purple-400 text-2xl animate-bounce delay-300">💫</div>

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
          PrepBoard
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">Design your perfect weekly planner ✏️</p>
        <p className="text-lg text-gray-600 mb-8">Printable or delivered to your classroom door! 📚</p>
        <Link href="/customize">
          <Button
            size="lg"
            className="text-xl px-10 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-full"
          >
            🎨 Start Customizing
          </Button>
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="text-center border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="pt-6">
            <div className="h-16 w-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-800">Customizable Layout</h3>
            <p className="text-gray-700">
              Choose your theme, cycle days, and time blocks to match your teaching schedule perfectly! 🎯
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="pt-6">
            <div className="h-16 w-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Printer className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-800">Print at Home</h3>
            <p className="text-gray-700">Get your custom planner as a PDF and print it whenever you need it! 🖨️</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="pt-6">
            <div className="h-16 w-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-800">Physical Delivery</h3>
            <p className="text-gray-700">
              Order a professionally printed and bound planner delivered to your classroom! 📦
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Teacher Love Section */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-red-500 fill-current" />
          <h2 className="text-3xl font-bold text-gray-800">Made with Teachers in Mind</h2>
          <Heart className="h-6 w-6 text-red-500 fill-current" />
        </div>
        <p className="text-lg text-gray-600 mb-8">
          From lesson planning to parent conferences, we know your time is precious. Create a planner that works as hard
          as you do! 👩‍🏫👨‍🏫
        </p>
        <div className="flex justify-center gap-4 text-4xl">
          <span className="animate-bounce">🍎</span>
          <span className="animate-bounce delay-100">📝</span>
          <span className="animate-bounce delay-200">📚</span>
          <span className="animate-bounce delay-300">✏️</span>
          <span className="animate-bounce delay-500">🌟</span>
        </div>
      </div>
    </div>
  )
}
