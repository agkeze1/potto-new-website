"use client";
import React from "react";
import PageTitle from "../core/PageTitle";
import FunctionText from "../core/FunctionText";
import FeatureText from "../core/FeatureText";
import SuiteCard, { suiteProps } from "../core/SuiteCard";
import suites from "../../data/suites.json";

const Suite = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-36 px-5 md:px-16 bg-teal-700 bg-no-repeat">
      <PageTitle
        tagLabel="Potto Suite"
        title="Potto Key Product"
        desc="Potto brings to you a lot of awesome solution which quickly optimizes the productivity of teachers and students in your school"
        tagLabelClr="white"
        titleClr="text-white"
        descClr="text-white"
      />
      <div className="w-full mt-16 lg:flex justify-center">
        <div className="w-full lg:w-1/3 lg:pr-6">
          <div
            className="bg-yellow-600 px-10 py-24 flex flex-col justify-center items-center w-full"
            style={{ backgroundImage: 'url("/img/bg-suite.png")' }}
          >
            <div className="w-28 h-28 rounded-full bg-white mb-8" />
            <p className="text-5xl text-white font-black">Potto</p>
            <p className="text-5xl text-white font-black mt-2">Secure</p>
            <p className="text-md text-white mt-4">Student Safety Management</p>
          </div>
        </div>
        <div className="w-full mt-12 lg:mt-0 lg:w-2/3 pl-6">
          <h1 className="font-black text-2xl text-white">Key Function</h1>
          <div className="flex flex-wrap">
            <FunctionText
              text="Monitor, track, and alerts parents and school on student
                movement"
            />
            <FunctionText text="Send panic alerts to all parents in case of any distress" />
            <FunctionText text="Eliminates impersonation or child theft through proper guardian validation" />
            <FunctionText text="Quick response to threats in cases of emergency" />
          </div>
          <div className="mt-8">
            <h1 className="font-black text-2xl text-white mb-4">Features</h1>
            <div className="flex flex-wrap">
              <FeatureText text="Gate Pass" />
              <FeatureText text="Students Tracking" />
              <FeatureText text="Bus attendance" />
              <FeatureText text="Classroom attendance" />
              <FeatureText text="Dynamic attendance" />
              <FeatureText text="Visitor management" />
              <FeatureText text="Android and iOS" />
              <FeatureText text="Instant messaging" />
              <FeatureText text="Panic alert System" />
              <FeatureText text="panic responders" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <PageTitle
          tagLabel=""
          title="Potto Auxiliary Services"
          desc="Potto brings to you a lot of awesome solution which quickly optimizes the productivity of teachers and students in your school"
          tagLabelClr="white"
          titleClr="text-white"
          descClr="text-white"
        />
      </div>
      <div className="lg:flex lg:flex-wrap w-full mt-20">
        {suites?.map((suite: suiteProps, idx: number) => (
          <SuiteCard suiteObj={suite} key={idx} />
        ))}
        <div className="w-full lg:w-1/3 p-3">
          <div
            className="w-full h-full bg-white p-10 flex flex-col items-center"
            style={{ backgroundImage: 'url("/img/bg-suite.png")' }}
          >
            <div className="w-28 h-28 rounded-full bg-yellow-600 bg-opacity-25" />
            <h1 className="font-black text-2xl text-teal-700 mt-8">
              Potto Comm
            </h1>
            <p className="text-sm text-gray-600 text-center mt-8 leading-loose">
              Sends, tracks in real-time, and stores predefined and customized
              bulk sms to parents and teachers at just a click of the button
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suite;
