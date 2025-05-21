import { CDN_URL } from "../utils/constant";
import { MdStarRate } from "react-icons/md";
const TopRestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    areaName,
    avgRating,
    avgRatingString,
  } = resData?.info;
  return (
    <div className=" flex flex-wrap justify-center gap-1.5 mt-2 w-auto">
      <div className="cursor-pointer rounded-xl w-80 h-[32rem] p-3 font-bold  shadow-2xl erflow-hidden hover:scale-[0.98] relative">
        <div className="text-purple-500 bg-white p-2 text-center rounded-2xl text-sm font-bold absolute top-[36%] left-[10px]">
          <div className=" flex flex-wrap p-1 gap-1">
            <MdStarRate className=" text-white bg-green-700 rounded-[50%] mt-2 text-xl p-0.5" />
            <p className="font-bold text-xs mt-2.5">{avgRatingString}</p>
          </div>
        </div>
        <label className="absolute bg-green-600 text-white rounded-lg m-1 p-2 font-semibold">
          Average Rating
        </label>
        <img
          className=" w-full h-[50%] p-1 shadow-2xl rounded-2xl"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-xl text-center mt-2 text-orange-600">{name}</h3>
        <p className=" text-green-600">{cuisines.join(", ")}</p>
        <p className="text-green-600 mt-2 flex flex-wrap ml-1 mr-1 gap-1 text-xl p-0.5">
          <MdStarRate className=" text-white bg-green-700 rounded-[50%] mt-2 text-xl p-0.5 animate-spin" />
          <span className="mt-2">{`${avgRating}`}</span>
          <span className="mt-2 text-purple-600">
            {resData?.info?.sla?.slaString}
          </span>
        </p>
        <p className=" text-red-500">{costForTwo}</p>
        <p className=" text-blue-500">{areaName}</p>
      </div>
    </div>
  );
};

export default TopRestaurantCard;
