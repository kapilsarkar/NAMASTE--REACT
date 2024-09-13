import RestaurantCard from "./RestaurantCard";

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
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
