import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

const CompareModelsFilter = () => {
  return (
    <div>
      <div>
        <h4 className="text-xl font-bold">Help Me Choose</h4>
        <p className="font-bold text-base mt-3">Brand</p>
      </div>
      <div className=" flex flex-wrap justify-between items-center text-center mt-2">
        <div className=" flex gap-2 items-center justify-center text-center  ">
          <Label className="text-sm text-lgrey cursor-pointer" htmlFor="cessna">
            Cessna
          </Label>
          <div className=" flex justify-center items-center ">
            <Switch id="cessna" className="bg-lgrey" />
          </div>
        </div>
        <div className=" flex gap-2 items-center justify-center text-center  ">
          <Label
            className="text-sm text-lgrey cursor-pointer "
            htmlFor="beechcraft"
          >
            Beechcraft
          </Label>
          <div className=" flex justify-center items-center">
            <Switch id="beechcraft" className="bg-lgrey" />
          </div>
        </div>
      </div>
      <div className=" mt-5">
        <p className="font-bold text-base mt-3">Category</p>
        <div className=" flex flex-col gap-2 mt-3">
          <div className=" flex gap-2 items-center justify-between text-center  ">
            <Label
              className="text-sm text-lgrey cursor-pointer"
              htmlFor="single-engine"
            >
              Single Engine
            </Label>
            <div className=" flex justify-center items-center ">
              <Switch id="single-engine" className="bg-lgrey" />
            </div>
          </div>
          <div className=" flex gap-2 items-center justify-between text-center  ">
            <Label
              className="text-sm text-lgrey cursor-pointer"
              htmlFor="double-engine"
            >
              Double Engine
            </Label>
            <div className=" flex justify-center items-center ">
              <Switch id="double-engine" className="bg-lgrey" />
            </div>
          </div>
          <div className=" flex gap-2 items-center justify-between text-center  ">
            <Label
              className="text-sm text-lgrey cursor-pointer"
              htmlFor="trainer-aircraft"
            >
              Trainer Aircraft
            </Label>
            <div className=" flex justify-center items-center ">
              <Switch id="trainer-aircraft" className="bg-lgrey" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 flex flex-col gap-4">
        <div>
          <div className=" flex justify-between">
            <span className="text-sm text-lgrey cursor-pointer ">Range</span>
            <span className="text-sm text-lgrey cursor-pointer ">≥ 640 nm</span>
          </div>
          <div className="mt-3">
            <Slider />
          </div>
        </div>
        <div>
          <div className=" flex justify-between">
            <span className="text-sm text-lgrey cursor-pointer ">SPEED</span>
            <span className="text-sm text-lgrey cursor-pointer ">≥ 124 ktas</span>
          </div>
          <div className="mt-3">
            <Slider />
          </div>
        </div>
        <div>
          <div className=" flex justify-between">
            <span className="text-sm text-lgrey cursor-pointer ">SEATING CAPACITY</span>
            <span className="text-sm text-lgrey cursor-pointer ">≥ 0</span>
          </div>
          <div className="mt-3">
            <Slider />
          </div>
        </div>
        <div>
          <div className=" flex justify-between">
            <span className="text-sm text-lgrey cursor-pointer ">USEFUL LOAD</span>
            <span className="text-sm text-lgrey cursor-pointer ">≥ 878 lbs</span>
          </div>
          <div className="mt-3">
            <Slider />
          </div>
        </div>
        <div>
          <div className=" flex justify-between">
            <span className="text-sm text-lgrey cursor-pointer ">TAKEOFF</span>
            <span className="text-sm text-lgrey cursor-pointer ">≤ 4810 ft</span>
          </div>
          <div className="mt-3">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModelsFilter;
