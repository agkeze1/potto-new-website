import React, { FC } from "react";

type Props = {
  text: string;
};

const FeatureText: FC<Props> = ({ text }) => {
  return (
    <span className="block text-white bg-teal-600 text-sm px-6 py-3 mr-2 mb-2">
      {text}
    </span>
  );
};

export default FeatureText;
