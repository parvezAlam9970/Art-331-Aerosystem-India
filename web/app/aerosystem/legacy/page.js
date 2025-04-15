import Container from "@/components/custom/Container";
import WelcomeTo from "@/components/home/WelcomeTo";
import BreadCrumb from "@/components/ReUseComp/BreadCrumb";
import CeoFounderReuseComp from "@/components/ReUseComp/CeoFounderReuseComp";
import React from "react";

const LegacyPage = () => {
  return (
    <div>
      <BreadCrumb title="Company And Legacy" subtitle="Aerosystems" />
      <Container className="my-5 md:my-10 lg:my-16">
        <CeoFounderReuseComp
          isReverse={true}
          name="Tarun Manilal"
          desgination="ceo"
        />
        <div className="my-5 md:my-10 lg:my-16">
          <CeoFounderReuseComp name="Tarun Manilal" desgination="founder" />
        </div>
      </Container>
    </div>
  );
};

export default LegacyPage;
