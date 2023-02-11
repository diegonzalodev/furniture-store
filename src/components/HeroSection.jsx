import hero from "../images/hero.png";

function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-7 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Find the best furniture collections and accesories for every room
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-xl md:text-2xl lg:text-3xl dark:text-gray-400">
            Pieces that provide a somple canvas for new accents
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={hero} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
