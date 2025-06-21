/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";
import { useNavigate } from "react-router";
import { toggleTheme } from "../utils/themeSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showUserPopUp, setShowUserPopUp] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const navigate = useNavigate();

  const isDarkMode = useSelector((store) => store.theme.darkMode);

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
    //console.log(json[1]);
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
    <div className="w-full dark:bg-gray-900 text-black dark:text-white">
      <div className="bg-white  sm:overflow-hidden md:overflow-hidden lg:overflow-hidden flex flex-row justify-between md:p-5 sm:p-0 sm:pt-5 shadow-lg mb-4 shadow-white-500 w-auto flex-wrap dark:bg-gray-900 text-black dark:text-white">
        <div className=" flex flex-row md:justify-between sm:justify-center sm:gap-5 lg:gap-6">
          <img
            onClick={() => toggleMenuHandler()}
            className=" h-5 md:h-6 cursor-pointer rounded-full text-black dark:text-white dark:bg-white"
            alt="menu"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          />
          <a href="/" className=" flex">
            {" "}
            <img
              className=" h-5 md:h-7 mt-1 media770:mt-0 mx-1 rounded-full dark:bg-black"
              alt="youtube-logo"
              src="https://pngdownload.io/wp-content/uploads/2023/12/YouTube-Logo-PNG-Symbol-for-Video-Platform-Transparent-jpg.webp"
            />
            <span className=" font-bold text-xl dark:bg-gray-900 text-black dark:text-white">YouTube</span>
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
            className="h-9 cursor-pointer rounded-full animate-pulse"
            alt="user-icon"
            src="https://media.licdn.com/dms/image/v2/D4D03AQFWNmUleSJpqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677594794155?e=2147483647&v=beta&t=-8C9GUhVDeHP2fJ0mKNOZY8q_xWP6a-5Y68OFozJ4I4"
            onClick={() => setShowUserPopUp(!showUserPopUp)}
          />
          {showUserPopUp && (
            <div className="absolute bg-white font-bold right-5 mt-2  border border-gray-300 rounded-md shadow-lg p-3 z-50">
              <p className="text-sm text-gray-900 font-bold text-center">👋 Hi,</p>
              <p className="text-sm text-gray-900 p-2">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFWNmUleSJpqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677594794155?e=2147483647&v=beta&t=-8C9GUhVDeHP2fJ0mKNOZY8q_xWP6a-5Y68OFozJ4I4"
                  className=" w-10 rounded-full"
                />
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/kapil-sarkar-439754249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Click
                </a>
              </p>
              <p className="text-sm text-gray-900 p-2">
                Github:{" "}
                <a
                  href="https://github.com/kapilsarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Click
                </a>
              </p>
              <button
                className="mt-2 text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100"
                onClick={() => dispatch(toggleTheme())}
              >
                Toggle {isDarkMode ? "Light" : "Dark"}Mode
              </button>
              <br/>
              <button
                className="mt-2 text-blue-600 underline text-sm"
                onClick={() => setShowUserPopUp(false)}
              >
                {" "}
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
