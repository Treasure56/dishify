import Explore from "./Explore"
import Hero from "./Hero"

export default function page() {
  return (
    <div className="min-h-screen bg-[#faf4f0] text-gray-800">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16 app-container py-6">
          <h1 className="text-2xl font-bold">Dishify</h1>
          <button className="px-4 py-2 text-sm font-medium bg-[#82B39C] text-white rounded-[35px] p-3">
            Get the App
          </button>
        </nav>

        <Hero />
        <Explore />
      </div>
  )
}