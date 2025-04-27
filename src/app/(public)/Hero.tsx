/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <img src="/images/bg.png" alt="Dishify background " className="absolute top-0 left-0 w-full h-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-t from-secondary-light via-[#faf4f0aa] to-[#faf4f0] backdrop-blur-[100px] relative justify-center gap-8 app-container">
        <div className="flex flex-col space-y-6 relative md:p-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Personal
            <span className="text-primary"> Culinary </span>
            Journey Starts Here
          </h1>
          <p className="text-lg text-gray-600">
            Unlock unlimited premium recipes and transform your cooking
            experience with step-by-step guidance, personalized recommendations,
            and a vibrant cooking community.
          </p>
          <button className="px-6 py-3 w-fit bg-primary text-white font-semibold rounded-full hover:bg-primary transition-colors">
            Get Started
          </button>
        </div>
        <div className="flex relative h-[500px] p-4 items-center overflow-hidden">
          <Image
            className="w-7/12 z-20 absolute top-20 left-0 aspect-[1840/3600] "
            src="/images/recipe-home-portrait.png"
            width={600}
            height={600}
            alt="Top Recipe Image"
          />

          <Image
            className="w-7/12 absolute top-0 right-0 z-10 aspect-[1840/3600]"
            src="/images/recipe-portrait.png"
            width={600}
            height={600}
            alt="Background Recipe Image"
          />
        </div>
      </div>
    </section>
  );
}
