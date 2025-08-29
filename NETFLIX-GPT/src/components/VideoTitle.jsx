import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full max-w-screen aspect-video absolute top-0 left-0 pt-[10%] sm:pt-[15%] md:pt-[20%] px-4 sm:px-8 md:px-24 bg-gradient-to-r from-black/80 via-black/40 to-transparent text-white">
      
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-tight">
        {title}
      </h2>

      {/* Overview */}
      <p className="py-4 text-sm sm:text-base md:text-lg w-full sm:w-3/4 md:w-2/4 lg:w-1/3 text-gray-200 leading-relaxed line-clamp-3 sm:line-clamp-none">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        <button className="bg-white hover:bg-opacity-80 text-black font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-lg transition duration-300 flex items-center">
          <FaPlay className="mr-2" /> <span>Play</span>
        </button>
        <button className="bg-gray-700/70 hover:bg-gray-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-lg transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
