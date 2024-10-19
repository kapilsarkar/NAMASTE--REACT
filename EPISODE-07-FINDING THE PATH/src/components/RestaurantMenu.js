import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=809673&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  
  const {name,cuisines} = resInfo?.cards[2]?.card?.card?.info || {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(', ')}</p>
      <p>{resInfo?.cards[2]?.card?.card?.info?.city}</p>
      <p>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
      <p>{resInfo?.cards[2]?.card?.card?.info?.locality}</p>
      <p>{resInfo?.cards[2]?.card?.card?.info?.areaName}</p>
      <p>{resInfo?.cards[2]?.card?.card?.info?.avgRating}</p>
      <h3>Menu</h3>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
