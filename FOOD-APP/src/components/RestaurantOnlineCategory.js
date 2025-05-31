import { useState } from "react";
import ItemListOnline from "./ItemListOnline";

const RestaurantOnlineCategory = ({ data }) => {
    const [showItems,setShowItems] = useState(false)
    const handleClick = ()=>{
        setShowItems(!showItems)
    }
   
    return (
        <div className="w-[70%] text-center mx-auto my-3 text-black font-bold bg-gray-100 shadow-lg p-3">
            <div className="flex justify-between flex-wrap cursor-pointer" onClick={handleClick}>
                <span>{data?.title}({data?.itemCards?.length})</span>
                <span>⬇️</span>
            </div>
           {showItems && <ItemListOnline items={data?.itemCards}/>}
        </div>
    )
}

export default RestaurantOnlineCategory;