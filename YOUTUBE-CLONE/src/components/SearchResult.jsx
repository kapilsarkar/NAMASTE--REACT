import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { YOUTUBE_INPUT_SEARCH_API } from "../utils/constant";
import SearchVideoCard from "./SearchVideoCard";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          YOUTUBE_INPUT_SEARCH_API + encodeURIComponent(query)
        );
        const data = await res.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error("Failed to fetch search results:", err);
      }
    };

    if (query) {
      fetchVideos();
    }
  }, [query]);

  return (
    <div className="flex justify-center gap-1 flex-wrap">
      {videos.map((video) => (
        <SearchVideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default SearchResult;
