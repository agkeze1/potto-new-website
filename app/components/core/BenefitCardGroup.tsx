import React from "react";
import BenefitCard from "./BenefitCard";
import { BiSolidGraduation } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";

const BenefitCardGroup = () => {
  return (
    <div className="w-full md:grid lg:grid-cols-3 gap-10">
      <BenefitCard
        icon={<BiSolidGraduation className="w-16 h-16 text-cyan-800" />}
        title="Safeguard Students"
        content="Utilising Potto's guardian verification system, digital visitor
        management, comprehensive student tracking or school entry and exit, and
        electronic manifest for bus monitoring, you can effortlessly keep tabs
        on each student from the convenience of your location, no matter when or
        where."
      />
      <BenefitCard
        icon={<FaPeopleGroup className="w-16 h-16 text-red-400" />}
        title="Streamline Operations"
        content="Streamline your school dismissal procedures, centralize attendance tracking, and establish a unified, real-time, hassle-free system to monitor and report late arrivals, early dismissals, bus alterations, playdates, and other aspects. This efficient approach is sure to earn the appreciation of both your parents and staff."
      />
      <BenefitCard
        icon={<HiMiniChatBubbleLeftRight className="w-16 h-16 text-teal-700" />}
        title="Simplify Communication"
        content="Improve administrative workload by 15% by enabling parents to inform the school about their child's arrival for pickup, request dismissal changes, and receive notifications regarding tardiness and child truancy through the Potto App and SMS."
      />
    </div>
  );
};

export default BenefitCardGroup;
