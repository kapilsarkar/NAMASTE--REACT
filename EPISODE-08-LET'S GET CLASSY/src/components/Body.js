import { useEffect, useState } from "react";
import TopRestaurant from "./TopRestaurant";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };
  return (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input className="search-box" placeholder="Search..." type="text" />
          <button className="search-btn">Search</button>
        </div>
      </div>
      <h2 className="TopHeading" id="TopHeading">
        Top Restaurants
      </h2>
      <div className="top-res">
        {listOfRestaurants.map((restaurant) => {
          return (
            <TopRestaurant hey={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
