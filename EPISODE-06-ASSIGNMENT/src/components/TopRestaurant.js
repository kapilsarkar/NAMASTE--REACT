import { CDN_URL } from "../utils/constant";

const TopRestaurant = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name } = resData?.info;
  return (
    <div className="top-res-card">
      <img className="top-res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
    </div>
  );
};

export default TopRestaurant;
