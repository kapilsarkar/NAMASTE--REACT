/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    //api call

    //make an api call after every key press
    //But if the difference b/w two api calls is less than 200ms then decline the api call
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="w-full">
      <div className="bg-white sm:overflow-hidden md:overflow-hidden lg:overflow-hidden flex flex-row justify-between md:p-5 sm:p-0 sm:pt-5 shadow-lg mb-4 shadow-white-500 w-auto flex-wrap">
        <div className=" flex flex-row md:justify-between sm:justify-center sm:gap-5 lg:gap-6">
          <img
            onClick={() => toggleMenuHandler()}
            className=" h-5 md:h-9 cursor-pointer"
            alt="menu"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          />
          <a href="/">
            {" "}
            <img
              className=" h-5 md:h-9 mx-2"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            />
          </a>
        </div>
        <div className=" col-span-10 px-10 ">
          <input
            type="text"
            className="pl-4 w-20 sm:w-72  h-11 outline-black-900 border-black focus:outline-black border-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className=" border-2 border-gray-500 py-2 px-5 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        <div className="col-span-1">
          <img
            className="h-9"
            alt="user-icon"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
