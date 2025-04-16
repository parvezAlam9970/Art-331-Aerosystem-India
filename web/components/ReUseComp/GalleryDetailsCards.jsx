import { Icons } from "@/constants/icons";
import React from "react";

const GalleryDetailsCards = ({}) => {
  return (
    <div className=" relative ">
      <div className=" h-[180px] md:h-[266px] w-full bg-mgrey"></div>
      <div className=" absolute -bottom-5 w-[95%] px-4 py-3 bg-sgrey h-auto">
        <div className="text-black flex gap-2 justify-between">
          <div className=" md:mt-2">
            <p className=" text-sm">CESSNA</p>
            <h3 className=" text-xl  font-bold">Skyhawk Flight</h3>
          </div>
          <div className=" flex gap-2 items-center text-center">
          <div className="  w-[40px] md:w-[45px] h-[40px] md:h-[45px] bg-black text-white flex items-center text-center justify-center">
            <Icons.PLUS className=" text-[23px]" />
            </div>
          <div className="  w-[40px] md:w-[45px] h-[40px] md:h-[45px] bg-black text-white flex items-center text-center justify-center">
            <Icons.DOWNLOAD_2 className=" text-[23px]" />
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GalleryDetailsCards;
