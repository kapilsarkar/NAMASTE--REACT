import { FaPlay } from "react-icons/fa";

const TvVideoTitle = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-r from-black/90 via-black/60 to-transparent text-white z-10">
      
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight max-w-3xl">
        Wednesday Official Blooper Reel | Netflix,
      </h2>

      {/* Overview */}
      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-full sm:max-w-2xl lg:max-w-xl text-gray-200 leading-relaxed line-clamp-3 md:line-clamp-none bg-black/30 sm:bg-transparent rounded-md sm:rounded-none p-2 sm:p-0">
        "Wednesday" can refer to the day of the week, known as "hump day" in North America, or the Netflix series Wednesday, which follows Wednesday Addams as she attends a magical boarding school called Nevermore Academy to solve a monstrous mystery
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
        <button className="flex items-center bg-white text-black font-semibold py-2 px-5 sm:py-3 sm:px-7 md:py-3 md:px-8 text-sm sm:text-base rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/90">
          <FaPlay className="mr-2 text-sm sm:text-base" /> Play
        </button>

        <button className="bg-gray-700/70 text-white font-semibold py-2 px-5 sm:py-3 sm:px-7 md:py-3 md:px-8 text-sm sm:text-base rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-600/90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TvVideoTitle;
