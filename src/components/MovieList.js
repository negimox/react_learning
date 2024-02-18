import { useDispatch, useSelector } from "react-redux";
import Arrow from "../utils/arrow";
import MovieCard from "./MovieCard";
import debounce from "debounce";
import { addInfoItem, changeInfoShow } from "../utils/configSlice";

const MovieList = ({ movies, title, index }) => {
  // const [showMoreInfo, setShowMoreInfo] = useState({ item: null, show: false });
  const dispatch = useDispatch();
  const mainVid = useSelector((store) => store.config.mainVideo);

  const handleHover = debounce(() => {
    if (!mainVid) return;
    mainVid.pauseVideo();
  }, 1000);

  const handleUnHover = () => {
    handleHover.clear();
    if (!mainVid) return;
    mainVid.playVideo();
  };

  function handleClick(item) {
    dispatch(changeInfoShow());
    dispatch(addInfoItem(item));
    // setShowMoreInfo({ item: movies[0] });
  }

  return (
    <div className="pb-8 md:pb-10 px-2 md:px-6 text-white">
      <h1 className="pb-1 md:py-6 font-medium text-xl md:text-3xl">{title}</h1>

      <div className="relative">
        {/* <div
          className={
            "grid grid-flow-col caraousel overflow-y-hidden whitespace-nowrap overflow-x-hidden scroll-smooth no-scrollbar list-" +
            index
          }
        > */}
        {movies.length > 7 && <Arrow type="l" index={index} />}
        <ul
          className={
            "grid grid-flow-col caraousel overflow-y-hidden whitespace-nowrap overflow-x-hidden scroll-smooth no-scrollbar list-" +
            index
          }
        >
          {movies.map((item) => (
            <li key={item.id} className={"list-none my-auto flex"}>
              <div
                onClick={() => handleClick(item)}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnHover}
                // style={{
                //   gridAutoColumns: "calc((100% / 3) - 25px)",
                //   gap: "1rem",
                //   scrollSnapType: "x proximity",
                // }}
                className="bg-black md:hover:delay-700 md:hover:shadow-lg md:hover:shadow-black transition-all duration-300 md:hover:scale-x-[2.5] md:hover:scale-y-[2.5] m-0 md:hover:mx-24 hover:cursor-pointer"
              >
                <MovieCard item={item} />
              </div>
            </li>
          ))}
        </ul>
        {movies.length > 7 && <Arrow type="r" index={index} />}
        {/* </div> */}
      </div>
    </div>
  );
};

export default MovieList;
