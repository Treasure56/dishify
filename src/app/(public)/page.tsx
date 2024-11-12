import Footer from "../components/Footer"
import Explore from "./Explore"
import Hero from "./Hero"

export default function page() {
  return (
    <div className=" text-gray-800">
        <nav className="flex items-center bg-secondary-light justify-between app-container py-8">
          <h1 className="text-2xl font-bold">Dishify</h1>
          <button className="px-6 py-3 w-fit bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">
            Get the App
          </button>
        </nav>

        <Hero />
        <Explore />
        <Footer />
      </div>
  )
}