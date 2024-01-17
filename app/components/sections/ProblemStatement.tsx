import React from "react";
import PageTitle from "../core/PageTitle";
import ProblemCard from "../core/ProblemCard";
import { FaPersonHarassing } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";
import { FaPersonFalling } from "react-icons/fa6";
import PlayButton from "../core/PlayButton";

const ProblemStatement = () => {
  return (
    <div
      className="relative w-full h-full bg-repeat-y"
      style={{ backgroundImage: 'url("/img/black-bg.png")' }}
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black bg-opacity-90" />
      <div
        id="content"
        className="relative px-5 md:px-16 z-50 py-36 justify-center items-center"
      >
        <div className="mx-5 md:mx-20 lg:mx-36">
          <PageTitle
            tagLabel="Problem Statement"
            title="Over 80% of parents express concerns regarding the safety and academic performance of their child."
            desc="Many administrators have failed to lay a foundation of safety for their schools which has resulted to:"
            titleClr="text-white"
            descClr="text-gray-400"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-16 justify-center">
          <div className="order-2 md:order-1">
            <ProblemCard
              icon={<FaPersonHarassing className="w-14 h-14 text-gray-500" />}
              title="1. Child Theft"
              content="57% of missing persons in Nigeria are children according to the 2020 report by ICRC."
              // height="h-96"
            />
          </div>
          <div className="order-3 md:order-2">
            <ProblemCard
              icon={<TbCalendarTime className="w-14 h-14 text-gray-500" />}
              title="2. Student Truancy"
              content="A student's likelihood of passing a standard exam drops to 35% if he/she misses between 19 to 38 days of school within a year."
              // height="h-96"
            />
          </div>
          <div className="order-4 md:order-3">
            <ProblemCard
              icon={<FaPersonFalling className="w-14 h-14 text-gray-500" />}
              title="3. Exhausting Dismissals"
              content="About 65 minutes or more is expended during students’ pickup and it is characterized by stress, anxiety, and a state of chaos which could make the children vulnerable."
              // height="h-96"
            />
          </div>
          <div className="relative mx-1 order-1 md:order-4">
            <div className="absolute -top-5 -right-5">
              <PlayButton />
            </div>
            <img src="/img/prob-image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
