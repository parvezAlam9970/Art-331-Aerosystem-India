import Beechcraft from "@/components/home/Beechcraft";
import FeaturedAircraft from "@/components/home/FeaturedAircraft";
import HomeBannerSLider from "@/components/home/HomeBannerSLider";
import WelcomeTo from "@/components/home/WelcomeTo";

export default function Home() {
  return (
    <>
    <HomeBannerSLider/>
    <WelcomeTo/>
    <FeaturedAircraft/>
    <Beechcraft/>
    </>
  );
}
