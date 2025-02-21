import { CDN_URL } from "../utils/constant";
import { MdStarRate } from "react-icons/md";
const TopRestaurant = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData?.info;
  return (
    <div className=" cursor-pointer rounded-xl w-72 h-[32rem] p-3 font-bold  shadow-2xl">
      <img className=" w-full h-[50%] p-1 shadow-2xl rounded-2xl animate-pulse" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-xl text-center mt-1.5 text-orange-600">{name}</h3>
      <p className=" text-green-600">{cuisines.join(", ")}</p>
      <p className="text-green-600 mt-1.5 flex flex-wrap ml-1 mr-1 gap-1 text-xl p-0.5">
        <MdStarRate className=" text-white bg-green-700 rounded-[50%] mt-1 text-xl p-0.5" />
        {`${avgRating}`}
      </p>
      <p className=" text-purple-600">{resData.info.sla.deliveryTime} mins</p>
      <p className=" text-red-500">{costForTwo}</p>
      <p className="text-blue-600">{areaName}</p>
    </div>
  );
};

export default TopRestaurant;
