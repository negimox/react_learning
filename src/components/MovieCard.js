import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ item }) => {
  const { poster_path } = item;
  return (
    <div className="w-48">
      <img
        className="rounded-sm"
        alt="Movie Card"
        src={IMG_CDN + poster_path}
      />
    </div>
  );
};

export default MovieCard;
