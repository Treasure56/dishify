/* eslint-disable @next/next/no-img-element */
export default function Down() {
  return (
   <section className="app-container py-16">
     <div className="grid md:grid-cols-2  bg-secondary rounded-xl overflow-hidden items-center">
      <div className="flex flex-col gap-4 app-container py-6">
        <h3 className="font-semibold text-2xl text-primary">Download my App</h3>
        <p className="font-semibold md:text-4xl text-2xl ">Enjoy Effortless Recipe Discovery Anytime, Anywhere!</p>
        <p className="text-neutral-400">
          Discover local chefs and home-cooked flavors with our intuitive
          geolocation feature. Download our app to connect with talented cooks
          and enjoy authentic, homemade meals on the go.
        </p>
        <div className="grid md:flex grid-cols-2 gap-2">
            <img src="/images/playstore.svg" alt="" />
            <img src="/images/appstore.svg" alt="" />
        </div>
      </div>
      <img src="/images/corn.jpeg" className="object-cover aspect-[5/3] h-full" alt="" />
    </div>
   </section>
  );
}
