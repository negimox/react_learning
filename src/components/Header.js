import React, { useEffect, useState } from "react";
import {
  ICO_HAM_MENU,
  ICO_SEARCH,
  ICO_USER,
  LOGO_CDN,
  YOUTUBE_AUTOCOMPLETE_API,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    //API Call
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchQuery === "") {
        setSearchSuggestions([]);
        return;
      }
      // console.log(searchCache);
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  /**
   * key - I
   * - Renders the comp
   * - useEffect()
   * - starts Timeout/Timer => makes api call after 200ms
   *
   * key - Ip
   * - Destroy the prev Timeout
   * - Re-renders
   * - useEffect()
   * - Starts a new Timeout/Timer => makes api call after 200ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_AUTOCOMPLETE_API + searchQuery);
    const json = await data.json();
    console.log("API CALL");
    setSearchSuggestions(json[1]);
    // Update Cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  return (
    <div className="grid grid-flow-col h-max py-1 mx-6 pb-1 border-b-2 border-neutral-700">
      {/* LEFT SIDE FOR SM */}
      <div
        style={{
          pointerEvents: showSuggestions ? "none" : "auto",
          opacity: showSuggestions ? "0" : "100",
          width: showSuggestions ? "0" : "100%",
        }}
        className="flex w-full md:hidden col-span-1 transition-all duration-200"
      >
        <button onClick={toggleMenuHandler} className="my-auto text-white">
          <ICO_HAM_MENU />
        </button>
        <div className="flex flex-wrap select-none ml-1 md:ml-4">
          <a className="flex flex-wrap" href="/">
            <img className="my-auto h-7 mr-[2px]" alt="logo" src={LOGO_CDN} />
            <h1 className="font-bold text-white text-lg md:text-xl tracking-tighter my-auto">
              YouthTube™
            </h1>
          </a>
        </div>
      </div>

      {/* LEFT SIDE FOR PC */}
      <div className="hidden md:flex col-span-1 z-10">
        <button onClick={toggleMenuHandler} className="my-auto text-white">
          <ICO_HAM_MENU />
        </button>
        <div className="flex select-none ml-4">
          <a className="flex flex-wrap" href="/">
            <img
              className="my-auto w-90 h-7 mr-[2px]"
              alt="logo"
              src={LOGO_CDN}
            />
            <h1 className="font-bold text-white text-xl tracking-tighter my-auto">
              YouthTube™
            </h1>
          </a>
        </div>
      </div>
      {/* SEARCH */}
      <div className="col-span-12 text-white align-middle text-center">
        <div className="mx-auto rounded-full flex flex-col m-2 w-full md:w-[55%] max-w-[640px] relative">
          <div className="flex flex-row">
            <input
              className="transition-all duration-150 py-[6px] px-4 rounded-s-full w-full border-[1px] border-neutral-700 focus:border-white outline-none"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-4 rounded-e-full bg-neutral-800 border-neutral-700 border-[1px] border-l-0">
              <ICO_SEARCH />
            </button>
          </div>
          {showSuggestions && searchSuggestions[0] && (
            <div className="rounded-lg absolute mt-1 max-w-[580px] top-full w-full text-left">
              <ul className="list-none rounded-lg w-full bg-neutral-800 py-5">
                {searchSuggestions.map((item) => (
                  <li
                    key={item}
                    className="select-none bg-transparent px-4 py-1 hover:bg-neutral-600 grid grid-flow-col justify-start"
                  >
                    <ICO_SEARCH />
                    <h1 className="bg-transparent pl-2 w-full">{item}</h1>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* USER */}
      <div className="col-span-1 my-auto flex justify-end">
        <button className="text-white">
          <ICO_USER />
        </button>
      </div>
    </div>
  );
};

export default Header;
