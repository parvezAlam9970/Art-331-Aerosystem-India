import React from "react";
import CustomModalWrapper from "../CustomModalWrapper";
import Image from "next/image";
import { Images } from "@/constants/images";
import ButtonWrapper from "../ButtonWrapper";
import { Icons } from "@/constants/icons";

const GalleryImgViewModal = ({ type }) => {
  return (
    <CustomModalWrapper
      type={type}
      className=" max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-2 md:p-4 "
    >
      <div>
        <Image
          src={Images.TESTING_IMG}
          width={1000}
          height={1000}
          className=" w-full h-full "
        />
      </div>
      <div className=" flex justify-between items-center ">
        <div>
          <p className=" text-sm text">CESSNA</p>
          <h3 className=" text-xl  font-bold">Skyhawk Flight</h3>
        </div>
        <div>
          <ButtonWrapper className=" flex justify-between items-center text-center lg:px-4 py-2 md:py-2">
            <spanc className=" text-sm md:text-base hidden sm:block"> Download All </spanc>
            <span className=" sm:pl-5">
              {" "}
              <Icons.DOWNLOAD_2 className="text-[20px]" />{" "}
            </span>
          </ButtonWrapper>
        </div>
      </div>
    </CustomModalWrapper>
  );
};

export default GalleryImgViewModal;
