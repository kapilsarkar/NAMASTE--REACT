import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(ResList);
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5177518&lng=87.34597430000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

  }

  
  return (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input className="searchBox" placeholder="Search..." type="text" />
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.3
              );
              setListOfRestaurants(filteredResList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard  resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
