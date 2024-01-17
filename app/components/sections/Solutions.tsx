import React from "react";
import PageTitle from "../core/PageTitle";
import SolutionCard from "../core/SolutionCard";
import { AiFillSecurityScan } from "react-icons/ai";
import { RiPassValidFill } from "react-icons/ri";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoAlarmSharp, IoLogoWechat } from "react-icons/io5";
import { PiIdentificationBadgeFill } from "react-icons/pi";

const Solutions = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-36 px-5 md:px-16">
      <PageTitle
        tagLabel="Potto Solutions"
        title="One Platform that handles your Students’ Safety Challenges"
        desc="A technological ecosystem to efficiently keep your students secured"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:px-32 mt-24">
        <SolutionCard
          icon={<AiFillSecurityScan className="w-16 h-16 text-teal-800" />}
          title="Mobility Management"
          desc="Provide parents with real-time information on school bus activities,
          student arrivals, and dismissal processes, geared towards student
          safety through SMS and push notifications."
        />
        <SolutionCard
          icon={<RiPassValidFill className="w-16 h-16 text-teal-800" />}
          title="Guardian and Visitor Validation"
          desc="Authenticates the identities of guardians responsible for dropping off and picking up a 
          child, and enhances appointment scheduling for proper visitor management"
        />
        <SolutionCard
          icon={
            <BiSolidMessageRoundedDots className="w-16 h-16 text-teal-800" />
          }
          title="Emergency Management"
          desc="Instantly alerts various emergency responders such as parents, the police,
           fire department, and healthcare facilities, in the event of a school emergency."
        />
        <SolutionCard
          icon={<IoAlarmSharp className="w-16 h-16 text-teal-800" />}
          title="Truancy Control"
          desc="Monitors the attendance of students  and staff according to their timetables,
           keeping a record of their presence or absence in each subject/class, and  assessing their overall punctuality to  school."
        />
        <SolutionCard
          icon={
            <PiIdentificationBadgeFill className="w-16 h-16 text-teal-800" />
          }
          title="Smart ID Cards"
          desc="Create Radio Frequency Identification (RFID) cards and Quick Response (QR) codes instantly for every enrolled student and staff."
        />
        <SolutionCard
          icon={<IoLogoWechat className="w-16 h-16 text-teal-800" />}
          title="Communication Management"
          desc="Offers a hybrid system of communication that allows schools to utilize a blend of bulk and individual short message service
           (SMS), push notifications, and in-app messaging to ensure effective communication with all stakeholders."
        />
      </div>
    </div>
  );
};

export default Solutions;
