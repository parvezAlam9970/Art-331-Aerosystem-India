import React from "react";
import Container from "../custom/Container";
import Heading from "../ReUseComp/Heading";
import { Icons } from "@/constants/icons";
import ButtonWrapper from "../custom/ButtonWrapper";

const OverView = () => {
  return (
    <Container className=" my-5 md:my-10 lg:my-16">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className=" lg:col-span-3 md:pr-10">
          <Heading isPlane={false}>
            <b> Overview </b>
          </Heading>
          <p className="py-4  text-sm md:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type
            And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply
            Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has
            Been The Industry's Standard Dummy Text Ever Since The 1500S, When
            An Unknown Printer Took A Galley Of Type And Scrambled It To Make A
            Type Specimen Book.
          </p>
          <p className="py-4  text-sm md:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type
            And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply
            Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has
            Been The Industry's Standard Dummy Text Ever Since The 1500S, When
            An Unknown Printer Took A Galley Of Type And Scrambled It To Make A
            Type Specimen Book.
          </p>
        </div>
        <div className=" col-span-1 flex flex-col gap-5">
          <div className=" flex gap-4">
            <div className="p-2 md:p-4 bg-[#E3E3E3]  flex justify-center items-center text-center">
              <Icons.PLANE className=" text-[25px] md:text-[28px] text-grey rotate-45" />
            </div>
            <div className=" flex items-center justify-between w-full">
              <span className=" text-[18px] md:text-[21px] font-semibold">
                Product card
              </span>
              <span className=" flex gap-2">
                <Icons.ARROW_RIGHT className="-rotate-45 text-xl text-lgrey" />
              </span>
            </div>
          </div>
          <div className=" flex gap-4">
            <div className="p-2 md:p-4 bg-[#E3E3E3]  flex justify-center items-center text-center">
              <Icons.PDF className=" text-[25px] md:text-[28px] text-grey" />
            </div>
            <div>
              <span className=" text-[18px] md:text-[21px] font-semibold">
                Download brochure
              </span>
              <div className=" flex gap-2">
                <a
                  href="/image/plane2.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-all duration-300 ease-in-out text-lgrey "
                >
                  View
                </a>
                <a
                  href="/image/plane2.jpg"
                  rel="noopener noreferrer"
                  download
                  className="hover:underline transition-all duration-300 ease-in-out text-lgrey flex gap-2 items-center text-center"
                >
                  Download
                  <Icons.DOWNLOAD />
                </a>
              </div>
            </div>
          </div>
          <div className=" flex gap-4">
            <div className="p-2 md:p-4 bg-[#E3E3E3]  flex justify-center items-center text-center">
              <Icons.MAP className=" text-[25px] md:text-[28px] text-grey" />
            </div>
            <div className=" flex items-center justify-between w-full">
              <span className=" text-[18px] md:text-[21px] font-semibold">
                Range Map
              </span>
              <span className=" flex gap-2">
                <Icons.ARROW_RIGHT className="-rotate-45 text-xl text-lgrey" />
              </span>
            </div>
          </div>

          <div className="mt-10">
            <ButtonWrapper className="w-full" isOutline={true} isArrow={true}>
            Services
            </ButtonWrapper>
            <ButtonWrapper className="w-full mt-3" isArrow={true}>
            Enquiry Now
            </ButtonWrapper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OverView;
