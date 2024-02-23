"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
  const navToSection = (id: string) => {
    if (!id) return;
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex w-full px-8 items-center justify-between h-24 z-50">
      <Link href="#">
        <Image
          src="svg/logo.svg"
          width={90}
          height={20}
          alt="Logo"
          className="md:hidden"
        />
        <Image
          src="svg/logo.svg"
          width={120}
          height={20}
          alt="Logo"
          className="hidden md:block"
        />
      </Link>
      <div className="">
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
          onClick={() => {
            navToSection("promise");
          }}
        >
          Our Promise
        </button>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600 box-border"
          onClick={() => {
            navToSection("plan");
          }}
        >
          Plan
        </button>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
          onClick={() => {
            navToSection("suite");
          }}
        >
          Suite
        </button>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
          onClick={() => {
            navToSection("faq");
          }}
        >
          FAQ
        </button>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
          onClick={() => {
            navToSection("team");
          }}
        >
          Team
        </button>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
          onClick={() => {
            navToSection("contact");
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default TopNav;
