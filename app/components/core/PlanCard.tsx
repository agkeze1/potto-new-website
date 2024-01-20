import React, { FC } from "react";
import { FiChevronRight } from "react-icons/fi";

type Props = {
  title: string;
  desc: string;
};

const PlanCard: FC<Props> = ({ title, desc }) => {
  return (
    <div
      className="w-full bg-teal-700 px-10 py-16"
      style={{ boxShadow: "inset 60px 0 65px rgba(0, 0, 0, 0.1)" }}
    >
      <h1 className="font-black text-3xl text-white text-center">{title}</h1>
      <p className="text-gray-100 text-sm text-center leading-relaxed my-8">
        {desc}
      </p>
      <div className="flex justify-center w-full">
        <div className="flex items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-600 w-20 h-20 cursor-pointer">
          <FiChevronRight className="w-12 h-12 text-teal-700" />
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
