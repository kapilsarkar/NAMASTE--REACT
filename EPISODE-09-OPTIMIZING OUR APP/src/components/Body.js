import { useEffect, useState } from "react";
import TopRestaurant from "./TopRestaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const handleSearch = () => {
    const filterData = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurants(filterData);
  };
  const allSearch = () => {
    fetchData();
    setSearchText("");
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4954988&lng=88.3709008&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input
            className="search-box"
            placeholder="Search..."
            type="text"
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
      </div>
      <h2 className="TopHeading" id="TopHeading">
        Top Restaurants
      </h2>
      <div className="top-res">
        {listOfRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            > {" "}
              <TopRestaurant resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
