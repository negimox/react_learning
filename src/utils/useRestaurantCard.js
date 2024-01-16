import { useState, useEffect } from "react";
import { RESTAURANT_API } from "./constant";

const useRestaurantCard = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants;
};

export default useRestaurantCard;
