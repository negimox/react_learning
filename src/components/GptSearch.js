import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative">
      <div className="bg-black/55 w-full h-full absolute z-9"></div>
      <img className="z-7" src={BG_URL} alt="bg" />
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
