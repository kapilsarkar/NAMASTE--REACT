import { JAIPUR_TO_EXPLORE,EDUCORS_URL, ApiKey } from "../utils/constant";
import { useState,useEffect } from "react";
import TopJaipur from "./TopJaipur";
const Jaipur = () => {
  const [jaipur, setTopJaipur] = useState([]);
  useEffect(()=>{
      fetchJaipur()
  },[])
  const fetchJaipur = async () => {
    const data = await fetch(
      `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
        JAIPUR_TO_EXPLORE
      )}`
    );
    const json = await data.json();
    setTopJaipur(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="">
      <h2 className="heading-kolkata">
        Top Restaurants in Jaipur
      </h2>
      <div className="top-res">
        {jaipur.map((restaurant) => {
          return <TopJaipur key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Jaipur;
