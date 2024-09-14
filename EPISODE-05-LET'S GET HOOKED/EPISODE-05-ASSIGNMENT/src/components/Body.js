import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input className="searchBox" placeholder="Search..." type="text" />
        </div>
        <div className="filter">
          <button className="filter-btn">Top Rated Restaurant</button>
        </div>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant)=>{
          return <RestaurantCard key={restaurant.info.id}  resData = {restaurant}/>
        })}
      </div>
    </div>
  );
};

export default Body;
