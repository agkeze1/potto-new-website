import Image from "next/image";
import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  desc: string;
  icon: ReactNode;
};

const GetStartedCard: FC<Props> = ({ title, desc, icon }) => {
  return (
    <div
      className="relative bg-white w-full"
      style={{
        boxShadow:
          "8px 0 15px rgba(0, 0, 0, 0.2), inset 12px 0 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* background image */}
      <Image
        src="/svg/icon-bg.svg"
        alt="Icon-bg"
        layout="fill"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center px-10 py-14">
        {/* Icon */}
        <div className="">{icon}</div>

        {/* Title */}
        <h1 className="text-teal-700 font-black text-2xl text-center my-6 px-5">
          {title}
        </h1>

        {/* Description */}
        <p className="text-center text-gray-500 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default GetStartedCard;
