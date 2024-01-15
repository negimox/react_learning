import { useDispatch, useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="menu">
      <div className="flex flex-wrap justify-between">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          onClick={handleClearCart}
          className="px-5 hover:text-sky-700 border-b-4 border-solid transition font-bold"
        >
          Clear Cart
        </button>
      </div>
      <div className="text-center">
        {cartItems.length === 0 && <h1 className="text-xl">Cart is empty!</h1>}
      </div>
      {cartItems.map((item) => (
        <RestaurantItem data={item} />
      ))}
    </div>
  );
};

export default Cart;
