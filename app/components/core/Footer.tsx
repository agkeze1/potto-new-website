"use client";
import React from "react";
import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import NewsletterInput from "./NewsletterInput";

const Footer = () => {
  return (
    <div className="flex flex-col w-full py-8 px-5 md:px-16 bg-teal-700 ">
      {/* Background image */}
      {/* <Image
        src="/img/bg-map.jpg"
        alt="footer bg"
        width={1074}
        height={1020}
        className="absolute top-0 left-0 right-0 w-full h-full opacity-75"
      /> */}

      {/* Title and Contact Button */}
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <p className="text-2xl font-bold text-white mb-4 md:mb-0">
          Join Potto today
        </p>

        <button
          className="bg-white font-bold text-gray-600 px-6 py-3 rounded-md"
          onClick={() => {
            console.log("Button");
          }}
        >
          Contact Us
        </button>
      </div>

      <hr className="border-t border-gray-400 my-8" />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Company Info */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <Image
            src="svg/logo.svg"
            width={120}
            height={20}
            alt="Logo"
            className="hidden md:block mb-4"
          />
          <p className="text-sm font-light mb-4">
            © 2024 Potto. All rights reserved
          </p>

          {/* Social Links */}
          <div className="flex mb-4">
            <a
              href="https://www.facebook.com/potto.ngr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white h-5 w-5 md:h-6 md:w-6 mr-2" />
            </a>
            <a
              href="https://www.instagram.com/potto.ng?igsh=MWZ6YmR1ZzBwd3Z5eA==https://www.instagram.com/potto.ng?igsh=MWZ6YmR1ZzBwd3Z5eA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-white h-6 w-6 md:h-7 md:w-7 mr-2" />
            </a>
            <a
              href="https://www.linkedin.com/company/potto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-white h-4 w-4 md:h-5 mt-1 md:w-5 mr-2" />
            </a>
            <p className="text-base font-bold">@Potto.ng</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8 md:w-1/3 ">
          <p className="text-base font-bold mb-4">Contact</p>
          <div className="flex mb-4">
            <FiMapPin className="text-white mr-1" />
            <p className="text-sm font-light lg:w-3/5">
              Block 83, Coal city estate, behind Central bank of Nigeria Enugu.
            </p>
          </div>

          <div className="text-sm font-light mb-4">
            <div className="flex my-1">
              <FiMail className="text-white mr-1 mt-1" /> <p>Info@potto.ng</p>
            </div>
            <div className="flex my-1">
              <FiMail className="text-white mr-1 mt-1" />
              <p>support@potto.ng</p>
            </div>
          </div>
          <div className="text-sm font-light">
            <div className="flex my-1">
              <FiPhone className="text-white mr-1 mt-1 " />
              <p>+234 808 472 4276</p>
            </div>
            <div className="flex my-1">
              <FiPhone className="text-white mr-1 mt-1" />
              <p>+234 812 557 8825</p>
            </div>
          </div>
        </div>

        {/* Office Hours and Newsletter */}
        <div className="md:w-1/3">
          <p className="text-base font-bold mb-4">Office Hours</p>

          <div className="text-sm mb-6">
            <div className="flex my-1">
              <FiClock className="text-white mr-1 mt-1" />
              <p>
                <span className="font-bold">Monday - Friday:</span> 8AM - 4PM
              </p>
            </div>
            <div className="flex my-1">
              <p className="ml-5">
                <span className="font-bold">Saturday:</span> 8AM - 12Noon
              </p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-base font-bold">Our News Letter</p>
            <p className="text-sm font-light my-2">
              Subscribe to our Newsletter for updates on Potto
            </p>
            <NewsletterInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
