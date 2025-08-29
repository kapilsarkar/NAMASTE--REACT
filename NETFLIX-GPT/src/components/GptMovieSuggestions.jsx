import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Footer from "./Footer";

const GptMovieSuggestions = () => {
  const { movieResults, gptMovieNames } = useSelector((store) => store.gpt);
  if (!gptMovieNames) return null;

  return (
    <>
      <div className="p-6 m-4 bg-gradient-to-b from-gray-900 to-black text-white bg-opacity-100 rounded-2xl shadow-lg">
        <div className="w-full space-y-8">
          {gptMovieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GptMovieSuggestions;
