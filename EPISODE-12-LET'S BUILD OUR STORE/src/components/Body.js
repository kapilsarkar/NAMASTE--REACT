import { useState } from "react";
import useRestaurantData from "../hooks/useRestaurantData";
import RestaurantCard, { withDiscountOffer } from "./RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import RestaurantsOnline from "./RestaurantsOnline";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant, fetchData] =
    useRestaurantData();
  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard);

  const handleSearch = () => {
    const filteredData = listOfRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurant(filteredData);
    setSearchText("");
  };
  const allSearch = () => {
    fetchData();
    setSearchText("");
  };
  const handleTopRated = () => {
    const topRated = listOfRestaurant.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setListOfRestaurant(topRated);
  };
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <div className="flex flex-wrap justify-evenly mt-3 p-2 border-b-orange-500">
        <div className="flex flex-wrap gap-1.5 shadow-2xl">
          <input
            type="text"
            className="cursor-pointer border-orange-500 rounded-xs shadow-2xl p-2 font-bold drop-shadow-3xl"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-1 font-bold shadow-2xl"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-2 font-bold shadow-2xl"
            onClick={allSearch}
          >
            All Restaurants
          </button>
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-2 font-bold shadow-2xl"
            onClick={handleTopRated}
          >
            Top Rated
          </button>
        </div>
      </div>

      <h2 className="animate-pulse text-xl text-black mt-3 p-1 font-bold">
        Top Restaurant Chains in Noida 1
      </h2>
      <div className="flex flex-wrap justify-center gap-1 mt-2 w-auto">
        {listOfRestaurant.map((restaurant) => {
          return (
            <Link key={restaurant?.info?.id}>
              {/* If the RestaurantCard has Discount Offer then show the Discount Offer  */}
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardWithDiscount resData={restaurant} />
              ) : (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  resData={restaurant}
                />
              )}
            </Link>
          );
        })}
      </div>
      <div className="">
        <RestaurantsOnline />
      </div>
    </div>
  );
};

export default Body;
