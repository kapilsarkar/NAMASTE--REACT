import { IMG_CDN_URL } from "../utils/constant";

const TrendingCard = ({ trending }) => {
  if (!trending || trending.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-4">
        No trending shows available.
      </p>
    );
  }

  return (
    <div
      className="
        mt-4 flex space-x-6 overflow-x-auto pb-10
        scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-800
      "
    >
      {trending.slice(0, 20).map((tr, index) => (
        <div
          key={tr.id}
          className="
            relative flex-shrink-0
            w-24 sm:w-28 md:w-36 lg:w-40 xl:w-48
            transition-transform duration-300 hover:scale-105 cursor-pointer
          "
        >
          {/* Poster */}
          <img
            alt={tr.title || tr.name || "Trending"}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            src={IMG_CDN_URL + tr.poster_path}
          />

          {/* Number + TOP 10 badge */}
          <div className="absolute -bottom-8 left-2 flex items-center space-x-2">
            <span
              className="
                text-6xl sm:text-6xl lg:text-7xl 
                font-extrabold text-white
                drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]
              "
            >
              {index + 1}
            </span>

            {/* Only show badge for Top 10 */}
            {index < 10 && (
              <span
                className="
                  bg-red-600 text-white font-bold px-2 py-1 text-xs sm:text-sm
                  transform -rotate-6 rounded-md shadow-md
                "
              >
                TOP 10
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCard;
