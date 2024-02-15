import useMovieVideo from "../hooks/useMovieVideo";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import Video from "./Video";
import { useEffect, useRef, useState } from "react";
import { changeAccent } from "../utils/configSlice";

const VideoBackground = ({ movieID }) => {
  useMovieVideo(movieID);
  const file = useRef(null);
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  const poster_path = useSelector(
    (store) => store.movies?.nowPlayingMovies[0].poster_path
  );
  const dispatch = useDispatch();

  const image = new Image();
  image.src = "https://image.tmdb.org/t/p/w780/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg";
  image.crossOrigin = "Anonymous";
  // const image = new Image();
  const [hexCodeGlobal, setHexCodeGlobal] = useState("#000000");
  const [imgOpacity, setImgOpacity] = useState("100");
  // const file = imgFile.files[0];
  const imgColor = () => {
    // const img = document.getElementById("myimg");
    //file.current.setAttribute("crossOrigin", "");
    //file.current.crossOrigin = "Anonymous";
    const canvas = document.getElementById("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // console.log(imageData);
    const rgbData = buildRgb(imageData.data);
    // console.log(rgbData);
    // const biggestColor = findBiggestColorRange(rgbData);
    // console.log(biggestColor);
    const quant = quantization(rgbData, 4);
    // console.log(quant);
    const hexCode = rgbToHex(quant[0].r, quant[0].g, quant[0].b).toLowerCase();
    console.log("#" + hexCode.toString());
    setHexCodeGlobal("#" + hexCode.toString());
    setImgOpacity("0");
    // dispatch(changeAccent("#" + hexCode));
  };

  const buildRgb = (imageData) => {
    const rgbValues = [];
    for (let i = 0; i < imageData.length; i += 4) {
      const rgb = {
        r: imageData[i],
        g: imageData[i + 1],
        b: imageData[i + 2],
      };
      rgbValues.push(rgb);
    }
    return rgbValues;
  };

  const findBiggestColorRange = (rgbValues) => {
    let rMin = Number.MAX_VALUE;
    let gMin = Number.MAX_VALUE;
    let bMin = Number.MAX_VALUE;

    let rMax = Number.MIN_VALUE;
    let gMax = Number.MIN_VALUE;
    let bMax = Number.MIN_VALUE;

    rgbValues.forEach((pixel) => {
      rMin = Math.min(rMin, pixel.r);
      gMin = Math.min(gMin, pixel.g);
      bMin = Math.min(bMin, pixel.b);

      rMax = Math.max(rMax, pixel.r);
      gMax = Math.max(gMax, pixel.g);
      bMax = Math.max(bMax, pixel.b);
    });

    const rRange = rMax - rMin;
    const gRange = gMax - gMin;
    const bRange = bMax - bMin;

    const biggestRange = Math.max(rRange, gRange, bRange);
    if (biggestRange === rRange) {
      return "r";
    } else if (biggestRange === gRange) {
      return "g";
    } else {
      return "b";
    }
  };

  const quantization = (rgbValues, depth) => {
    // base code goes here
    const MAX_DEPTH = 4;
    if (depth === MAX_DEPTH || rgbValues.length === 0) {
      const color = rgbValues.reduce(
        (prev, curr) => {
          prev.r += curr.r;
          prev.g += curr.g;
          prev.b += curr.b;

          return prev;
        },
        {
          r: 0,
          g: 0,
          b: 0,
        }
      );

      color.r = Math.round(color.r / rgbValues.length);
      color.g = Math.round(color.g / rgbValues.length);
      color.b = Math.round(color.b / rgbValues.length);
      return [color];
    }

    // recursion code below
    const componentToSortBy = findBiggestColorRange(rgbValues);
    rgbValues.sort((p1, p2) => {
      return p1[componentToSortBy] - p2[componentToSortBy];
    });

    const mid = rgbValues.length / 2;
    return [
      ...quantization(rgbValues.slice(0, mid), depth + 1),
      ...quantization(rgbValues.slice(mid + 1), depth + 1),
    ];
  };

  function rgbToHex(R, G, B) {
    return toHex(R) + toHex(G) + toHex(B);
  }
  function toHex(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return "00";
    n = Math.max(0, Math.min(n, 255));
    return (
      "0123456789ABCDEF".charAt((n - (n % 16)) / 16) +
      "0123456789ABCDEF".charAt(n % 16)
    );
  }
  return (
    <div className="">
      <div
        className={
          "bg-gradient-to-b from-black md:hidden block z-20 w-full h-[85vh] absolute top-0 left-0 transition-all duration-500 opacity-" +
          imgOpacity
        }
      ></div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, " + hexCodeGlobal + ", #000000",
        }}
        className={`opacity-100 md:hidden block z-10 w-full h-[85vh] absolute top-0 left-0`}
      ></div>
      {/* <div className="w-full hidden md:block md:h-[70%] lg:hidden absolute top-0 lg:top-[5%] left-0 z-10 bg-gradient-to-t from-black via-black via-[31%]"></div> */}
      <div className="hidden md:block">
        <Video trailerVideo={trailerVideo} small={false} isGradient={true} />
      </div>
      <div className="relative flex justify-center md:hidden w-[88%] h-[70%] mx-auto">
        <div className="rounded-md w-full h-full absolute top-0 bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-neutral-900 from-[5%] via-transparent"></div>
        <img
          onLoad={imgColor}
          ref={file}
          className="border-white/45 border-2 rounded-md w-full h-full object-cover object-center z-20 shadow-lg shadow-neutral-900"
          id="imgfile"
          alt="Movie Card"
          src={IMG_CDN + poster_path}
        />
        <canvas className="hidden" id="canvas"></canvas>
      </div>
    </div>
  );
};

export default VideoBackground;
