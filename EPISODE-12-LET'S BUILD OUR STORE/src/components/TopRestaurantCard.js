import { CDN_URL } from "../utils/constant";
const TopRestaurantCard = (props) => {
  const { resData } = props;
  const { name } = resData?.info;
  return (
    <div className=" flex flex-wrap">
      <div className="cursor-pointer rounded-xl w-72 h-[32rem] p-3 font-bold  shadow-2xl">
        <h3 className="text-xl text-center mt-2 text-orange-600">{name}</h3>
      </div>
    </div>
  );
};

export default TopRestaurantCard;
