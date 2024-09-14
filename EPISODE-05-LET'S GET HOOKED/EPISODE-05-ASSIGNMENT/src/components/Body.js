import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [allRes, setAllRes] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input className="searchBox" placeholder="Search..." type="text" />
          <button className="search-btn">Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterRes = allRes.filter((filter) => {
                return filter.info.avgRating >= 4.3;
              });
              setAllRes(filterRes);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {allRes.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
