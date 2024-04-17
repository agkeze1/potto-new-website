import { FC, useState } from "react";

interface Props {
  isOpen: boolean;
  navToSection: (param: string) => void;
}
const MobileMenu: FC<Props> = ({ isOpen, navToSection }) => {
  return (
    <div className={`md:hidden ${isOpen ? "flex flex-col" : "hidden"} mt-200`}>
      <div className="flex flex-col">
        <button
          className="text-sm  font-bold text-white py-2"
          onClick={() => navToSection("promise")}
        >
          Our Promise
        </button>
        <button
          className="text-sm  font-bold text-white py-2"
          onClick={() => navToSection("plan")}
        >
          Plan
        </button>
        <button
          className="text-sm  font-bold text-white py-2"
          onClick={() => navToSection("suite")}
        >
          Suite
        </button>
        <button
          className="text-sm  font-bold text-white py-2"
          onClick={() => navToSection("faq")}
        >
          FAQ
        </button>
        <button
          className="text-sm  font-bold text-white py-2"
          onClick={() => navToSection("team")}
        >
          Team
        </button>
        <button
          className="text-sm  font-bold text-white py-2"
          onClick={() => navToSection("contact")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
