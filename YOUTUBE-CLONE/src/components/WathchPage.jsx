/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" w-full">
      <div className="w-full flex flex-col">
        <div className="w-full px-5">
          <div className=" flex justify-center flex-wrap p-1 gap-1">
            <div className=" w-[46rem]">
              <iframe
                className="rounded-lg w-full aspect-video"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className=" py-1 w-80 ">
              <LiveChat />
            </div>
          </div>
        </div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
