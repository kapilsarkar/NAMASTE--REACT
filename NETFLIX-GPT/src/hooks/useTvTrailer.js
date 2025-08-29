/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/tvSlice";

const useTvTrailer = (tvId) => {
  const dispatch = useDispatch();

  const getTvVideos = async () => {
    try {
      dispatch(addTrailerVideo(null)); // reset before fetching
      const data = await fetch(
        `https://api.themoviedb.org/3/tv/119051/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      //console.log("Videos for TV ID:", tvId, json?.results);

      const filterData = json?.results?.filter((video) => video?.type === "Trailer");
      const trailer = filterData?.length ? filterData[0] : json?.results?.[0];

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      } else {
        console.warn("No trailer found for this TV ID:", tvId);
      }
    } catch (error) {
      console.error("Error fetching TV videos:", error);
    }
  };

  useEffect(() => {
    if (tvId) getTvVideos();
  }, [tvId]);
};

export default useTvTrailer;
