import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSelectTrailerVideo } from "../utils/movieSlice";

const useSelectTrailer = (movieID, isHover) => {
  const dispatch = useDispatch();
  const selectMovieVideo = useSelector(
    (store) => store.movies.selectTrailerVideo
  );
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    if (!json) return;
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addSelectTrailerVideo({ [movieID]: trailer }));
    // setKey(trailer);
  };

  useEffect(() => {
    isHover && !selectMovieVideo?.[movieID] && getTrailer();
  }, [isHover]);
  // return key;
};

export default useSelectTrailer;
