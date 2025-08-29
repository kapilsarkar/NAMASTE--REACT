/* eslint-disable react-hooks/exhaustive-deps */
import HeaderLogo from "../images/mainLogo.png";
import netflixAvatar from "../images/netflix-avatar.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import { Menu, X } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, mobileNumber, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            mobileNumber,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full  px-5 sm:px-8 py-5 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10 flex justify-between items-center">
      {/* Logo */}
      <img
        className="w-24 sm:w-32 md:w-40 lg:w-44 cursor-pointer"
        src={HeaderLogo}
        alt="logo"
      />

      {user && (
        <>
          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-3 p-3 rounded-xl bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
            <img
              className="w-10 h-10  border-2 border-white shadow-md hover:scale-105 transition-transform"
              src={netflixAvatar}
              alt="user-icon"
              title={user?.email || "User Avatar"}
            />
            <div className="flex flex-col items-start text-white font-medium text-sm sm:text-base">
              <p className="truncate max-w-[140px]" title={user?.displayName}>
                {user?.displayName}
              </p>
            </div>

            {showGPTSearch && (
              <select
                className="m-2 px-3 py-2 rounded-lg bg-gray-900 text-white font-medium border border-gray-700 shadow focus:ring-2 focus:ring-red-500 focus:outline-none hover:bg-gray-800 transition"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="bg-gray-900 text-white"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="px-4 py-2 m-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition"
              onClick={handleGPTSearch}
            >
              {showGPTSearch ? "Home Page" : "GPT Search"}
            </button>

            <button
              onClick={handleSignOut}
              className="text-red-500 hover:text-red-400 text-sm sm:text-base font-bold cursor-pointer transition"
            >
              (Sign Out)
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg bg-black/40 border border-white/20"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <div className="absolute right-4 top-16 w-56 bg-black/90 border border-white/10 rounded-xl shadow-lg p-4 flex flex-col gap-3 z-20">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10  border-2 border-white"
                    src={netflixAvatar}
                    alt="user-icon"
                  />
                  <p className="text-white font-medium truncate max-w-[120px]">
                    {user?.displayName}
                  </p>
                </div>

                {showGPTSearch && (
                  <select
                    className="px-3 py-2 rounded-lg bg-gray-900 text-white font-medium border border-gray-700 focus:ring-2 focus:ring-red-500"
                    onChange={handleLanguageChange}
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                )}

                <button
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition"
                  onClick={handleGPTSearch}
                >
                  {showGPTSearch ? "Home Page" : "GPT Search"}
                </button>

                <button
                  onClick={handleSignOut}
                  className="text-red-500 hover:text-red-400 font-bold text-sm sm:text-base cursor-pointer transition"
                >
                  (Sign Out)
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
