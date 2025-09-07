"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const TopNav = () => {
  const navToSection = (id: string) => {
    if (!id) return;
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full px-8 items-center justify-between h-24 z-50">
      {/* Logo */}
      <Link href="#">
        <Image
          src="svg/logo.svg"
          width={120}
          height={20}
          alt="Logo"
          className="md:block"
        />
      </Link>

      {/* Hamburger Icon (shown on mobile) */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Menu Items (shown on desktop) */}
      <div className={`hidden md:flex ${isOpen ? "flex-col" : "hidden"}`}>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4 hover:border-b-yellow-600"
          onClick={() => navToSection("promise")}
        >
          Our Promise
        </button>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4 hover:border-b-yellow-600 box-border"
          onClick={() => navToSection("plan")}
        >
          Plan
        </button>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4 hover:border-b-yellow-600"
          onClick={() => navToSection("suite")}
        >
          Suite
        </button>
        {/* <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4 hover:border-b-yellow-600"
          onClick={() => navToSection("faq")}
        >
          FAQ
        </button> */}
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4 hover:border-b-yellow-600"
          onClick={() => navToSection("team")}
        >
          Team
        </button>
        <button
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4 hover:border-b-yellow-600"
          onClick={() => navToSection("contact")}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="bg-teal-700 rounded-md w-80 absolute py-5"
          style={{ marginTop: "330px" }}
        >
          <MobileMenu isOpen={isOpen} navToSection={navToSection} />
        </div>
      )}
    </div>
  );
};

export default TopNav;
