import { RESTAURANT_URL } from "../utils/constant";
import TopRestaurant from "./TopRestaurant";
import { useEffect, useState } from "react";
const Body = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const fetchTopRestaurant = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    console.log(json);
    setTopRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  
  const handleSearch = ()=>{
    
  }
  return (
    <div className="Body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>

      <h2 className="TopHeading" id="TopHeading">
        Top Restaurants
      </h2>
      <div className="top-res">
        {topRestaurant.map((restaurant) => {
          return (
            <TopRestaurant key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
