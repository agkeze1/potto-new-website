import React from "react";
import PageTitle from "../core/PageTitle";
import Image from "next/image";
import GetStartedCard from "../core/GetStartedCard";

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-36 px-5 md:px-16 bg-teal-700">
      <PageTitle
        tagLabel="Get Started"
        title="Get Started With Us Today"
        desc="We will provide guidance and support as you embark on these steps to digitalize your school."
        titleClr="text-white"
        tagLabelClr="white"
        descClr="text-white"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-24">
        <GetStartedCard
          icon={<Image src="/svg/no1.svg" width={100} height={100} alt="" />}
          title="Sign-Up"
          desc="Create an account with us using your email address  and then confirm your account by verifying it through  the email inbox."
        />
        <GetStartedCard
          icon={<Image src="/svg/no2.svg" width={100} height={100} alt="" />}
          title="Configure"
          desc="Customize the Potto application software to match your preferred outlook and align it with your specific operational and structural requirements."
        />
        <GetStartedCard
          icon={<Image src="/svg/no3.svg" width={100} height={100} alt="" />}
          title="Document"
          desc="Input informative details about your staff, students, parents, and guardians, and generate individual passkeys for each user."
        />
      </div>
    </div>
  );
};

export default GetStarted;
