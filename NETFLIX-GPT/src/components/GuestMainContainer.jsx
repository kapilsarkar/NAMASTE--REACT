import { useSelector } from "react-redux";
import VideoBackGroundTv from "./VideoBackGroundTv";
import TvVideoTitle from "./TvVideoTitle";

const GuestMainContainer = () => {
  const tv = useSelector((store) => store.tv?.popularTvShows);

  if (!tv || tv.length === 0) return null;

  // pick the first valid TV show that has an ID
  const mainTv = tv.find(show => show?.id) || {};
  const { original_name = "No Title", overview = "", id } = mainTv;

  if (!id) {
    console.warn("No valid TV ID found in popularTvShows:", tv);
    return null;
  }

  return (
    <div className="w-full relative">
      <VideoBackGroundTv tvId={id} />
      <TvVideoTitle name={original_name} overview={overview} />
    </div>
  );
};

export default GuestMainContainer;
