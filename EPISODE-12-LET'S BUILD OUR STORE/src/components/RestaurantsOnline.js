import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constant";
import TopRestaurantCard from "./TopRestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantsOnline = () => {
  const [listOnlineRes, setOnlineRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    console.log(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOnlineRes(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOnlineRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <h2 className="animate-pulse text-2xl text-black mt-3 p-2 font-bold">
        Restaurants with Online Food Delivery in Noida-1
      </h2>
      <div className="flex flex-wrap justify-center gap-1.5 mt-2 w-auto">
        {listOnlineRes.map((restaurant) => {
          return (
            <TopRestaurantCard
              key={restaurant?.info?.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantsOnline;
