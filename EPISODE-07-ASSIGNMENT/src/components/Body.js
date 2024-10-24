import { RESTAURANT_URL, EDUCORS_URL, ApiKey} from "../utils/constant";
import TopRestaurant from "./TopRestaurant";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  
  
  const fetchTopRestaurant = async () => {
    const data = await fetch(`${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
    RESTAURANT_URL
  )}` );
    const json = await data.json();
    console.log(json);
    setTopRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const filterData = topRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setTopRestaurant(filterData);
  };
  const allSearch = () => {
    fetchTopRestaurant();
    setSearchText("");
  };
  return topRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
          <button className="allRes-btn" onClick={allSearch}>
            All Restaurants
          </button>
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
    </div>
  );
};
export default Body;
