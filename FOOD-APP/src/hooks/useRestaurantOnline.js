import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "../utils/constant";

const useRestaurantOnline = () => {
  const [listOnlineRes, setOnlineRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    // console.log(
    //   json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setOnlineRes(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return [listOnlineRes,setOnlineRes,fetchData];
};

export default useRestaurantOnline;
