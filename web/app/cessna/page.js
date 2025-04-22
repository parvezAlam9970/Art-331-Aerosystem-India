import CessnaGallery from "@/components/cessna/CessnaGallery";
import NewFeatureOption from "@/components/cessna/NewFeatureOption";
import OverView from "@/components/cessna/OverView";
import StandardFeatures from "@/components/cessna/StandardFeatures";
import Container from "@/components/custom/Container";
import EnquiryModal from "@/components/custom/modal/EnquiryModal";
import GalleryImgViewModal from "@/components/custom/modal/GalleryImgViewModal";
import RangeMapModal from "@/components/custom/modal/RangeMapModal";
import Heading from "@/components/ReUseComp/Heading";
import SpecificationList from "@/components/ReUseComp/SpecificationList";
import SwiperThumbSlider from "@/components/ReUseComp/SwiperThumbSlider";
import { specificaionData } from "@/constants/data";
import { Images } from "@/constants/images";
import Image from "next/image";
import React from "react";

const CessnaPage = () => {
  return (
    <div>
      <div className=" w-full h-[250px] lg:h-[600px] ">
        <Image
          src={Images.TESTING_IMG}
          width={1000}
          height={1000}
          className=" w-full h-full"
        />
      </div>
      <OverView />
      <div className="my-10">
        <Container className="mb-5">
          <Heading isPlane={false}>Lorem Ipsum Title</Heading>
          <p className=" text-sm md:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry.
          </p>
        </Container>
        <SwiperThumbSlider />
      </div>
      <div className="my-10">
        <Container className="mb-5">
          <Heading isPlane={false}>Lorem Ipsum Title</Heading>
          <p className=" text-sm md:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry.
          </p>
        </Container>
        <SwiperThumbSlider />
      </div>
      <div className="my-10">
        <Container className="mb-5">
          <Heading isPlane={false}>Lorem Ipsum Title</Heading>
          <p className=" text-sm md:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry.
          </p>
        </Container>
        <SwiperThumbSlider />
      </div>
      <StandardFeatures />
      <div className=" w-full h-[250px] lg:h-[600px] my-5 md:my-10 lg:my-16 ">
        <Image
          src={Images.TESTING_IMG}
          width={1000}
          height={1000}
          className=" w-full h-full"
        />
      </div>
      <Container className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
        <div>
          <SpecificationList
            title="DIMENSIONS"
            data={specificaionData.dimensionData}
          />
          <SpecificationList
            title="BAGGAGE CAPACITY"
            data={specificaionData.baggageCapacityData}
          />
        </div>
        <div>
          <SpecificationList
            title="WEIGHTS"
            data={specificaionData.weightFuelData}
          />
        </div>
        <div>
          <SpecificationList
            title="PERFORMANCE"
            data={specificaionData.performanceData}
          />
        </div>
        <div>
          <SpecificationList
            title="CABIN INTERIOR"
            data={specificaionData.cabinInteriorData}
          />
        </div>
        <div>
          <SpecificationList
            title="POWERPLANT"
            data={specificaionData.powerplantData}
          />
        </div>
      </Container>
      <Container className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-5 md:my-10 lg:my-16 ">
        <div>
          <p className=" text-sm pb-3 md:text-base">The Cessna Skyhawk Is The Ultimate Training Aircraft And The Most Popular Single-Engine Aircraft Ever Built. With Forgiving Flight Characteristics, Great Visibility, A Sophisticated Glass Cockpit Outfitted With G1000 Avionics, Slow Landing Speed And A Forgiving Stall – The Cessna Skyhawk Is A Flight Training Favorite Ideally Suited For Student Pilots.</p>
          <p className=" text-sm pb-3 md:text-base"> It’s A Culmination Of Design That Make The Skyhawk The World’s Leading Trainer, Including Rugged Durability, Careful Student-Focused Design, And Forgiving Flying Characteristics. This Superior Platform Is Ideally Suited To Learn The Skills Needed To Become A True Pilot In Command.</p>
        </div>
        <div>
        <p className=" text-sm pb-3 md:text-base">The Cessna Skyhawk Is The Ultimate Training Aircraft And The Most Popular Single-Engine Aircraft Ever Built. With Forgiving Flight Characteristics, Great Visibility, A Sophisticated Glass Cockpit Outfitted With G1000 Avionics, Slow Landing Speed And A Forgiving Stall – The Cessna Skyhawk Is A Flight Training Favorite Ideally Suited For Student Pilots.</p>
        <p className=" text-sm pb-3 md:text-base"> It’s A Culmination Of Design That Make The Skyhawk The World’s Leading Trainer, Including Rugged Durability, Careful Student-Focused Design, And Forgiving Flying Characteristics. This Superior Platform Is Ideally Suited To Learn The Skills Needed To Become A True Pilot In Command.</p>
        </div>
      </Container>
      <NewFeatureOption/>
      <CessnaGallery/>


    {/* M   o d a l s */}
    <GalleryImgViewModal type={"IMG_VIEW"} /> 
    <EnquiryModal type={"EQUIRY_MODAL"} />
    <RangeMapModal type={"RANGE_MAP_MODAL"} />
      
    </div>
  );
};

export default CessnaPage;
