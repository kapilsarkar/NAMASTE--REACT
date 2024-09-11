import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState([
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
        id: "578813",
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
    {
      info: {
        id: "578814",
        name: "KFC",
        cloudinaryImageId: "d8wm0jbhfitiajn13sg6",
        costForTwo: "₹250 for two",
        cuisines: ["Sweets", "Snacks"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 34,
        },
      },
    },
  ]);

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

              const filteredResList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredResList)
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
