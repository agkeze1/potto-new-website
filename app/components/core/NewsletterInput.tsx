"use client";
import React from "react";

const NewsletterInput = () => {
  return (
    <div className="flex">
      <input
        placeholder="Email address"
        type="text"
        className="w-3/5 px-4  py-2 border  focus:outline-none focus:border-b-yellow-600"
      />
      <button
        className="bg-yellow-600 text-xs  text-white font-light px-9 py-3 "
        onClick={() => {
          console.log("Button");
        }}
      >
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterInput;
