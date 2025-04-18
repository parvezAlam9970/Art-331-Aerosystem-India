import React from "react";
import Container from "../custom/Container";
import Heading from "../ReUseComp/Heading";
import FeatureProudctSlider from "../ReUseComp/FeatureProudctSlider";
import Image from "next/image";
import { Images } from "@/constants/images";
import { Icons } from "@/constants/icons";

const NewFeatureOption = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 my-5  md:my-10 lg:my-16">
      <div className="my-6 lg:relative">
        <div className=" h-full bg-white shadow-lightShadow lg:ml-16 lg:absolute lg:top-0 w-full z-10 ">
          <Container className={"py-10"}>
            <Heading isPlane={false}>
              <b>New Features And Options</b>
            </Heading>

            <ul className=" mt-5">
              <li className="mb-1 flex gap-2 items-center text-center">
                <Icons.CIRCLE_CHECK className=" text-green-400" /> COM Frequency
                Decoding
              </li>
              <li className="mb-1 flex gap-2 items-center text-center">
                <Icons.CIRCLE_CHECK className=" text-green-400" /> Vertical
                Situation Display
              </li>
              <li className="mb-1 flex gap-2 items-center text-center">
                <Icons.CIRCLE_CHECK className=" text-green-400" /> Selectable
                Visual Approaches
              </li>
              <li className="mb-1 flex gap-2 items-center text-center">
                <Icons.CIRCLE_CHECK className=" text-green-400" /> Optional
                Surface Watch For Runway Safety
              </li>
              <li className="mb-1 flex gap-2 items-center text-center">
                <Icons.CIRCLE_CHECK className=" text-green-400" /> Enhanced
                Graphics And Faster Processing
              </li>
              <li className="mb-1 flex gap-2 items-center text-center">
                <Icons.CIRCLE_CHECK className=" text-green-400" /> Improved
                Joystick With Smoother Panning
              </li>
              <li className="mb-1 flex gap-2 items-center text-center">
                <Icons.CIRCLE_CHECK className=" text-green-400" /> Simplified
                Maintenance
              </li>
            </ul>
          </Container>
        </div>
      </div>
      <div>
        <div className=" order-2 lg:order-1 col-span-3 lg:h-[500px]">
          <Image
            src={Images.TESTING_IMG}
            width={1000}
            height={1000}
            className=" w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NewFeatureOption;
