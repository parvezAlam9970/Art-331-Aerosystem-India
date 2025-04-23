import React from "react";
import { Switch } from "@/components/ui/switch"

const CompareModelsFilter = () => {
  return (
    <div>
      <div>
        <h4 className="text-xl font-bold">Help Me Choose</h4>
        <p className="font-bold text-base mt-3">Brand</p>
      </div>
      <div className=" flex flex-wrap justify-between items-center text-center">
        <div className=" flex gap-2 items-center justify-center text-center  ">
          <span className="text-sm text-lgrey">Cessna</span>
          <div className=" flex justify-center items-center"><Switch className="bg-lgrey"/></div>
        </div>
        <div className=" flex gap-2 items-center justify-center text-center  ">
          <span className="text-sm text-lgrey">Beechcraft</span>
          <div className=" flex justify-center items-center"><Switch className="bg-lgrey"/></div>
        </div>
      </div>
    </div>
  );
};

export default CompareModelsFilter;
