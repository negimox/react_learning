import { CDN_URL } from "../utils/constant";

const FoodCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRatingString, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div className="hover:scale-96 hover:cursor-pointer m-3 w-[350px] h-[395px] relative transition-all duration-500">
      <img
        className="rounded-lg w-[100%] h-[55%] block object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="h-[25%] w-[100%] inline-block absolute bottom-[45%] left-0 rounded-lg bg-gradient-to-t from-black to-transparent">
        <div className="text-white inline-block absolute text-[26px] top-[55%] px-4">
          <h4 className="font-bold">{costForTwo.toUpperCase()}</h4>
        </div>
      </div>
      <div>
        <h2 className="font-bold py-3 text-lg">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

// Higher Order Component
export const withOpenLabel = (FoodCard) => {
  return (props) => {
    return (
      <div>
        <label className="">OPEN</label>
        <FoodCard {...props} />
      </div>
    );
  };
};

export default FoodCard;
