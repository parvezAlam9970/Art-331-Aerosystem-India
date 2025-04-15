import { Icons } from "@/constants/icons";
import React from "react";
import Heading from "../ReUseComp/Heading";
import { GoHorizontalRule } from "react-icons/go";
import Image from "next/image";

const CeoFounderReuseComp = ({isReverse=false,desgination="",name="",title=""}) => {

    

  return (
    <div className=" grid grid-cols-1 mdP:grid-cols-2  gap-5">
      <div className={`h-[350px] md:h-[480px] mdP:mr-14 ${isReverse ? " order-1 mdP:order-2" : " order-1"} `}>
        <div className="bg-light h-full relative ">
        <Image
          src="/image/plane4.jpg"
          width={1000}
          height={1000}
          alt="aerospace"
          className="w-full h-full  "
        />
          <div className={` bg-black text-white absolute bottom-5 ${isReverse ? " mdP:-left-8" : "-right-2 mdP:-right-8"} px-5 py-3`}>
           <span className="text-[20px] md:text-[30px] font-semibold uppercase"> <i> {name} </i> </span>
           <span className=" flex  items-center gap-2 text-sm md:text-base uppercase" >   <GoHorizontalRule className="text-[20px] md:text-[26px]"/><i className="-[5px] md:tracking-[7px]"> {desgination} </i> </span>
          </div>
        </div>
      </div>
      <div className={`py-3 mx-auto w-full max-w-custom-xl ${isReverse ? "order-1" : " order-2"}  mdP:pr-7 xl:pr-16 flex flex-col justify-center`}>
        <Heading isPlane={false} className="mb-3 md:mb-10">
          <b>{title }</b>
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
      </div>
    </div>
  );
};

export default CeoFounderReuseComp;
