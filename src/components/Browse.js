import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="z-11">
      <Header />
      {/* Main Container 
          - Video BG
          - Video Title
      */}
      <MainContainer />
      {/* Secondary Container 
          - Video Title
      */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
