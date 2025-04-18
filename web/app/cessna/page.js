import OverView from "@/components/cessna/OverView";
import StandardFeatures from "@/components/cessna/StandardFeatures";
import Container from "@/components/custom/Container";
import Heading from "@/components/ReUseComp/Heading";
import SwiperThumbSlider from "@/components/ReUseComp/SwiperThumbSlider";
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
      <StandardFeatures/>
    </div>
  );
};

export default CessnaPage;
