import Image from "next/image";
import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  desc: string;
  icon: ReactNode;
};

const SolutionCard: FC<Props> = ({ title, desc, icon }) => {
  return (
    <div className="relative bg-teal-700 w-full">
      {/* background image */}
      <Image
        src="/svg/icon-bg-2.svg"
        alt=""
        layout="fill"
        className="absolute top-0 left-0 w-full h-full opacity-25"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center px-10 py-14">
        {/* Icon */}
        <div className="bg-white bg-opacity-20 rounded-full w-24 h-24 flex items-center justify-center">
          {icon}
        </div>

        {/* Title */}
        <h1 className="text-white font-black text-2xl text-center my-6 px-5">
          {title}
        </h1>

        {/* Description */}
        <p className="text-center text-gray-300 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
