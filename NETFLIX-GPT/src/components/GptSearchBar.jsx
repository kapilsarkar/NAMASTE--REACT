import { Search } from "lucide-react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { askGemini } from "../utils/geminiClient.js"; // ✅ Import your Gemini function
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice.js";
const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const dispatch = useDispatch();

  //Search Movie In TMDB
  const searchMovieTMDB = async (mv) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        mv +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // 🔍 Handle search click
  const handleGeminiSearchClick = async (e) => {
    e.preventDefault();
    const query = searchText.current.value.trim();
    if (!query) return;

    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${query}. 
  Only give me names of 5 movies, comma separated like the example result: 
  Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    setLoading(true);
    try {
      const response = await askGemini(gptQuery);
      //console.log("Gemini Response:", response);

      // Convert Gemini response string into an array of movie names
      const movieNames = response.split(",").map((m) => m.trim());
      setMovies(movieNames);

      // Fetch TMDB details
      const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
      const TMDBResults = await Promise.all(promiseArray);
      //console.log(TMDBResults);
      dispatch(
        addGptMovieResult({
          gptMovieNames: movieNames,
          movieResults: TMDBResults,
        })
      );
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMovies(["Error fetching recommendations."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-28 sm:pt-[25%] md:pt-[5%]  px-4 sm:px-6 md:px-8">
      <form
        className="w-full mt-10 max-w-3xl flex flex-col sm:flex-row 
        bg-black/40 backdrop-blur-sm 
        rounded-2xl overflow-hidden shadow-lg border border-white/20"
        onSubmit={handleGeminiSearchClick}
      >
        {/* Input Field */}
        <input
          type="text"
          ref={searchText}
          placeholder={lang[languageKey].gptSearchPlaceHolder}
          className="w-full font-bold px-4 py-3 bg-black text-white bg-transparent 
                     placeholder-gray-400 focus:outline-none 
                     text-base sm:text-lg"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center 
                     bg-red-600 hover:bg-red-700 transition
                     text-white font-semibold
                     px-4 sm:px-6 py-3 
                     mt-2 sm:mt-0 sm:ml-2 rounded-lg sm:rounded-none"
          disabled={loading}
        >
          {loading ? (
            "Loading..."
          ) : (
            <>
              <Search className="w-5 h-5 sm:hidden" />
              <span className="hidden sm:inline">
                {lang[languageKey].search}
              </span>
            </>
          )}
        </button>
      </form>
      <div className=" flex">
        {movies && (
          <div className="text-white mt-6 max-w-3xl mx-auto text-center">
            <h2 className="text-lg font-semibold mb-2">
              🎬 Recommended Movies:
            </h2>
            <p className="text-gray-300">{movies}</p>
          </div>
        )}
      </div>
      {/* Display Recommendations */}
    </div>
  );
};

export default GptSearchBar;
