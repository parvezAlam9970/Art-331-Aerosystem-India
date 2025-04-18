import React from "react";
import FeatureProudctSlider from "../ReUseComp/FeatureProudctSlider";
import Container from "../custom/Container";
import Heading from "../ReUseComp/Heading";
import ButtonWrapper from "../custom/ButtonWrapper";
import Image from "next/image";
import { Images } from "@/constants/images";
import { Icons } from "@/constants/icons";

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
            <Heading isPlane={false}>
              <b>Standard Features</b>
            </Heading>

              <ul className=" mt-5">
                <li className="mb-1 flex gap-2 items-center text-center">
                  <Icons.CIRCLE_CHECK className=" text-green-400" /> GARMIN G1000 Nxi AVIONICS SUITE
                </li>
                <li className="mb-1 flex gap-2 items-center text-center">
                  <Icons.CIRCLE_CHECK className=" text-green-400" /> Single 10.4” GDU 1050 PFD
                </li>
                <li className="mb-1 flex gap-2 items-center text-center">
                  <Icons.CIRCLE_CHECK className=" text-green-400" />  Single 10.4” GDU 1050 MFD 
                </li>
                <li className="mb-1 flex gap-2 items-center text-center">
                  <Icons.CIRCLE_CHECK className=" text-green-400" /> Garmin Flite Charts
                </li>
                <li className="mb-1 flex gap-2 items-center text-center">
                  <Icons.CIRCLE_CHECK className=" text-green-400" /> Garmin Safetaxi GMA 
                </li>
                <li className="mb-1 flex gap-2 items-center text-center">
                  <Icons.CIRCLE_CHECK className=" text-green-400" />  1360 Digital Audio Panel
                </li>
                <li className="mb-1 flex gap-2 items-center text-center">
                  <Icons.CIRCLE_CHECK className=" text-green-400" />  1360 Digital Audio Panel
                </li>
                <li className="mb-1 flex gap-2 items-center text-center">
                  <Icons.CIRCLE_CHECK className=" text-green-400" />   Garmin G5 Standby
                </li>
              </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default StandardFeatures;
