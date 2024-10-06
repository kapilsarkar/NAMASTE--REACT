import { useState, useEffect } from "react";
import TopRestaurant from "./TopRestaurant";
import TopDelhi from "./TopDelhi";
import Shimmer from "./Shimmer";
import { DELHI_TO_EXPLORE, KOLKATA_TO_EXPLORE } from "../utils/constant";

const Body = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [topDelhi, setTopDelhi] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchDelhiText, setSearchDelhiText] = useState("");

  useEffect(() => {
    fetchKolkata(), fetchDelhi();
  }, []);

  const fetchKolkata = async () => {
    const data = await fetch(KOLKATA_TO_EXPLORE);
    const json = await data.json();
    // console.log(json);
    setTopRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const fetchDelhi = async () => {
    const data = await fetch(DELHI_TO_EXPLORE);
    const json = await data.json();
    // console.log(json);
    setTopDelhi(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //FilterData
  function handleAllSearch() {
    const filterData = topRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setTopRestaurant(filterData);
  }

  function allKolkata() {
    fetchKolkata();
    setSearchText("");
  }

  function handleDelhiSearch() {
    const filterData = topDelhi.filter((res) => {
      return res.info.name
        .toLowerCase()
        .includes(searchDelhiText.toLowerCase());
    });

    setTopDelhi(filterData);
  }

  function allDelhi() {
    fetchDelhi();
    setSearchText("");
  }

  return topRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <h2 className="heading-kolkata">Top Restaurants in Kolkata</h2>
      <div className="search">
        <input
          className="search-box"
          placeholder="Search..."
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleAllSearch}>
          Search
        </button>
        <button className="all-kolkataBtn" onClick={allKolkata}>
          All Restaurants
        </button>
      </div>

      <div className="top-res">
        {topRestaurant.map((restaurant) => {
          return (
            <TopRestaurant key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
      <h2 className="heading-delhi">Top Restaurants in Delhi</h2>
      <div className="search">
        <input
          className="search-box"
          placeholder="Search..."
          type="text"
          value={searchDelhiText}
          onChange={(e) => setSearchDelhiText(e.target.value)}
        />
        <button className="search-btn" onClick={handleDelhiSearch}>
          Search
        </button>
        <button className="all-DelhiBtn" onClick={allDelhi}>
          All Restaurants
        </button>
      </div>
      <div className="top-delhi">
        {topDelhi.map((restaurant) => {
          return <TopDelhi key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
