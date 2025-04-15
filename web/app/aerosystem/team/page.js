import AeroAbout from "@/components/aerosystem/legacy/AeroAbout";
import TeamMemberList from "@/components/aerosystem/team/TeamMemberList";
import Container from "@/components/custom/Container";
import BreadCrumb from "@/components/ReUseComp/BreadCrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCrumb title="Team" subtitle="Aerosystems" />
      <Container>
        <AeroAbout title="Team" subTitle="About The Team" />
        <TeamMemberList/>
      </Container>
    </div>
  );
};

export default page;
