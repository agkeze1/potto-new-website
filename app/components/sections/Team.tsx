import React from "react";
import PageTitle from "../core/PageTitle";
import PlayButton from "../core/PlayButton";

const Team = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-36 px-5 md:px-16 bg-white bg-no-repeat"
      style={{ backgroundImage: 'url("/img/bg-2.png")' }}
      id="team"
    >
      <PageTitle
        tagLabel="Potto Team"
        title="The Amazing Team behind Potto"
        desc="We are from an experienced background with a proven track record and a vision to help you succeed."
      />
      <div className="w-full mt-16">
        <div className="relative flex items-center justify-center">
          <img src="/img/team.png" alt="team" className="" />
          <div className="absolute">
            <PlayButton secondary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
