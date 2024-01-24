import React, { FC } from "react";

type Props = {
  bgColor?: string;
  txtColor?: string;
  btnText: string;
  width?: string; // Tailwind css width
};

const ButtonComp: FC<Props> = ({
  bgColor = "bg-teal-600",
  txtColor = "bg-white",
  btnText,
  width = "w-full",
}) => {
  return (
    <div
      className={`${width} ${bgColor} ${txtColor} font-bold p-3 text-center cursor-pointer hover:bg-neutral-200 rounded-md`}
    >
      {btnText}
    </div>
  );
};

export default ButtonComp;
