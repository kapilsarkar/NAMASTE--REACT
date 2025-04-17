import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constant";
import TopRestaurantCard from "./TopRestaurantCard";

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
  return (
    <div className="w-full">
      <h2 className="text-center text-xl text-white bg-orange-600 mt-3 p-2 font-bold">
        Restaurants with Online Food Delivery
      </h2>
      <div lassName="flex flex-wrap justify-center gap-1.5 mt-2 w-auto">
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
