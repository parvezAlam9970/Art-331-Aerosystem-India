import Heading from "@/components/ReUseComp/Heading";
import { Icons } from "@/constants/icons";
import React from "react";

const AeroAbout = ({title="About",subTitle="About  Aerosystem"}) => {
  return (
    <div className=" my-5 md:my-10 lg:my-16">
      <div className="flex gap-2 items-center pb-3">
        <Icons.PLANE className=" text-2xl rotate-45" />
        <span className="text-xl md:text-2xl">{title}</span>
      </div>
      <Heading isPlane={false}>
        {subTitle}
      </Heading>
      <div>
        <p className=" text-sm pb-5 pt-3 md:text-base">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500S, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy
          Text Of The Printing And Typesetting Industry.
        </p>
        <p className=" text-sm pb-5 md:text-base">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500S, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy
          Text Of The Printing And Typesetting Industry 
        </p>
      </div>
    </div>
  );
};

export default AeroAbout;
