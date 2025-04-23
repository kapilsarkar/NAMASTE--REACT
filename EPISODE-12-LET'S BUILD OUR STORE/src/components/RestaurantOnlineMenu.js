import { useParams } from "react-router-dom";
import useRestaurantMenuOnline from "../hooks/useRestaurantMenuOnline";
import { EACH_MENU_IMG, MENU_IMG, MENU_IMG_ONLINE } from "../utils/constant";
import { MdStarRate } from "react-icons/md";
const RestaurantOnlineMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenuOnline(resId);

    console.log(resId);
    console.log(resInfo);

    // Check if resInfo and cards are available
    const { name, cuisines, cloudinaryImageId, city, avgRating,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {}

    if (!resInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full mt-2">
            <div className="text-white bg-orange-600 flex flex-wrap justify-center items-center min-h-48 font-bold p-3">
                <img className="rounded-xl shadow-2xl w-80 h-52 animate-pulse" src={MENU_IMG_ONLINE + cloudinaryImageId} />
                <div className="flex flex-col m-5">
                    <h2 className=" font-bold text-2xl">{name}</h2>
                    <p className=" flex px-5 py-1.5 items-center rounded-xs bg-green-700 gap-2">
                        <MdStarRate className=" text-white bg-green-500 rounded-[50%] p-0.5" />
                        {avgRating} |{" "}
                        {resInfo?.cards[2]?.card?.card?.info?.sla?.deliveryTime}mins
                    </p>
                    <p className=" font-bold text-lg">{cuisines.join(",")}</p>
                    <p>{city}</p>
                    <p>{costForTwoMessage}</p>
                </div>
            </div>

        </div>
    );
};

export default RestaurantOnlineMenu;