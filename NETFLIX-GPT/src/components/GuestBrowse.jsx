import { useNavigate } from "react-router";
import usePopularTvShows from "../hooks/usePopularTvShows";
import HeaderLogo from "../images/mainLogo.png";
import netflixAvatar from "../images/netflix-avatar.jpg";
import GuestMainContainer from "./GuestMainContainer";
import GuestSecondaryContainer from "./GuestSecondaryContainer";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";
import useOnTheAir from "../hooks/useOnTheAir";
import useAiringToday from "../hooks/useAiringToday";
import Footer from "./Footer";

const GuestBrowse = () => {
  usePopularTvShows();
  useTopRatedTvShows();
  useOnTheAir();
  useAiringToday();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col">
      {/* Header */}
      <header
        className="w-full px-4 sm:px-6 md:px-8 py-3 
                         bg-gradient-to-b from-black/90 to-transparent 
                         flex justify-between items-center 
                         sticky top-0 z-10 shadow-md"
      >
        {/* Logo */}
        <img
          className="w-24 sm:w-32 md:w-40 object-contain"
          src={HeaderLogo}
          alt="Netflix Logo"
        />

        {/* User Info */}
        <div
          className="flex items-center gap-2 sm:gap-4 
                        p-2 rounded-lg bg-black/40 backdrop-blur-sm 
                        border border-white/10 shadow-sm"
        >
          <img
            className="w-10 h-10  border-2 border-white shadow-md object-cover"
            src={netflixAvatar}
            alt="user-icon"
            title="User Avatar"
          />
          <p className="hidden sm:block text-sm sm:text-base font-medium truncate max-w-[120px]">
            Guest User
          </p>
          <button
            onClick={handleLogin}
            className="py-2 px-5 bg-red-500 hover:bg-red-600 active:bg-red-700 
                       text-white font-bold rounded-md transition-all duration-200"
          >
            Login
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="relative z-50 flex flex-col gap-6">
        <section className="animate-fadeIn animate-slideInUp">
          <GuestMainContainer />
        </section>
        <section className="animate-fadeIn animate-delay-200">
          <GuestSecondaryContainer />
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default GuestBrowse;
