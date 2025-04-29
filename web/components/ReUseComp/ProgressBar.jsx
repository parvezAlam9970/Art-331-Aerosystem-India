import React from "react";
import { Progress } from "../ui/progress";

const ProgressBar = ({ value = 20, innertext, label }) => {
  return (
    <div>
      <span className="text-[12px] ">{label}</span>
      <div className="relative mt-1">
        <Progress value={value} className="rounded-none h-7 bg-mgrey" />
        <span className=" absolute inset-0 top-0 text-sm text-white flex items-center text-center left-2">
          {innertext}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
