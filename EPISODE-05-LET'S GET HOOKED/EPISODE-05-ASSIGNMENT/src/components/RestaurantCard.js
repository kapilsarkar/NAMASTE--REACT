import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
   const {resData} = props;
  return (
    <div className="res-card">
      <img src="" alt="image" />
      <h3>{resData.data.name}</h3>
      <p>Cuisines:</p>
      <p>Avg Rating:stars</p>
      <p>Cost For Two</p>
      <p>Delivery Time</p>
    </div>
  );
};

export default RestaurantCard;
