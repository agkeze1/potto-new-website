import React from "react";
import PageTitle from "../core/PageTitle";
import PlayButton from "../core/PlayButton";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Testimonials = () => {
  return (
    <div
      className="relative w-full h-full bg-repeat-y"
      style={{ backgroundImage: 'url("/img/black-bg.png")' }}
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-yellow-500 bg-opacity-80" />
      <div className="relative px-5 md:px-16 z-10 py-36">
        <PageTitle
          tagLabel="Testimonials"
          title="Listen to what Our Clients Say"
          desc="Our clients are not only satisfied, with Potto they are exceeding parents expectations."
          tagLabelClr="white"
          titleClr="text-white"
          descClr="text-white"
        />
        <div className="flex flex-col lg:flex-row justify-center mt-16">
          {/* Testimonial card */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1 relative lg:items-center lg:flex lg:justify-center">
            {/* Left navigator */}
            <div className="hidden lg:block absolute left-0 w-1/4 h-96 z-10 py-4">
              <div className="relative w-full h-full">
                {/* Shadow card 1 */}
                <div
                  className="absolute h-full bg-yellow-400 top-8 left-8 bg-opacity-30 shadow-sm z-10"
                  style={{ width: "90%" }}
                />
                {/* Shadow card 2 */}
                <div
                  className="absolute h-full bg-yellow-400 top-4 left-4 bg-opacity-40 shadow-sm z-10"
                  style={{ width: "95%" }}
                />
                <div className="absolute bg-yellow-400 w-full h-full z-20 shadow-sm flex items-center">
                  <div className="flex items-center justify-center rounded-full bg-gray-200 hover:bg-white w-14 h-14 ml-16 cursor-pointer">
                    <FiChevronLeft className="w-8 h-8 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial content */}
            <div className="lg:absolute w-full lg:w-3/4 h-96 z-20 lg:px-20">
              <div className="relative w-full h-full flex justify-center">
                {/* Shadow card 1 */}
                <div
                  className="absolute h-full bg-white top-8 bg-opacity-30 shadow-sm"
                  style={{ width: "90%" }}
                />
                {/* Shadow card 2 */}
                <div
                  className="absolute h-full bg-white top-4 bg-opacity-40 shadow-sm"
                  style={{ width: "95%" }}
                />
                {/* Main content section */}
                <div
                  className="absolute w-full h-full bg-white p-8"
                  style={{
                    boxShadow:
                      "60px 0 30px rgba(0, 0, 0, 0.1), -60px 0 30px rgba(0, 0, 0, 0.1)",
                    backgroundImage: 'url("/img/bg-testimonial-card.png")',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex justify-center">
                    <img src="/img/quote.png" alt="" className="my-4" />
                  </div>
                  <p className="text-gray-500 leading-relaxed text-center">
                    Honestly Potto has brought me peace of mind regarding the
                    operations and safety of my student. This solution is
                    a-must-have for every school owner.
                  </p>
                  <h1 className="text-teal-700 font-bold text-center mt-8 text-lg">
                    Eze Ejike
                  </h1>
                  <p className="text-gray-400 leading-relaxed text-center">
                    Principal, Potto Secondary School.
                  </p>
                </div>
              </div>
            </div>

            {/* Right navigator */}
            <div className="hidden lg:block absolute right-0 w-1/4 h-96 z-10 py-4">
              <div className="relative w-full h-full">
                {/* Shadow card 1 */}
                <div
                  className="absolute h-full bg-yellow-400 top-8 right-8 bg-opacity-30 shadow-sm z-10"
                  style={{ width: "90%" }}
                />
                {/* Shadow card 2 */}
                <div
                  className="absolute h-full bg-yellow-400 top-4 right-4 bg-opacity-40 shadow-sm z-10"
                  style={{ width: "95%" }}
                />
                <div className="absolute bg-yellow-400 w-full h-full z-20 shadow-sm flex items-center">
                  <div className="flex items-center justify-center rounded-full bg-gray-200 hover:bg-white w-14 h-14 ml-24 cursor-pointer">
                    <FiChevronRight className="w-8 h-8 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
            {/* Dots */}
            <div className="flex w-full items-center justify-center lg:hidden mt-14">
              <div className="w-3 h-3 rounded-full bg-gray-300 mx-1" />
              <div className="w-4 h-4 rounded-full bg-white mx-1" />
              <div className="w-3 h-3 rounded-full bg-gray-300 mx-1" />
              <div className="w-3 h-3 rounded-full bg-gray-300 mx-1" />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/3 order-1 lg:order-2 flex items-center justify-center lg:ml-8">
            <div className="absolute">
              <PlayButton secondary />
            </div>
            <img
              src="/img/testimonial.png"
              alt="quote-icon"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
