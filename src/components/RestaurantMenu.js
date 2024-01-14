import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const {
    name,
    city,
    avgRatingString,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
  } = resMenu?.cards[0]?.card?.card?.info;
  const menuList = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filteredMenuCards = menuList.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
  return (
    <div className="menu">
      <div className="menu-information-single">
        <h2>{name}</h2>
        <div>
          <h2>{avgRatingString}</h2>
          <h5>{totalRatingsString}</h5>
        </div>
      </div>
      <p className="menu-desc">
        {cuisines.join(", ")}
        <br />
        {city}
      </p>
      <hr className="dotted-seprator"></hr>
      <h3 className="font-bold text-2xl my-4">{costForTwoMessage}</h3>

      {filteredMenuCards.map((menu, index) => (
        //Controlled Component
        <RestaurantCategory
          key={menu?.card?.card?.title}
          data={menu}
          showItems={index === showIndex && true}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
