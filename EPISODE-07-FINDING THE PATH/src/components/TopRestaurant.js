import { useState, useEffect } from "react";
import { FETCH_TOP_RES, FETCH_TOP_RES2 } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const TopRestaurant = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const fetchTopRestaurant = async () => {
    const data = await fetch(FETCH_TOP_RES);
    const json = await data.json();
    //console.log(json);
    setTopRestaurant(
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
        <button className="allResBtn" onClick={AllRestaurant}>
          All Restaurants
        </button>
      </div>
      <div className="top-res">
        {topRestaurant.map((restaurant) => {
          return (
            <Link className="res-menu"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurant;
