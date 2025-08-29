import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchPage from "./GPTSearchPage";
import Footer from "./Footer";
const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Header className="sticky top-0 bg-black/60 backdrop-blur-lg z-50" />
      {showGPTSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <main className="space-y-48">
            <section className="animate-fadeIn">
              <MainContainer />
            </section>
            <section className="animate-fadeIn">
              <SecondaryContainer />
            </section>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Browse;
