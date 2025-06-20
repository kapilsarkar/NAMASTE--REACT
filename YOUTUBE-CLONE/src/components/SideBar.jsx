import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className=" p-5 dark:bg-gray-900 text-black dark:text-white hidden media510:block shadow-lg w-48">
      <ul>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">
           <Link to="/">Home</Link>
        </li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">
           Shorts
        </li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Subscriptions</li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Movies</li>
      </ul>
      <h2 className=" font-bold pt-5">Subscriptions</h2>
      <ul>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Muscic</li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Sports</li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Gaming</li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Movies</li>
      </ul>
      <h2 className=" font-bold pt-5">Watch Later</h2>
      <ul>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Muscic</li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Sports</li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Gaming</li>
        <li className=" hover:bg-gray-100 p-2 rounded-md hover:font-bold">Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
