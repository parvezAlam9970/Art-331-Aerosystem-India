import { Icons } from "@/constants/icons";
import React from "react";

const TeamMemberCards = () => {
  return (
    <div className="relative group w-full cursor-pointer ">
      <div className="h-[415px] w-full bg-mgrey "></div>

      <div className="absolute -bottom-3 w-[93%] bg-sgrey px-4 py-3  transition-all duration-500 ease-in-out h-20 overflow-hidden group-hover:h-36">
        <div className="text-black flex gap-2 justify-between">
          <div className=" mt-2">
            <h3 className=" text-xl  font-bold">Shriya Goyal</h3>
            <p className=" text-sm xl:text-base">TECHNICAL SUPPORT</p>
          </div>
          <div className=" w-[55px] h-[55px] bg-black text-white flex items-center text-center justify-center">
              <Icons.ARROW_RIGHT className="-rotate-45 text-[35px]" />
            
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
          <p className="text-sm flex gap-3 items-center text-center">
            <Icons.CALL />
            +91 0000 0000 00
          </p>
          <p className=" text-sm font-bold pt-2">FEEL FREE TO CONTACT.</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCards;
