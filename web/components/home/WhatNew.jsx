import React from "react";
import FeatureProudctSlider from "../ReUseComp/FeatureProudctSlider";
import Heading from "../ReUseComp/Heading";

const WhatNew = () => {
  return (
    <div className="my-5 mb-7  md:my-10 md:mb-28 lg:mb-40 lg:my-16  md:relative">
      <div className="">
        <FeatureProudctSlider className="h-full lg:h-[600px]" />
      </div>
      <div className=" md:absolute md:left-[2%] xl:left-[4.2%] md:bottom-[-15%] z-10  md:w-[82%]">
          <div className=" bg-white shadow-lightShadow">
            <div className="px-3 md:px-10 py-3 md:py-5">
            <Heading>
              Whats <b> new? </b>
            </Heading>
            <Heading isPlane={false} className="">
              Features <b> Aircraft Elevator </b>
            </Heading>
             <p className="text-sm md:text-base">
             Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
             </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default WhatNew;
