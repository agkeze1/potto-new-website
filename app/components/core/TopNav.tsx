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
      <Link href="/contact" className="text-sm md:text-lg font-bold text-white">
        Contact Us
      </Link>
    </div>
  );
};

export default TopNav;
