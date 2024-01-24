import React from "react";
import PageTitle from "../core/PageTitle";
import BenefitCardGroup from "../core/BenefitCardGroup";

const Benefits = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-repeat-y"
      style={{ backgroundImage: 'url("/img/benefit-bg.png")' }}
    >
      <div className="flex flex-col items-center justify-center w-full px-5 my-36">
        <PageTitle
          tagLabel="Potto Benefits"
          title="Amazing Benefits for Everyone"
          desc="Potto is a security management solution designed to ensure the safety of students against varying security threats from early detection to quick response, using leading-edge technologies."
        />
        <div className="flex flex-col items-center w-full">
          <img src="/img/image1.png" alt="Products" className="mt-16" />
        </div>
        <div className="w-full mt-28 md:px-16">
          <BenefitCardGroup />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
