import React, { FC, useEffect, useState } from "react";
import PromiseLabel from "./PromiseLabel";

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

type Props = {
  imagePos: "left" | "right";
  imgPath: string;
  title: string;
  label1: string;
  label2: string;
  label3: string;
  desc: string;
  bgColor?: string;
};

const SinglePromise: FC<Props> = ({
  imagePos,
  imgPath,
  title,
  label1,
  label2,
  label3,
  desc,
  bgColor = "bg-gray-100",
}) => {
  const [imgPos, setImgPos] = useState<typeof imagePos>("left");

  useEffect(() => {
    setImgPos(imagePos);
  }, [imagePos]);

  return (
    <div
      className={`grid grid-cols-1 gap-0 lg:grid-cols-2 w-full bg-no-repeat py-32 bg-opacity-40 ${
        imgPos === "left" ? "bg-left-top" : "bg-right-top"
      } ${bgColor}`}
      style={{
        backgroundImage:
          imgPos === "left" ? 'url("/img/bg-2.png")' : 'url("/img/bg-3.png")',
      }}
    >
      {/* Image */}
      <div
        className={`flex w-full px-10 justify-center ${
          imgPos === "left"
            ? "lg:order-1 lg:justify-end"
            : "lg:order-2 lg:justify-start"
        }`}
      >
        <div>
          <img src={imgPath} alt="" className="" />
        </div>
      </div>

      {/* Text content */}
      <div
        className={`flex h-80 w-full px-10 ${
          imgPos === "left" ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="w-full">
          <h1
            className={`text-yellow-600 font-black text-3xl mb-8 ${
              imgPos === "left" ? "text-start" : "text-end"
            }`}
          >
            {title}
          </h1>
          <div
            className={`w-full flex flex-col ${
              imgPos === "left" ? "items-start" : "items-end"
            }`}
          >
            <PromiseLabel
              imgPath="/img/1.png"
              label={label1}
              width="w-3/6"
              spaced={imgPos === "left" ? false : true}
            />
            <PromiseLabel
              imgPath="/img/2.png"
              label={label2}
              width="w-4/6"
              spaced={imgPos === "left" ? false : true}
            />
            <PromiseLabel
              imgPath="/img/3.png"
              label={label3}
              width="w-4/5"
              spaced={imgPos === "left" ? false : true}
            />
            <p
              className={`text-gray-500 text-xl leading-loose mt-8 w-full ${
                imgPos === "left" ? "text-start" : "text-end"
              }`}
            >
              {desc}
            </p>
            <div
              className={`flex w-full mt-24 ${
                imgPos === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className="flex bg-yellow-600 bg-opacity-20 items-center justify-center px-16 py-3"
                style={{ backgroundImage: 'url("/img/join-comm-bg-sm.png")' }}
              >
                <p className="mr-8 text-yellow-600 font-bold text-xl">
                  Join Our Community
                </p>
                <FaFacebook className="text-yellow-600 h-5 w-5 md:h-6 md:w-6 mr-4" />
                <AiFillInstagram className="text-yellow-600  h-6 w-6 md:h-7 md:w-7 mr-4" />
                <BsLinkedin className="text-yellow-600 h-4 w-4 md:h-5 md:w-5 mr-4" />
                <FaTiktok className="text-yellow-600 h-5 w-5 md:h-5 md:w-5 mr-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePromise;
