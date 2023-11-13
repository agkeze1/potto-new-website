import React from "react";
import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <div className="flex relative items-center justify-center">
      <div
        className="flex items-center justify-center bg-white rounded-full hover:cursor-pointer hover:bg-neutral-200"
        style={{ width: "70px", height: "70px" }}
      >
        <FaPlay color="teal" size={22} />
      </div>
      <span className="animate-ping absolute inline-flex w-12 h-12 rounded-full bg-white opacity-75"></span>
      <span className="animate-ping absolute inline-flex w-16 h-16 rounded-full bg-white opacity-75"></span>
    </div>
  );
};

export default PlayButton;
