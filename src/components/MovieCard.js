import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ item }) => {
  const { poster_path } = item;
  if (!poster_path) return;
  return (
    <div className="pr-4 w-48 md:w-64 h-60 md:h-80 hover:w-48 md:hover:w-72">
      <img
        className="rounded-md hover:rounded-none h-full"
        alt="Movie Card"
        src={IMG_CDN + poster_path}
      />
    </div>
  );
};

export default MovieCard;
