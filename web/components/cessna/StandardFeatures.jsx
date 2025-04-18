import React from "react";
import FeatureProudctSlider from "../ReUseComp/FeatureProudctSlider";
import Container from "../custom/Container";
import Heading from "../ReUseComp/Heading";
import ButtonWrapper from "../custom/ButtonWrapper";
import Image from "next/image";
import { Images } from "@/constants/images";

const StandardFeatures = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-5 my-5  md:my-10 lg:my-20">
    <div className=" order-2 lg:order-1 col-span-3">
      <Image
       src={Images.TESTING_IMG}
       width={1000}
       height={1000}
       className=" w-full h-full"
      />
    </div>
    <div className="my-6 lg:relative order-1 lg:order-2 col-span-2">
      <div className=" h-full bg-white shadow-lightShadow lg:-ml-14  lg:absolute lg:top-0 w-full z-10 ">
        <Container className={"py-10"}>
          <Heading isPlane={true}>
            <b>Standard Features</b>
          </Heading>
          
          <p className=" text-sm md:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500S, When An Unknown Printer Took A Galley Of
            Type And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is
            Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
            Ipsum Has Been The Industry's Standard Dummy Text Ever Since The
            1500S, When An Unknown Printer Took A Galley Of Type And Scrambled
            It To Make A Type Specimen Book.
          </p>
          <div className="mt-5">
            <ButtonWrapper isOutline={true} isArrow={true}>
              Read More
            </ButtonWrapper>
          </div>
        </Container>
      </div>
    </div>
  </div>
  );
};

export default StandardFeatures;
