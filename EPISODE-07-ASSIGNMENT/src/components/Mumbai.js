import { MUMBAI_TO_EXPLORE,EDUCORS_URL, ApiKey } from "../utils/constant";
import { useState,useEffect } from "react";
import TopMumbai from "./TopMumbai";
const Mumbai = () => {
  const [mumbai, setTopMumbai] = useState([]);
  useEffect(()=>{
      fetchMumbai()
  },[])
  const fetchMumbai = async () => {
    const data = await fetch(
      `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
        MUMBAI_TO_EXPLORE
      )}`
    );
    const json = await data.json();
    setTopMumbai(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="">
      <h2 className="heading-kolkata">
        Top Restaurants in Mumbai
      </h2>
      <div className="top-res">
        {mumbai.map((restaurant) => {
          return <TopMumbai key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Mumbai;
