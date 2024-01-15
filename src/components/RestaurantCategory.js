import { useState } from "react";
import RestaurantItem from "./RestaurantItem";
import RestaurantSubCategory from "./RestaurantSubCategory";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title } = data?.card?.card;
  const category = data?.card?.card?.categories;
  const items = data?.card?.card?.itemCards;

  //   const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="menu-information hover:cursor-pointer">
      {/* ACCORDION HEADER*/}
      <div className="styles_bold_divider"></div>

      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-xl">
          {title}
          {" ("}
          {category?.length || items?.length}
          {")"}
        </span>
        <span>⬇️</span>
      </div>
      {/* ACCORDION BODY */}
      {category
        ? category.map(
            (categories) =>
              showItems && (
                <RestaurantSubCategory
                  key={categories.title}
                  data={categories}
                />
              )
          )
        : items.map(
            (itemList) =>
              showItems && <RestaurantItem key={itemList.id} data={itemList} />
          )}
    </div>
  );
};

export default RestaurantCategory;
