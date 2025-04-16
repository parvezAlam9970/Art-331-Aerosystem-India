import ButtonWrapper from "@/components/custom/ButtonWrapper";
import Container from "@/components/custom/Container";
import Heading from "@/components/ReUseComp/Heading";
import { Icons } from "@/constants/icons";
import React from "react";

const DownloadSection = () => {
  return (
    <Container className=" w-full ">
      <div className=" flex flex-col  sm:flex-row  sm:justify-between bg-white p-4 sm:p-7 shadow-lightShadow ">
        <div className=" flex sm:block justify-between md:justify-normal">
          <Heading isPlane={false} className="text-[18px]">
            <b> Cessna Skyhawk </b>
          </Heading>
          <div className=" flex gap-5 md:gap-10 md:mt-2">
            <div className=" flex justify-center items-center gap-2 text-center">
              <Icons.IMG_OUTLINE className=" text-[20px] md:text-[23px]" />
             <span className=" text-sm md:text-base">  IMAGES </span>
            </div>
            <div className=" flex justify-center items-center gap-2 text-center">
              <Icons.PDF className=" text-[20px] md:text-[23px]" />
             <span className=" text-sm md:text-base"> PDF </span>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center mt-3">
          <ButtonWrapper className=" flex justify-between items-center text-center lg:px-4">
            <span> Download All </span>
            <span className=" pl-7">
              {" "}
              <Icons.DOWNLOAD_2 className="text-[22px]" />{" "}
            </span>
          </ButtonWrapper>
        </div>
      </div>
    </Container>
  );
};

export default DownloadSection;
