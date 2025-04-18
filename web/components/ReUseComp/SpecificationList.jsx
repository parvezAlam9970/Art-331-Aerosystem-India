import { Icons } from "@/constants/icons";
import React from "react";

const SpecificationList = ({ title, data }) => {
  return (
    <div>
      <div className="bg-mgrey p-2 px-5">
        <h3 className="font-bold text-xl text-lgrey">{title}</h3>
      </div>
      <div className="p-3 flex justify-between  gap-4">
        <ul>
          {data.map((item, index) => (
            <li key={index} className="mb-2 flex gap-2 items-center">
              <Icons.CIRCLE_CHECK className="text-green-400" /> {item.label}
            </li>
          ))}
        </ul>

        <ul>
          {data.map((item, index) => (
            <li key={index} className="mb-2 flex gap-2 items-center  ">
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecificationList;
