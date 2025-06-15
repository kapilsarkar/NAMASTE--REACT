/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate("/search?q=" + searchQuery);
    }
  };

  useEffect(() => {
    //api call

    //make an api call after every key press
    //But if the difference b/w two api calls is less than 200ms then decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    //Update the cache
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
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
            className=" h-5 md:h-6 cursor-pointer"
            alt="menu"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          />
          <a href="/">
            {" "}
            <img
              className=" h-5 md:h-6 mx-2"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            />
          </a>
        </div>
        <div className=" col-span-10 media510:px-10 ">
          <div className=" relative">
            <input
              type="text"
              className="pl-4 w-20 sm:w-72  h-11 outline-black-900 border-black focus:outline-black border-2 rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              className=" border-2 border-gray-500 py-2 px-5 bg-gray-100 rounded-r-full"
              onClick={handleSearch}
            >
              🔍
            </button>
          </div>
          {showSuggestions && (
            <div className=" absolute bg-white py-2 px-5 w-20 sm:w-72 rounded-lg shadow-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
