import useRestaurantData from "../hooks/useRestaurantData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant, fetchData] =
    useRestaurantData();
  return (
    <div className="w-full">
      <h2 className="text-center text-2xl text-white bg-orange-600 mt-3 p-2 font-bold">
        Top Restaurants
      </h2>
      <div className="flex flex-wrap justify-center gap-1.5 mt-2 w-auto">
        {listOfRestaurant.map((restaurant)=>{
            return (
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
            )
        })}
      </div>
    </div>
  );
};

export default Body;
