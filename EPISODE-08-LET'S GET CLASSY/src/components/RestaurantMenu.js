import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MdStarRate } from "react-icons/md";
import { EACH_MENU_IMG, MENU_IMG, MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
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
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img className="restaurant-img" src={MENU_IMG + cloudinaryImageId} />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{name}</h2>
          <p className="restaurant-rating">
            <MdStarRate className="star-rating" />
            {avgRating} |{" "}
            {resInfo?.cards[2]?.card?.card?.info?.sla?.deliveryTime}mins
          </p>
          <p>{cuisines.join(",")}</p>
          <p>{city}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <h3 className="recommend-head">Menu</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <div key={item.card.info.id} className="all-menu">
              <div className="all-menu-description-left">
                <h3>{item?.card?.info?.name}</h3> - {"₹"}
                {item?.card?.info?.price}
                <p className="menu-desc">{item?.card?.info?.description}</p>
              </div>
              <div className="all-menu-description-right">
                <img src={EACH_MENU_IMG + item?.card?.info?.imageId} />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
