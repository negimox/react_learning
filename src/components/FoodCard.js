import { CDN_URL } from "../utils/constant";

const FoodCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRatingString, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div className="res-card">
      <div className="res-information">
        <img
          className="res-img"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default FoodCard;
