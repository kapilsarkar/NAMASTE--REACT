import { CDN_URL } from "../utils/constant";
import { MdStarRate } from "react-icons/md";
const TopDelhi = (props)=>{
    const { resData } = props;
    const { cloudinaryImageId, name,cuisines,avgRating,costForTwo,areaName} = resData?.info;
    return (
      <div className="top-res-card">
        <img className="top-res-logo" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p><MdStarRate className="star-rating"/> {avgRating}</p>
        <p>{resData.info.sla.deliveryTime}mins</p>
        <p>{costForTwo}</p>
        <p>{areaName}</p>
      </div>
    );
}

export default TopDelhi