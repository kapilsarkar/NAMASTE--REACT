import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [allRes, setAllRes] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
   fetchData()
  }, []);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=774062&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json()
    console.log(json)
  }



  function handleSearchClick() {
    if (searchText === "") {
      setAllRes(allRes);
      return;
    }
    const filterBySearch = allRes.filter((res) => {
      if (res.info.name.toLowerCase().includes(searchText.toLowerCase())) {
        return res;
      }
    });
    setAllRes(filterBySearch);
  }

  return (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input
            className="searchBox"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
          />
          <button className="search-btn" onClick={handleSearchClick}>
            Search
          </button>
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
