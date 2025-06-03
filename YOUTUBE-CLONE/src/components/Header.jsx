const Header = () => {
  return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-md">
      <div className=" flex col-span-1">
        <img
          className=" h-9"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />
        <img
          className=" h-9 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className=" col-span-10 px-10 ">
        <input
          type="text"
          className=" w-1/2 border-2 border-gray-500 p-2 rounded-l-full"
        />
        <button className=" border-2 border-gray-500 py-2 px-5 bg-gray-100 rounded-r-full">🔍</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
