import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant.js";
import { addItem } from "../utils/cartSlice.js";

const RestaurantItem = ({ data }) => {
  const { name, price, defaultPrice, imageId, description } = data?.card?.info;
  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    //DISPATCH AN ACTION whatever we pass inside here goes to payload which goes to action keyword in cartSlice as second argument.
    dispatch(addItem(data));
  };
  return (
    <div>
      <div className="styles_divider"></div>
      <div className="menu-information-single relative">
        <b>
          <h3>{name}</h3>

          <h4>
            {"₹ "}
            {price / 100 || defaultPrice / 100}
          </h4>
        </b>
        {imageId && (
          <img
            className="w-[148px] h-[126px] rounded-lg mx-5"
            src={CDN_URL + imageId}
          />
        )}
        <div className="absolute right-[3%] -bottom-4">
          <button
            className="p-2 bg-slate-800 hover:bg-slate-500 text-white shadow-lg rounded-lg"
            onClick={() => handleAddToCart(data)}
          >
            Add +
          </button>
        </div>
      </div>
      <p className="menu-desc">{description}</p>
    </div>
  );
};

export default RestaurantItem;
