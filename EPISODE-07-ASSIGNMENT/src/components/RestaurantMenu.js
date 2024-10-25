import { useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_IMG,EDUCORS_URL, ApiKey } from "../utils/constant";
const RestaurantMenu = () => {
  const [resInfo,setResInfo] = useState(null)
  const {resId} = useParams()
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(`${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
    MENU_API+resId
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

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
  return (
    <div className="restaurant-menu">
      <img src={MENU_IMG+cloudinaryImageId}/>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{city}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item)=>{
          return(
            <li key={item.card.info.id}>{item.card.info.name} - {"Rs"}{item.card.info.price/100}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
