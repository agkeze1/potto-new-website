import React from "react";
import ButtonComp from "../core/ButtonComp";
import PlayButton from "../core/PlayButton";

const Banner = () => {
  return (
    <div className="relative w-full min-h-screen -mt-24">
      <div className="flex flex-col relative items-center justify-center w-full min-h-screen bg-teal-600 bg-opacity-75 z-20 ">
        <p className="text-4xl md:text-6xl lg:text-8xl font-bold text-white my-2">
          Secured School
        </p>
        <p className="text-4xl md:text-6xl lg:text-8xl font-bold text-white my-2">
          Communities
        </p>
        <p className="text-sm md:text-xl text-white my-2">
          Our easy-to-use technology assures you of student{" "}
        </p>
        <p className="text-sm md:text-xl text-white my-2">
          {" "}
          safety through effective tracking and monitoring.
        </p>
        <div className="mt-8">
          <ButtonComp
            btnText="Join Us"
            bgColor="bg-white"
            txtColor="text-teal-600"
            width="w-40"
          />
        </div>
        <div className="mt-16">
          <PlayButton secondary />
        </div>
      </div>
      {/* Video container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full bg-red-600">
          <video
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="video/video-ad.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Banner;
