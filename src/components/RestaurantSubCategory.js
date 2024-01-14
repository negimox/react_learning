import RestaurantItem from "./RestaurantItem";
import { useState } from "react";

const RestaurantSubCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const { title } = data;
  const { length } = data?.itemCards;
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="" onClick={handleClick}>
      <div className="styles_bold_divider"></div>
      <h2 className="menu-title">
        {title}
        {" ("}
        {length}
        {")"}
      </h2>

      {data?.itemCards.map(
        (itemList) => showItems && <RestaurantItem data={itemList} />
      )}
    </div>
  );
};

export default RestaurantSubCategory;
