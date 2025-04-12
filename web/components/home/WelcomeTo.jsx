import { Icons } from "@/constants/icons";
import React from "react";
import Heading from "../ReUseComp/Heading";
import { GoHorizontalRule } from "react-icons/go";
import ButtonWrapper from "../custom/ButtonWrapper";
import Image from "next/image";

const WelcomeTo = () => {
  return (
    <div className=" grid grid-cols-1 mdP:grid-cols-2  gap-5">
      <div className="h-[350px] md:h-[530px] mdP:mr-14">
        <div className="bg-light h-full relative ">
        <Image
          src="/image/plane4.jpg"
          width={1000}
          height={1000}
          alt="aerospace"
          className="w-full h-full  "
        />
          <div className=" bg-black text-white absolute bottom-5 right-2 mdP:-right-8 px-5 py-3">
           <span className="text-[20px] md:text-[30px] font-semibold"> <i> TARUN MANILAL </i> </span>
           <span className=" flex  items-center gap-2 text-sm md:text-base" >   <GoHorizontalRule className="text-[20px] md:text-[26px]"/><i className="-[5px] md:tracking-[7px]"> FOUNDER </i> </span>
          </div>
        </div>
      </div>
      <div className="py-3 mx-auto w-full max-w-custom-xl px-5 mdP:px-0  mdP:pr-7 xl:pr-16 flex flex-col justify-center">
        <div className="flex gap-2 items-center pb-3">
          <Icons.PLANE className=" text-2xl rotate-45" />
          <span className="text-xl md:text-2xl">WELCOME TO</span>
        </div>
        <Heading isPlane={false}>
          <b> AEROSYSTEM </b> AND <b> AEROSPARES </b>
        </Heading>
        <p className="py-2 text-sm md:text-base">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500S, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy
          Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been
          The Industry's Standard Dummy Text Ever Since The 1500S, When An
          Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type
          Specimen Book.
        </p>
        <p className="py-2 text-sm md:text-base">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500S, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy
          Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been
          The Industry's Standard Dummy Text Ever Since The 1500S, When An
          Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type
          Specimen Book.
        </p>
        <div className="my-3">
          <ButtonWrapper  isOutline={true} isArrow={true} >
          Read More
          </ButtonWrapper>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTo;
