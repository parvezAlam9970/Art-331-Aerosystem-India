import SideButton from "@/components/custom/SideButton";
import Associations from "@/components/home/Associations";
import Beechcraft from "@/components/home/Beechcraft";
import FeaturedAircraft from "@/components/home/FeaturedAircraft";
import HomeBannerSLider from "@/components/home/HomeBannerSLider";
import KeepInTouch from "@/components/home/KeepInTouch";
import OwnershipGuide from "@/components/home/OwnershipGuide";
import WelcomeTo from "@/components/home/WelcomeTo";
import WhatNew from "@/components/home/WhatNew";

export default function Home() {
  return (
    <>
    <HomeBannerSLider/>
    <WelcomeTo/>
    <FeaturedAircraft/>
    <Beechcraft/>
    <WhatNew/>
    <OwnershipGuide/>
    <Associations/>
    </>
  );
}
