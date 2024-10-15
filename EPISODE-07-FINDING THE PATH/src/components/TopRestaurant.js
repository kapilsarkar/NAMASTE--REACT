import { useState, useEffect } from "react";
import { FETCH_TOP_RES, FETCH_TOP_RES2 } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import RestaurantCard2 from "./RestaurantCard2";
const TopRestaurant = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [newTopRestaurant, setNewTopRestaurant] = useState([]);

  useEffect(() => {
    fetchTopRestaurant();
    fetchTopRestaurantTwo();
  }, []);

  const fetchTopRestaurant = async () => {
    const data = await fetch(FETCH_TOP_RES);
    const json = await data.json();
    console.log(json);
    setTopRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const fetchTopRestaurantTwo = async () => {
    const data = await fetch(FETCH_TOP_RES2);
    const json = await data.json();
    console.log(json);
    setNewTopRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="container">
      <h2 className="heading-res">Top Restaurants</h2>
      <div className="top-res">
        {topRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
      <div className="top-res">
       {
        newTopRestaurant.map((restaurant)=>{
          return (
            <RestaurantCard2 key={restaurant.info.id} resData={restaurant} />
          )
        })
       }
      </div>
    </div>
  );
};

export default TopRestaurant;
