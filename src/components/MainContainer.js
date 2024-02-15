import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import MainShimmer from "./MainShimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return <MainShimmer />;
  const { id } = movies[0];
  return (
    <div className="bg-black pt-[30%] md:pt-0">
      <VideoTitle movie={movies[0]} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
