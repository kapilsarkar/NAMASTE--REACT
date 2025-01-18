import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=651011&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };
  
  return (
    <div className="restaurant-menu">
      <h2>Name Of Restaurant</h2>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
