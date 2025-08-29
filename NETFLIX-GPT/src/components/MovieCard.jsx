import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null; 

  return (
    <div className="flex-shrink-0 w-28 sm:w-32 md:w-44 lg:w-48 xl:w-52 transition-transform duration-300 hover:scale-105">
      <img
        alt="Movie Poster"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
