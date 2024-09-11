import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = [
    {
      info: {
        id: "578812",
        name: "Arun Sweets",
        cloudinaryImageId: "d8wm0jbhfitiajn13sg6",
        costForTwo: "₹250 for two",
        cuisines: ["Sweets", "Snacks"],
        avgRating: 4.7,
        sla: {
          deliveryTime: 34,
        },
      },
    },
    {
      info: {
        id: "578815",
        name: "Dominos",
        cloudinaryImageId: "d8wm0jbhfitiajn13sg6",
        costForTwo: "₹250 for two",
        cuisines: ["Sweets", "Snacks"],
        avgRating: 3.8,
        sla: {
          deliveryTime: 34,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input className="searchBox" placeholder="Search..." type="text" />
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              //Filter Logic :
              listOfRestaurants = listOfRestaurants.filter((res) => {
                return (res.info.avgRating > 4,
                console.log(listOfRestaurants))
              });
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
