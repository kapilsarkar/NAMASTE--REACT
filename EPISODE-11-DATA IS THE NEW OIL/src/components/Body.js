import { useEffect, useState, useContext } from "react";
import TopRestaurant, { withDiscountOffer } from "./TopRestaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import TopRestaurant, { withDiscountOffer } from "./TopRestaurant";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tempUserName, setTempUserName] = useState("");
  const RestaurantCardWithDiscount = withDiscountOffer(TopRestaurant);

  console.log(listOfRestaurants);
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
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(json);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you're Offline... Please Check Your Internet Connection.
      </h1>
    );
  const { setUserName, loggedInUser } = useContext(UserContext);

  const handleUserNameSubmit = () => {
    if (tempUserName.trim().length) {
      setUserName(tempUserName);
    }

    setTempUserName("");
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-2">
        <div className=" flex flex-wrap justify-center p-1.5">
          <label className=" font-bold mt-2">User Name</label>
          <input
            className=" ml-2 cursor-pointer border-orange-500 rounded-xs shadow-2xl p-2 font-bold drop-shadow-3xl"
            placeholder="Type User Name..."
            type="text"
            value={tempUserName}
            onChange={(e) => setTempUserName(e.target.value)}
          />
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-1 font-bold shadow-2xl"
            onClick={handleUserNameSubmit}
          >
            Submit
          </button>
        </div>
        <div className="flex flex-wrap justify-center mt-3">
          <input
            className=" cursor-pointer border-orange-500 rounded-xs shadow-2xl p-2 font-bold drop-shadow-3xl"
            placeholder="Search..."
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
        </div>
      </div>
      <h2
        className=" text-center text-2xl text-white bg-orange-600 mt-3 p-2 font-bold"
        id="TopHeading"
      >
        Top Restaurants
      </h2>
      <div className="flex flex-wrap justify-center gap-1.5 mt-2 w-auto">
        {listOfRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/* If the RestaurantCard has Discount Offer then show the Discount Offer  */}

              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardWithDiscount resData={restaurant} />
              ) : (
                <TopRestaurant resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
