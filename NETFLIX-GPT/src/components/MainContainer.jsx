import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null; // Early return if no movies

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="w-full   relative">
      {/* Background video */}
      <VideoBackGround movieId={id} />

      {/* Overlay title */}
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
