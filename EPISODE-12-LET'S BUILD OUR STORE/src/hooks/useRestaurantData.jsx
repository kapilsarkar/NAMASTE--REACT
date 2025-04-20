import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constant";
const useRestaurantData = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [masterList, setMasterList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    // console.log(
    //   json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurant(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setMasterList(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return [
    listOfRestaurant,
    setListOfRestaurant,
    fetchData,
    masterList,
    setMasterList
  ];
};
export default useRestaurantData;
