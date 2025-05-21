import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false)
    //console.log(data)
    const handleClick = () => {
        showItems === false ? setShowItems(true) : setShowItems(false)
    }
    return (
        <div>
            {/* accordion header */}
            <div className="w-[65%] text-center mx-auto my-3 text-black font-bold bg-gray-100 shadow-lg p-3 ">
                <div className="flex justify-between flex-wrap cursor-pointer" onClick={handleClick}>
                    <span>{data?.title} ({data?.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items={data?.itemCards} />}
            </div>
            {/* accordion body */}
        </div>
    )
}
export default RestaurantCategory;
