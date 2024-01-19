import React, { FC, ReactNode } from "react";

type Props = {
  imgPath: string;
  label: string;
  width: string;
  spaced?: boolean;
};

const PromiseLabel: FC<Props> = ({ imgPath, label, width, spaced = false }) => {
  return (
    <div
      className={`flex items-center bg-teal-700 px-5 py-3 mb-1 w-full lg:${width} ${
        spaced && "justify-between"
      }`}
    >
      <img src={imgPath} alt="" className="mr-5 h-5" />
      <p className="text-white text-xl ">{label}</p>
    </div>
  );
};

export default PromiseLabel;
