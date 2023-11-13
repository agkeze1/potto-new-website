import React, { FC } from "react";

type Props = {
  tagLabel: string;
  tagLabelClr?: "primary |  secondary | white";
  title: string;
  titleClr?: string;
  desc: string;
  descClr?: string;
};

const PageTitle: FC<Props> = ({
  tagLabel,
  title,
  desc,
  tagLabelClr = "secondary",
  titleClr = "text-teal-700",
  descClr = "text-gray-500",
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* TagLine text */}
      <p
        className={`${
          tagLabelClr === "primary"
            ? "text-teal-600"
            : tagLabelClr === "secondary"
            ? "text-yellow-600"
            : "text-white"
        } flex flex-col items-center font-bold`}
      >
        {tagLabel}
        <span
          className={`${
            tagLabelClr === "primary"
              ? "border-teal-600"
              : tagLabelClr === "secondary"
              ? "border-yellow-600"
              : "border-white"
          } inline-block w-8 border-2 mt-2`}
        />
      </p>

      {/* Title */}
      <p className={`${titleClr} font-black text-5xl mt-8 text-center`}>
        {title}
      </p>

      {/* description */}
      <p
        className={`${descClr} text-xl mt-8 text-center w-full md:w-2/3 leading-loose`}
      >
        {desc}
      </p>
    </div>
  );
};

export default PageTitle;
