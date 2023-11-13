import React, { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  content: string;
};

const BenefitCard: FC<Props> = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col items-center w-full bg-yellow-600 bg-opacity-5 px-10 py-16 shadow-md mt-6 md:mt-0">
      <div className="p-6 rounded-full bg-teal-600 bg-opacity-5">{icon}</div>
      <p className="my-8 font-black text-2xl text-center">{title}</p>
      <p className="text-center text-gray-500 leading-loose">{content}</p>
    </div>
  );
};

export default BenefitCard;
