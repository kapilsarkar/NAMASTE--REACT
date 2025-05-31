import { useState, useContext } from "react";
import useRestaurantData from "../hooks/useRestaurantData";
import RestaurantCard, { withDiscountOffer } from "./RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import RestaurantsOnline from "./RestaurantsOnline";
import UserContext from "../utils/userContext";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant, fetchData, masterList,
    setMasterList] =
    useRestaurantData();
  const [searchText, setSearchText] = useState("");
  const [tempUserName, setTempUserName] = useState("");
  const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard);

  const handleSearch = () => {
    const filteredData = listOfRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    if (filteredData.length === 0) {
      alert("Please Enter Correct Data");
      setSearchText("");
    }
    else {
      setListOfRestaurant(filteredData);
      setSearchText("");
    }
  };
  const allSearch = () => {
    fetchData();
    setSearchText("");
  };
  const handleTopRated = () => {
    const topRated = masterList.filter(
      (res) => res.info.avgRating >= 4.5
    );

    topRated.length <= 1 ? fetchData() : setListOfRestaurant(topRated);
  };
  const handleFastDelivery = () => {
    const lessTime = masterList.filter((res) => res.info.sla.deliveryTime <= 30)
    lessTime.length <= 1 ? fetchData() : setListOfRestaurant(lessTime)
  }
  const { setUserName, loggedInUser } = useContext(UserContext);
  const handleUserNameSubmit = () => {
    if (tempUserName.trim().length) {
      setUserName(tempUserName)
    }
    setTempUserName("")
  }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <div className="flex flex-wrap justify-center p-2">
        <label className=" font-bold mt-2">User Name</label>
        <input type="text" className=" ml-2 cursor-pointer border-orange-500 rounded-xs shadow-2xl p-2 font-bold drop-shadow-3xl" value={tempUserName} placeholder="Type User Name..." onChange={(e) => setTempUserName(e.target.value)} />
        <button className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-1 font-bold shadow-2xl" onClick={handleUserNameSubmit}>Submit</button>
      </div>
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

        </div>
      </div>

      <h2 className="animate-pulse text-5xl sm:text-7xl text-center text-black mt-3 p-3 font-extrabold">
        Top <span className="text-orange-600">Restaurant</span> Chains in <span className="text-green-600">Kolkata</span>
      </h2>
      <div className="flex flex-wrap p-2  gap-2 justify-center">
        <button
          className="font-extrabold rounded-2xl p-1.5 border-t-2 text-shadow-fuchsia-500 border-b-2 shadow-2xl cursor-pointer"
          onClick={allSearch}
        >
          All Restaurants
        </button>
        <button
          className="font-extrabold rounded-2xl p-1.5 border-t-2 text-shadow-fuchsia-500 border-b-2 shadow-2xl cursor-pointer"
          onClick={handleTopRated}
        >
          Top Rated
        </button>
        <button className="font-extrabold rounded-2xl p-1.5 border-t-2 text-shadow-fuchsia-500 border-b-2 shadow-2xl cursor-pointer" onClick={handleFastDelivery}>Fast Delivery</button>
      </div>
      <div className="flex flex-wrap justify-center gap-1 mt-2 w-full">
        {listOfRestaurant.map((restaurant) => {
          return (
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant.info.id}>
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
      <div className="w-full">
        <RestaurantsOnline />
      </div>
    </div>
  );
};

export default Body;
