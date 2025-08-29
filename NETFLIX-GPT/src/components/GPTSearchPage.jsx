import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import bgImg from "../images/netFlixBg.jpg";

const GPTSearchPage = () => {
  return (
    <div
      className="relative min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
    

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        
        {/* Blurred Background Search Bar */}
        <div className="w-full max-w-3xl">
          <div className="backdrop-blur-md bg-black/40 rounded-2xl shadow-lg p-6">
            <GptSearchBar />
          </div>
        </div>

        {/* Movie Suggestions */}
        <div className="w-full max-w-6xl mt-10">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GPTSearchPage;
