import { CDN_URL } from "../utils/constant.js";

const RestaurantItem = ({ data }) => {
  const { name, price, defaultPrice, imageId, description } = data?.card?.info;

  return (
    <div className="">
      <div className="styles_divider"></div>
      <div className="menu-information-single relative">
        <b>
          <h3>{name}</h3>

          <h4>
            {"₹ "}
            {price / 100 || defaultPrice / 100}
          </h4>
        </b>
        {imageId && <img className="menu-img" src={CDN_URL + imageId} />}
        <div className="absolute right-[3%] -bottom-4">
          <button className="p-2 bg-slate-800 hover:bg-slate-500 text-white shadow-lg rounded-lg">
            Add +
          </button>
        </div>
      </div>
      <p className="menu-desc">{description}</p>
    </div>
  );
};

export default RestaurantItem;
