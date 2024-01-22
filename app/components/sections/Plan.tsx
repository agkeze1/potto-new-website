import React from "react";
import PageTitle from "../core/PageTitle";
import PlanCard from "../core/PlanCard";

const Plan = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-36  px-5 md:px-16">
      <PageTitle
        tagLabel="Potto Plan"
        title="Amazing Subscriptions for all Client type"
        desc="Join Potto today by subscribing to one of our amazing plans."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full mt-20">
        <PlanCard
          title="Free"
          desc="Provide parents with real-time information on school bus activities,
            student arrivals, and dismissal processes, geared towards student
            safety through SMS and push notifications."
        />
        <PlanCard
          title="Basic"
          desc="Provide parents with real-time information on school bus activities,
           student arrivals, and dismissal processes, geared towards student safety 
           through SMS and push notifications."
        />
        <PlanCard
          title="Suite"
          desc="Authenticates the identities of guardians responsible for dropping 
          off and picking up a child, and enhances appointment scheduling for proper visitor management"
        />
        <PlanCard
          title="Enterprise"
          desc="Instantly alerts various emergency responders such as parents, the police, 
           fire department, and healthcare facilities, in the event of a school emergency."
        />
      </div>
    </div>
  );
};

export default Plan;
