import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div
        className="flex flex-col justify-center items-center"
        style={{ width: "207.63px", marginLeft: "2px" }}
      >
        {/* Front */}
        <div
          className=" w-full p-2 flex flex-col items-center bg-contain"
          style={{
            height: "334.1px",
            backgroundImage: 'url("/img/nnoli-front.png")',
          }}
        ></div>

        {/* Back */}
        <div
          className=" w-full flex flex-col justify-between items-center px-2 py-5 bg-contain"
          style={{
            height: "334.1px",
            backgroundImage: 'url("/img/nnoli-back.png")',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
