import { DELHI_TO_EXPLORE,EDUCORS_URL, ApiKey } from "../utils/constant";
import { useState,useEffect } from "react";
import TopDelhi from "./TopDelhi";
const Delhi = () => {
  const [delhi, setTopDelhi] = useState([]);
  useEffect(()=>{
      fetchDelhi()
  },[])
  const fetchDelhi = async () => {
    const data = await fetch(
      `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
        DELHI_TO_EXPLORE
      )}`
    );
    const json = await data.json();
    setTopDelhi(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="">
      <h2 className="heading-kolkata">
        Top Restaurants in Delhi
      </h2>
      <div className="top-res">
        {delhi.map((restaurant) => {
          return <TopDelhi key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Delhi;
