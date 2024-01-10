import React, { FC } from "react";
import { FaPlay } from "react-icons/fa";

type Props = {
  secondary?: boolean;
};

const PlayButton: FC<Props> = ({ secondary = false }) => {
  return (
    <div className="flex relative items-center justify-center">
      <div
        className={`flex items-center justify-center ${
          secondary
            ? "bg-white hover:bg-neutral-200"
            : "bg-teal-700 hover:bg-teal-700"
        } rounded-full hover:cursor-pointer`}
        style={{ width: "70px", height: "70px" }}
      >
        <FaPlay color={secondary ? "teal" : "white"} size={22} />
      </div>
      <span
        className={`animate-ping absolute inline-flex w-12 h-12 rounded-full ${
          secondary ? "bg-white" : "bg-teal-600"
        } opacity-75`}
      ></span>
      <span
        className={`animate-ping absolute inline-flex w-16 h-16 rounded-full ${
          secondary ? "bg-white" : "bg-teal-600"
        } opacity-75`}
      ></span>
    </div>
  );
};

export default PlayButton;
