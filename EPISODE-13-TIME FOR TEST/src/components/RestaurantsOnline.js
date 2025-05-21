import TopRestaurantCard from "./TopRestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantOnline from "../hooks/useRestaurantOnline";
import { Link } from "react-router-dom";

const RestaurantsOnline = () => {
  const [listOnlineRes, setOnlineRes, fetchData] = useRestaurantOnline();

  const handleTopRes = () => {
    const topRes = listOnlineRes.filter((res) => res.info.avgRating >= 4.5);
    topRes.length <= 1 ? fetchData() : setOnlineRes(topRes);
  };

  const handleFastDeliver = () => {
    const lessTime = listOnlineRes.filter((res) => res.info.sla.deliveryTime <= 30);
    lessTime.length <= 1 ? fetchData() : setOnlineRes(lessTime);
  };

  const allSearch = () => {
    fetchData();
  };
  return listOnlineRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <div className="animate-pulse  text-5xl text-center text-black mt-3 p-3 font-extrabold">
        <span className="text-orange-600">Restaurant</span> With Online Food Delivery in <span className="text-green-600">Kolkata</span>
      </div>
      <div className=" flex flex-wrap p-2 mt-2 gap-2 justify-center">
        <button
          className="font-extrabold rounded-2xl p-1.5 border-t-2 text-shadow-fuchsia-500 border-b-2 shadow-2xl cursor-pointer"
          onClick={handleTopRes}
        >
          Ratings 4.5+
        </button>
        <button
          className="font-extrabold rounded-2xl p-1.5 border-t-2 text-shadow-fuchsia-500 border-b-2 shadow-2xl cursor-pointer"
          onClick={allSearch}
        >
          All Restaurants
        </button>
        <button className="font-extrabold rounded-2xl p-1.5 border-t-2 text-shadow-fuchsia-500 border-b-2 shadow-2xl cursor-pointer" onClick={handleFastDeliver}>Fast Delivery</button>
      </div>
      <div className="flex flex-wrap justify-center gap-1.5 mt-2 w-full">
        {listOnlineRes.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
              <TopRestaurantCard

                resData={restaurant}
              />
            </Link>

          );
        })}
      </div>
    </div>
  );
};

export default RestaurantsOnline;
