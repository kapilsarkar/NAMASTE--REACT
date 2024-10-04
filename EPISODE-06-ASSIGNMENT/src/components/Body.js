import { useState, useEffect } from "react";
import { RESTAURANT_TO_EXPLORE } from "../utils/constant";
import TopRestaurant from "./TopRestaurant";

const Body = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  useEffect(() => {
    FetchTopRestaurantToExplore();
  }, []);

  const FetchTopRestaurantToExplore = async () => {
    const data = await fetch(RESTAURANT_TO_EXPLORE);
    const json = await data.json();
    console.log(json);
    setTopRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="Body">
      <div className="top-res">
        <h3>Top Restaurants Of Kolkata</h3>
        {topRestaurant.map((restaurant) => {
          return <TopRestaurant resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
