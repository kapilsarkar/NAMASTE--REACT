import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
 //const [showItems,setShowItems] = useState(false)
 const handleClick = ()=>{
  setShowIndex()
 }
  return (
    <div className="">
      {/* Header  */}
      <div className="w-9/12 text-center mx-auto my-3 text-black font-bold bg-gray-100 shadow-lg p-3 ">
        <div
          className="flex justify-between flex-wrap cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data?.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
