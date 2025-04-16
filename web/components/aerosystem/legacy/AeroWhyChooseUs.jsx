import Heading from "@/components/ReUseComp/Heading";
import Image from "next/image";
import React from "react";

const whyChooseData  = [
  
    {
        title:"Quality Control System",
        desc:"Embarrassing Hidden In The Middle All The Lorem Ipsum Generators On The Internet Repeat Predefined Chunks"
    },
    {
        title:"Environmental Responsibility",
        desc:"Embarrassing Hidden In The Middle All The Lorem Ipsum Generators On The Internet Repeat Predefined Chunks"
    },
    {
        title:"Quality Control System",
        desc:"Embarrassing Hidden In The Middle All The Lorem Ipsum Generators On The Internet Repeat Predefined Chunks"
    },
    {
        title:"Environmental Responsibility",
        desc:"Embarrassing Hidden In The Middle All The Lorem Ipsum Generators On The Internet Repeat Predefined Chunks"
    },

]

const AeroWhyChooseUs = () => {
  return (
    <div className=" my-5 md:my-10 lg:my-16 grid grid-cols-1 mdP:grid-cols-2 gap-14">
      <div className=" h-full">
        <div className="bg-light h-full  ">
          <Image
            src="/image/plane4.jpg"
            width={1000}
            height={1000}
            alt="aerospace"
            className="w-full h-full  "
          />
        </div>
      </div>
      <div className=" px-5 mdP:px-0  mdP:pr-7 xl:pr-16">
        <Heading isPlane={false}>
          Why <b>Choose Us?</b>
        </Heading>
        <p className=" text-sm md:text-base py-5">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500S, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy
          Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been
          The Industry's Standard Dummy Text Ever Since The 1500S, When An
          Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type
          Specimen Book.
        </p>
        <div className=" flex flex-col gap-3">
         {
            whyChooseData?.map((v,indx)=>(
                <div key={indx} className=" flex gap-4">
            <div className=" h-[60px] w-[65px] bg-[#E3E3E3] rounded-md flex items-center text-center justify-center">
              img
            </div>
            <div>
              <p className="font-bold pb-1">{v?.title}</p>
              <p className=" text-sm">
               {v?.desc}
              </p>
            </div>
          </div>
            ))
         } 
        </div>
      </div>
    </div>
  );
};

export default AeroWhyChooseUs;
