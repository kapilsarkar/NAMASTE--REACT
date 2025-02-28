import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MdStarRate } from "react-icons/md";
import { EACH_MENU_IMG, MENU_IMG } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    city,
    costForTwoMessage,
    avgRating,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="w-full mt-2">
      <div className=" text-white bg-orange-600 flex flex-wrap justify-center items-center min-h-48 font-bold p-3">
        <img
          className="rounded-xl shadow-2xl w-80 h-52 animate-pulse"
          src={MENU_IMG + cloudinaryImageId}
        />
        <div className="flex flex-col m-5">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className=" flex px-5 py-1.5 items-center rounded-xs bg-green-700 gap-2">
            <MdStarRate className=" text-white bg-green-500 rounded-[50%] p-0.5" />
            {avgRating} |{" "}
            {resInfo?.cards[2]?.card?.card?.info?.sla?.deliveryTime}mins
          </p>
          <p>{cuisines.join(",")}</p>
          <p>{city}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <h3 className=" text-center p-2 text-2xl font-bold bg-orange-600 text-white mt-2">
        Menu
      </h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className=" w-full p-2 mt-2 shadow-2xl drop-shadow-2xl border-amber-600 flex flex-wrap justify-center items-center"
            >
              <div className=" w-[50%] p-2 font-bold">
                <h3 className=" font-bold p-1.5 text-purple-600 text-xl">
                  {item?.card?.info?.name}
                </h3>{" "}
                - {"₹"}
                {item?.card?.info?.price}
                <p className=" font-bold text-xl text-green-700">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className=" p-3 rounded-2xl shadow-2xl">
                <img
                  className="w-72 drop-shadow-2xl p-2"
                  src={EACH_MENU_IMG + item?.card?.info?.imageId}
                />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
