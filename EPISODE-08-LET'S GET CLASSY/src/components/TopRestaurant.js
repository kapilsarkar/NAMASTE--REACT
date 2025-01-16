import { CDN_URL } from "../utils/constant";

const TopRestaurant = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData?.info;
  return (
    <div className="res-card">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>{costForTwo}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default TopRestaurant;
