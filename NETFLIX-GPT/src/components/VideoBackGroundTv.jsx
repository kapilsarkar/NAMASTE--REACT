import { useSelector } from "react-redux";
import useTvTrailer from "../hooks/useTvTrailer";

const VideoBackGroundTv = ({ tvId }) => {
  const trailerVideo = useSelector((store) => store.tv?.trailerVideo);
  //console.log("Trailer Video from Redux:", trailerVideo);
  useTvTrailer(tvId);
  //console.log("Fetching trailer for tvId:", tvId);

  //console.log("Trailer Video:", trailerVideo);

  if (!trailerVideo?.key) return null; // wait until video is ready

  const videoKey = trailerVideo.key;

  return (
    <div className="relative z-0 w-full overflow-hidden">
      <iframe
        className="w-full aspect-video border-none block"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}&controls=0&modestbranding=1&rel=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGroundTv;
