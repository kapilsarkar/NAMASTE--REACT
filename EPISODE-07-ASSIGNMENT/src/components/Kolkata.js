import { KOLKATA_TO_EXPLORE,EDUCORS_URL, ApiKey } from "../utils/constant";
import { useState,useEffect } from "react";
import TopKolkata from "./TopKolkata";
const Kolkata = () => {
  const [kolkata, setTopKolkata] = useState([]);
  useEffect(()=>{
      fetchKolkata()
  },[])
  const fetchKolkata = async () => {
    const data = await fetch(
      `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
        KOLKATA_TO_EXPLORE
      )}`
    );
    const json = await data.json();
    setTopKolkata(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="">
      <h2 className="heading-kolkata">
        Top Restaurants in Kolkata
      </h2>
      <div className="top-res">
        {kolkata.map((restaurant) => {
          return <TopKolkata key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Kolkata;
