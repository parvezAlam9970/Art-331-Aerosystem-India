import React from "react";
import Container from "../custom/Container";
import Heading from "../ReUseComp/Heading";
import { Icons } from "@/constants/icons";
import Image from "next/image";
import DownloadBrochureBtn from "../ReUseComp/DownloadBrochureBtn";

const OwnershipGuide = () => {
  return (
    <Container className="grid  lg:grid-cols-2 gap-5">
      <div>
        <Image
          src="/image/plane4.jpg"
          width={1000}
          height={1000}
          alt="aerospace"
          className="w-full h-full   "
        />
      </div>
      <div className=" lg:pl-10 py-1">
         <div>
            <Heading isPlane={false}>
              Ownership Guide
            </Heading>
            <p className="text-sm md:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
            </p>
         </div>
         <ul className=" mt-5">
           <li className="mb-1 flex gap-2 items-center text-center">
            <Icons.CIRCLE_CHECK className=" text-green-400"/>  Lorem ipsum
           </li>
           <li className="mb-1 flex gap-2 items-center text-center">
            <Icons.CIRCLE_CHECK className=" text-green-400"/>  Lorem ipsum
           </li>
           <li className="mb-1 flex gap-2 items-center text-center">
            <Icons.CIRCLE_CHECK className=" text-green-400"/>  Lorem ipsum
           </li>
         </ul>
         <div className="mt-5 inline-block">
          <DownloadBrochureBtn />
         </div>
      </div>
    </Container>
  );
};

export default OwnershipGuide;
