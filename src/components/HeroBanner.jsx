const HeroBanner = () => (
  <div className="flex justify-center items-center flex-col text-center p-8 min-h-screen space-y-5">
    <h1 className="text-5xl md:text-6xl font-bold">Master Every Move</h1>
    <p className="text-lg text-gray-500 max-w-2xl">
      Explore a massive library of exercise GIFs—search by name, target muscle,
      or category. No guesswork, just perfect form.
    </p>
    <a href="#exercises">
      <button className="bg-[#FF2625] text-white py-2 px-4 rounded hover:bg-[#FF2625]/80 transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
        Browse Exercises
      </button>
    </a>
  </div>
);

export default HeroBanner;
