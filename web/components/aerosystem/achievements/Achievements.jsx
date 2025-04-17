import Heading from "@/components/ReUseComp/Heading";
import { Icons } from "@/constants/icons";
import { Images } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className="my-5 md:my-10 lg:my-16 grid grid-cols-1 mdP:grid-cols-2 gap-5 mdP:gap-10">
      <div className=" flex justify-center flex-col order-2 mdP:order-1">
        <div className="flex gap-2 items-center pb-3">
          <Icons.PLANE className=" text-2xl rotate-45" />
          <span className="text-xl md:text-2xl">Achievements</span>
        </div>
        <Heading isPlane={false}>
        <b>Lorem Ipsum Tiltle</b>
        </Heading>
        <p className=" text-sm md:text-base pb-4 pt-2">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
        <p className=" text-sm md:text-base ">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
      </div>

      <div className=" h-full mdP:h-[488px] order-1 mdP:order-2">
        <div className="bg-light h-full  ">
          <Image
            src={Images.TESTING_IMG}
            width={1000}
            height={1000}
            alt="aerospace"
            className="w-full h-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
