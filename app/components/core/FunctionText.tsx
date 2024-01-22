import React, { FC } from "react";

type Props = {
  text: string;
  primary?: boolean;
  width?: string;
  size?: string;
};

const FunctionText: FC<Props> = ({
  text,
  primary = false,
  width = "w-full lg:w-1/2",
  size = "text-md",
}) => {
  return (
    <div className={`flex ${width} my-4 items-start`}>
      <span
        className={`w-2 h-2 rounded-full ${
          primary ? "bg-gray-500" : "bg-white"
        } inline-block mt-2`}
      />
      <p
        className={`${
          primary ? "text-gray-600" : "text-gray-200"
        } ${size} ml-4 `}
      >
        {text}
      </p>
    </div>
  );
};

export default FunctionText;
