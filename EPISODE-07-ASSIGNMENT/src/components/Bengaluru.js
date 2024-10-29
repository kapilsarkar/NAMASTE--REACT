import { BENGALURU_TO_EXPLORE,EDUCORS_URL, ApiKey } from "../utils/constant";
import { useState,useEffect } from "react";
import TopBengaluru from "./TopBengaluru";
const Bengaluru = () => {
  const [bengaluru, setTopBengaluru] = useState([]);
  useEffect(()=>{
      fetchBengaluru()
  },[])
  const fetchBengaluru = async () => {
    const data = await fetch(
      `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
        BENGALURU_TO_EXPLORE
      )}`
    );
    const json = await data.json();
    setTopBengaluru(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="">
      <h2 className="heading-kolkata">
        Top Restaurants in Bengaluru
      </h2>
      <div className="top-res">
        {bengaluru.map((restaurant) => {
          return <TopBengaluru key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Bengaluru;
