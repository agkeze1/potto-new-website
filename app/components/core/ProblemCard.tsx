import React, { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  content: string;
  height?: string;
};

const ProblemCard: FC<Props> = ({
  icon,
  title,
  content,
  height = "h-auto",
}) => {
  return (
    <div className={`bg-white bg-opacity-5 p-8 w-full ${height}`}>
      <div className="my-8">{icon}</div>
      <h3 className="font-black text-white text-xl">{title}</h3>
      <p className="text-gray-400 leading-loose mt-4">{content}</p>
    </div>
  );
};

export default ProblemCard;
