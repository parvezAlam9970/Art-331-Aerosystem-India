import Heading from "@/components/ReUseComp/Heading";
import TeamMemberCards from "@/components/ReUseComp/TeamMemberCards";
import React from "react";

const TeamMemberList = () => {
  return (
    <div className=" my-5 md:my-10 lg:my-16">
      <div>
        <Heading isPlane={false}>
          <b> Our Team Members </b>
        </Heading>
      </div>

      <div className="mt-5 grid sm:grid-cols-2  mdP:grid-cols-3 xl:grid-cols-4    gap-y-16    xl:gap-y-12  gap-x-5">
        {
            Array(9).fill().map((_,indx)=> (
                <TeamMemberCards  key={indx}  />
            ))
        }
      </div>
    </div>
  );
};

export default TeamMemberList;
