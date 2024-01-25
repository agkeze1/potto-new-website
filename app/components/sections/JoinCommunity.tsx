import React from "react";
import PlayButton from "../core/PlayButton";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const JoinCommunity = () => {
  return (
    <div className="flex-col md:flex-row md:flex bg-teal-700 w-full items-center">
      <div
        className="w-ful md:w-1/3 justify-center bg-repeat-x h-full items-center py-20"
        style={{ backgroundImage: 'url("/img/comm.png")' }}
      >
        <PlayButton secondary />
      </div>
      <div className="flex flex-col w-full md:w-2/3 items-center py-10 md:py-0">
        <h1 className="font-black text-3xl md:text-4xl text-white text-center">
          Join Our Community
        </h1>
        <div className="flex mt-2 md:mt-6 items-center">
          <FaFacebook className="text-white h-5 w-5 md:h-7 md:w-7 mr-4" />
          <AiFillInstagram className="text-white  h-6 w-6 md:h-8 md:w-8 mr-4" />
          <BsLinkedin className="text-white h-4 w-4 md:h-6 md:w-6 mr-4" />
          {/* <FaTiktok className="text-white h-5 w-5 md:h-6 md:w-6 mr-4" /> */}
          <p className="font-xl text-white font-bold">@potto.ng</p>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
