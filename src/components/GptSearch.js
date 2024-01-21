import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute z-7">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="bg" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
