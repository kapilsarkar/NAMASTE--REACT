import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black/90 text-white rounded-lg shadow-lg">
        <div className="relative z-20 px-4 sm:px-6 md:px-10 -mt-20 sm:-mt-32 md:-mt-20 lg:-mt-56 space-y-8 sm:space-y-12">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Upcoming" movies={movies.upComingMovies} />
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
