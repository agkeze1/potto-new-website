import React, { FC, useState } from "react";
import FunctionText from "./FunctionText";
import { features } from "process";

export type suiteProps = {
  icon: string;
  title: string;
  subTitle: string;
  desc: string;
  features: string[];
};

type Props = {
  suiteObj: suiteProps;
};

const SuiteCard: FC<Props> = ({ suiteObj }) => {
  const [showMore, setShowMore] = useState<boolean>();

  return (
    <div
      className="w-full lg:w-1/3 p-3 relative"
      onMouseEnter={() => {
        setShowMore(true);
      }}
      onMouseLeave={() => {
        setShowMore(false);
      }}
    >
      <div
        className="w-full h-full bg-white p-10 flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url("/img/bg-suite.png")' }}
      >
        <div className="w-28 h-28 rounded-full bg-yellow-600 bg-opacity-25" />
        <h1 className="font-black text-2xl text-teal-700 mt-8">
          {suiteObj?.title}
        </h1>
        <p className="text-yellow-600 my-3 text-sm">{suiteObj?.subTitle}</p>
        <div className="w-full">
          {suiteObj?.features?.map((feature, idx) => (
            <FunctionText
              primary
              text={feature}
              width="w-full"
              size="text-sm"
              key={idx}
            />
          ))}
        </div>
        <p className="w-full text-center text-yellow-600 text-sm mt-8">
          View Feature {">>"}
        </p>
      </div>

      {/* Overlay for View Feature */}
      {showMore && (
        <div className="absolute p-3 top-0 left-0 w-full h-full">
          <div
            className="w-full h-full bg-yellow-600 flex flex-col justify-center items-center p-10"
            style={{ backgroundImage: 'url("/img/bg-suite.png")' }}
          >
            <h1 className="font-black text-2xl text-white">
              {suiteObj?.title}
            </h1>
            <p className="text-sm text-white text-center mt-8 leading-loose">
              {suiteObj?.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuiteCard;
