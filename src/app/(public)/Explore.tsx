import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

/* eslint-disable @next/next/no-img-element */
export default function Explore() {
  return (
    <section className=" grid md:grid-cols-3 app-container max-w-[900px] mx-auto py-16 gap-4">
      <div className=" relative max-md:hidden">
        <Image
          className="z-20  w-full aspect-[1840/3600] "
          src="/images/recipe-home-portrait.png"
          width={600}
          height={600}
          alt="Top Recipe Image"
        />
      </div>

      <div className="col-span-2 flex flex-col gap-4 py-6">
        <div className="grid grid-cols-2 ">
          <div className="bg-primary aspect-[5/3] relative -right-3 p-4 flex flex-col items-center -rotate-[10deg] origin-bottom-left  justify-center text-secondary-light  rounded-2xl">
            <p className="text-5xl font-semibold">48%</p>
            <p className="font-semibold">Happy Users</p>
          </div>
          <div className="bg-secondary p-4 flex flex-col items-center justify-center rotate-[8deg] origin-bottom-right aspect-[5/3] text-black  rounded-2xl">
            <p className="text-5xl font-semibold">200+</p>
            <p className="font-semibold">Reviews</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-neutral-100 p-4 md:p-8 gap-4 rounded-2xl justify-between">
          <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-semibold">Discover New Recipes</h3>
            <p className="text-sm text-gray-700">
              Uncover delicious recipes and cooking tips to elevate your
              culinary experience. Explore flavors from around the world right
              in your kitchen!
            </p>
          </div>
            <button className="bg-primary text-white p-2 rounded-xl w-fit px-5 flex items-center  gap-2">
              Go to recipe guide <FaArrowRightLong />
            </button>
        </div>
      </div>
    </section>
  );
}
