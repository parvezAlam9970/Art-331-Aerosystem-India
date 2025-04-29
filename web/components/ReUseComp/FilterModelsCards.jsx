import { Images } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { Progress } from "@/components/ui/progress";
import ProgressBar from "./ProgressBar";

const FilterModelsCards = () => {
  return (
    <div className=" border-[1px]  border-mgrey">
      <div className=" h-[240px] w-full ">
        <Image
          src={Images.TESTING_IMG}
          width={1000}
          height={1000}
          className=" w-full h-full"
        />
      </div>
      <div className=" p-4 grid grid-cols-2 gap-4 items-center ">
        <div>
          <ProgressBar
            value={50}
            innertext={"703 Nm"}
            label={"Maximum Range"}
          />
        </div>
        <div className="">
          <ProgressBar
            value={80}
            innertext={"161 Ktas"}
            label={"Maximum Cruise Speed"}
          />
        </div>
        <div>
          <ProgressBar value={60} innertext={"6"} label={"Maximum Occupants"} />
        </div>
        <div>
          <ProgressBar
            value={80}
            innertext={"1,441 Lb"}
            label={"Useful Load"}
          />
        </div>
        <div>
          <ProgressBar
            value={70}
            innertext={"1,060 Ft"}
            label={"Takeoff Ground Roll"}
          />
        </div>
      </div>
      <div className="p-4 pt-0">
         <p className=" hover:underline cursor-pointer">Learn More</p>
      </div>
    </div>
  );
};

export default FilterModelsCards;
