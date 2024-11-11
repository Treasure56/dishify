import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 app-container py-6">
      <div className="flex flex-col space-y-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Personal
          <span className="text-orange-500"> Culinary </span>
          Journey Starts Here
        </h2>
        <p className="text-lg text-gray-600">
          Unlock unlimited premium recipes and transform your cooking experience
          with step-by-step guidance, personalized recommendations, and a
          vibrant cooking community.
        </p>
        <button className="px-6 py-3 w-fit bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">
          Get Started
        </button>
      </div>
      <div className="flex relative p-4 h-auto items-center left-10">
        <Image
          className="w-2/5 z-20 transform translate-y-16 " 
          src="/images/recipe-home-portrait.png"
          width={600}
          height={600}
          alt="Top Recipe Image"
        />

        <Image
          className="w-2/5 absolute top-0 left-44 z-10" 
          src="/images/recipe-portrait.png"
          width={600}
          height={600}
          alt="Background Recipe Image"
        />
      </div>
    </div>
  );
}
