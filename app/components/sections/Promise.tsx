"use client";
import React from "react";
import PageTitle from "../core/PageTitle";
import SinglePromise from "../core/SinglePromise";

const Promise = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-36">
      <div className="w-full px-5 md:px-16">
        <PageTitle
          tagLabel="Potto Promise"
          title="We are Committed to Your Success"
          desc="Potto Promise = High Performance!"
        />
      </div>
      {/* Promise to Parents */}
      <SinglePromise
        imagePos="left"
        imgPath="/img/promise-1.png"
        title="Promise to Parents"
        label1="Child Safety"
        label2="Easy Pickup"
        label3="Easier and faster Communication"
        desc="Our commitment to parents includes ensuring the safety of your
              child, streamlining the pickup process for your convenience, and
              facilitating smoother and faster communication within the school
              community."
      />

      {/* Promise to School */}
      <SinglePromise
        bgColor="bg-teal-100"
        imagePos="right"
        imgPath="/img/promise-2.png"
        title="Promise to School"
        label1="Efficient Administration"
        label2="Increased Productivity"
        label3="Easy Monitoring"
        desc="We pledge to the school administration, our dedication to efficient
        administration, enhanced productivity, simplified monitoring processes,
         and maintaining a safe and secure school environment."
      />

      {/* Promise to Teachers */}
      <SinglePromise
        imagePos="left"
        imgPath="/img/promise-3.png"
        title="Promise to Teachers"
        label1="Better Output"
        label2="Improved Engagement"
        label3="Stress-free Dismissal"
        desc="We assure our staff of better output, enhanced engagement, and a 
        stress-free dismissal process, supporting you in creating a more effective 
        and satisfying teaching experience."
      />
    </div>
  );
};

export default Promise;
