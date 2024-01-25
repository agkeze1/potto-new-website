import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
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
        <Link
          href="/pages/potto-promise"
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
        >
          Our Promise
        </Link>
        <Link
          href="/pages/potto-plan"
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
        >
          Plan
        </Link>
        <Link
          href="/pages/potto-suite"
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
        >
          Suite
        </Link>
        <Link
          href="/pages/faq"
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
        >
          FAQ
        </Link>
        <Link
          href="/pages/team"
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
        >
          Team
        </Link>
        <Link
          href="/pages/contact"
          className="text-sm md:text-lg font-bold text-white mx-4 py-2 hover:border-b-4  hover:border-b-yellow-600"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
