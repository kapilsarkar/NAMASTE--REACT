import { useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { MENU_API, MENU_IMG,EDUCORS_URL, ApiKey } from "../utils/constant";
const RestaurantMenu = () => {
  const [resInfo,setResInfo] = useState(null)
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(`${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
    MENU_API
  )}` );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data)
  };
  if (resInfo === null) return <Shimmer />;
  const {name, cuisines,
    city,
    costForTwoMessage,
    avgRating,cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;
  return (
    <div className="restaurant-menu">
      <img src={MENU_IMG+cloudinaryImageId}/>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{city}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
