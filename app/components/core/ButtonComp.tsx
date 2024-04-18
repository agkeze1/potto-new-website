import React, { FC } from "react";

type Props = {
  bgColor?: string;
  txtColor?: string;
  btnText: string;
  width?: string; // Tailwind css width
  url?: string;
};

const ButtonComp: FC<Props> = ({
  bgColor = "bg-teal-600",
  txtColor = "bg-white",
  btnText,
  width = "w-full",
  url,
}) => {
  const buttonContent = url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-700"
    >
      {btnText}
    </a>
  ) : (
    btnText
  );

  return (
    <div
      className={`${width} ${bgColor} ${txtColor} font-bold p-3 text-center cursor-pointer hover:bg-neutral-200 rounded-md`}
    >
      {buttonContent}
    </div>
  );
};

export default ButtonComp;
