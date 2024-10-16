import { useState, useEffect } from "react";
import { FETCH_TOP_RES, FETCH_TOP_RES2 } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import RestaurantCard2 from "./RestaurantCard2";
import Shimmer from "./Shimmer";
const TopRestaurant = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [newTopRestaurant, setNewTopRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
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
  const handleAllSearch = () => {
    const filterData = topRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setTopRestaurant(filterData);
  };

  const AllRestaurant = () => {
    fetchTopRestaurant();
    setSearchText("");
  };
  return topRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <h2 className="heading-res">Top Restaurants</h2>
      <div className="search">
        <input
          className="search-box"
          placeholder="Search..."
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={handleAllSearch}>
          Search
        </button>
        <button className="allResBtn" onClick={AllRestaurant}>All Restaurants</button>
      </div>
      <div className="top-res">
        {topRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
      <div className="top-res">
        {newTopRestaurant.map((restaurant) => {
          return (
            <RestaurantCard2 key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurant;
