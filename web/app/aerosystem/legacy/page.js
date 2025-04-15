import AeroAbout from "@/components/aerosystem/legacy/AeroAbout";
import AeroWhyChooseUs from "@/components/aerosystem/legacy/AeroWhyChooseUs";
import Container from "@/components/custom/Container";
import KeepInTouch from "@/components/home/KeepInTouch";
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
          title="From CEO Desk"
          desgination="ceo"
        />
        <div className="my-5 md:my-10 lg:my-28">
          <CeoFounderReuseComp 
          name="Tarun Manilal" 
          title="From Founder Desk"
          desgination="founder" />
        </div>
        <AeroAbout/>
      </Container>
      <AeroWhyChooseUs/>
    </div>
  );
};

export default LegacyPage;
