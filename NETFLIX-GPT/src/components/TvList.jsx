import TvCard from "./TvCard";

const TvList = ({ title, tv }) => {
  if (!tv || tv.length === 0) {
    return (
      <div className="px-4 sm:px-6 py-4 bg-black text-white">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {title}
        </h2>
        <p className="text-gray-400">No TV shows available.</p>
      </div>
    );
  }

  return (
    <div className="relative mt-3 bg-black py-4">
      {/* Section title */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-white tracking-wide capitalize animate-fadeIn">
          {title}
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        {/* Gradient fade - left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-8 md:w-12 bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* Gradient fade - right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-8 md:w-12 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrollable row */}
        <div
          className="flex gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-thin sm:scrollbar-hide scroll-smooth touch-pan-x"
        >
          {tv.map((item) => (
            <div key={item.id} className="flex-shrink-0 snap-start">
              <TvCard
                posterPath={item.poster_path}
                className="w-[clamp(7rem,15vw,14rem)] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvList;
