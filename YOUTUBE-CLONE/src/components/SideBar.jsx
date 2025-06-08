import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className=" p-5 shadow-lg w-48">
      <ul>
        <li>
           Home
        </li>
        <li>
           Shorts
        </li>
        <li>Subscriptions</li>
        <li>Movies</li>
      </ul>
      <h2 className=" font-bold pt-5">Subscriptions</h2>
      <ul>
        <li>Muscic</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h2 className=" font-bold pt-5">Watch Later</h2>
      <ul>
        <li>Muscic</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
