import { Icons } from "@/constants/icons";
import React from "react";

const SwiperPrevNextComp = ({ handleNext, handlePrev }) => {
  return (
    <div>
      <div className="flex justify-center items-center text-center gap-2 ">
        <span
          className="text-lgrey  hover:text-white hover:border-white cursor-pointer border-2 border-lgrey  p-1"
          onClick={handlePrev}
        >
          <Icons.ARROW_LEFT className=" text-[20px] mdP:text-[25px] lg:text-[32px]" />
        </span>
        <span
          className="text-lgrey hover:text-white hover:border-white cursor-pointer border-2 p-1 border-lgrey "
          onClick={handleNext}
        >
          <Icons.ARROW_RIGHT className=" text-[20px] mdP:text-[25px] lg:text-[32px]" />
        </span>
      </div>
    </div>
  );
};

export default SwiperPrevNextComp;
