import React, { FC, useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

type AccordionItem = {
  title: string;
  content: string;
};

type Props = {
  items: AccordionItem[];
};

const Accordion: FC<Props> = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number>();

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 lg:px-2">
        {items.slice(0, items.length / 2).map((item, idx: number) => (
          <div
            className="w-full h-fit shadow-lg bg-white mb-4"
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
            }}
          >
            {/* Header */}
            <div className="flex items-center px-8 py-6 cursor-pointer">
              <FaCircleChevronDown className="w-5 h-5 text-gray-500" />
              <h1
                className={`font-bold text-lg ml-6 ${
                  idx === activeIndex ? "text-teal-700" : "text-gray-500"
                }`}
              >
                {item.title}
              </h1>
            </div>

            <p
              className={`text-sm text-gray-500 px-8 pt-4 pb-12 leading-loose ${
                idx === activeIndex ? "block" : "hidden"
              }`}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/2 lg:px-2">
        {items.slice(items.length / 2).map((item, idx: number) => (
          <div
            className="w-full shadow-lg bg-white mb-4"
            key={idx}
            onClick={() => {
              setActiveIndex(idx + items.length / 2);
            }}
          >
            {/* Header */}
            <div className="flex items-center px-8 py-6 cursor-pointer">
              <FaCircleChevronDown className="w-5 h-5 text-gray-500" />
              <h1
                className={`font-bold text-lg ml-6 ${
                  idx + items.length / 2 === activeIndex
                    ? "text-teal-700"
                    : "text-gray-500"
                }`}
              >
                {item.title}
              </h1>
            </div>

            <p
              className={`text-sm text-gray-500 px-8 pt-4 pb-12 leading-loose ${
                idx + items.length / 2 === activeIndex ? "block" : "hidden"
              }`}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
