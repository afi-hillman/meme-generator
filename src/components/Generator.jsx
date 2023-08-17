import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MEME_DATA from "../assets/meme.json";
import Image from "./Image";

const Generator = () => {
  const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };
  const randomIndex = randomNumber(MEME_DATA.length);
  MEME_DATA[randomIndex];

  const [randomMeme, setRandomMeme] = useState("");
  const [memeWidth, setMemeWidth] = useState();
  const [memeHeight, setMemeHeight] = useState();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [textPosition, setTextPosition] = useState("column");
  const [showText, setShowText] = useState("none");
  const getRandomMeme = () => {
    setRandomMeme(MEME_DATA[randomIndex].url);
    setMemeHeight(MEME_DATA[randomIndex].height);
    setMemeWidth(MEME_DATA[randomIndex].width);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   console.log(watch("firstText"));
  //   console.log(watch("secondText"));
  //   console.log(watch("textPosition"));

  const toggleTextPosition = () => {
    setTextPosition(textPosition === "row" ? "column" : "row");
  };

  const toggleShowtext = () => {
    setShowText(showText === "flex" ? "none" : "flex");
  };

  const onSubmit = (data) => {
    const { firstText, secondText, textPosition } = data;
    getRandomMeme();
    setText1(firstText);
    setText2(secondText);
    setTextPosition(textPosition);
  };

  return (
    <div className="flex flex-row gap-[100px] justify-center items-center h-screen w-screen bg-zinc-800">
      <div className="flex flex-col justify-between items-center w-[550px] h-[600px] border-red-500 border-4 rounded-md">
        <h1
          className="bg-red-600 flex items-center w-full h-[65px] p-6 text-white"
          style={{
            fontSize: "40px",
            fontWeight: 800,
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
        >
          🤡 MEME GENERATOR !
        </h1>
        <form
          className="flex flex-col justify-between items-start w-full h-full p-4 gap-4 bg-white"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="firstText" style={{ fontSize: "20px" }}>
            Text 1
          </label>
          <input
            type="text"
            placeholder="Insert text 1"
            className="border block w-full p-2 rounded-md"
            {...register("firstText")}
          />
          {errors.firstName && (
            <span className="text-sm text-red-500">Field is required</span>
          )}
          <label htmlFor="secondText" style={{ fontSize: "20px" }}>
            Text 2
          </label>
          <input
            type="text"
            placeholder="Insert text 2"
            className="border block w-full p-2 rounded-md"
            {...register("secondText")}
          />
          {errors.firstName && (
            <span className="text-sm text-red-500">Field is required</span>
          )}
          <label htmlFor="textPosition" style={{ fontSize: "20px" }}>
            Text Position
          </label>
          <select
            className="border block w-full p-2 rounded-md"
            {...register("textPosition")}
            value={textPosition}
            onChange={toggleTextPosition}
          >
            <option value="column">top-to-bottom</option>
            <option value="row">left-to-right</option>
          </select>
          {errors.firstName && (
            <span className="text-sm text-red-500">Field is required</span>
          )}
          <div className="flex flex-col w-full gap-2">
            <button
              onClick={handleSubmit(onSubmit)}
              type="button"
              className="w-full h-[40px] bg-red-600 text-white rounded-md hover:bg-red-600/70 transition-all"
            >
              Generate meme! 🖼
            </button>
            <button
              onClick={() => {
                toggleShowtext();
              }}
              type="button"
              className="w-full h-[40px] bg-red-600 hover:bg-red-600/70 transition-all text-white rounded-md"
            >
              Insert text to image ➡
            </button>
          </div>
        </form>
      </div>
      <Image
        randomMeme={randomMeme}
        memeWidth={memeWidth}
        memeHeight={memeHeight}
        text1={text1}
        text2={text2}
        textPosition={textPosition}
        showText={showText}
      />
    </div>
  );
};

export default Generator;
