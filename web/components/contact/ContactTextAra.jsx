import { Icons } from "@/constants/icons";
import React from "react";
import Heading from "../ReUseComp/Heading";

const ContactTextAra = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 items-center pb-3">
          <Icons.PLANE className=" text-2xl rotate-45" />
          <span className="text-xl md:text-2xl">Contact</span>
        </div>
        <Heading isPlane={false}>
          <b>Keep in Touch </b>
        </Heading>
        <p>
          Reach Out For Any Inquiries, Support, Or To Discuss How We Can Meet
          Your Industrial Needs.
        </p>
      </div>
      <div className=" my-8 flex flex-col gap-5">
        <div className=" flex gap-5">
          <div className=" bg-lgrey text-white flex justify-center items-center  text-center p-3 h-[60px] w-[60px]">
            <Icons.CALL  className=" text-[35px]" />
          </div>
          <div className=" flex-1">
            <span className="text-xl font-medium">Contact</span>
            <p className="  text-lg md:text-xl">011-000-00000, &nbsp; &nbsp; &nbsp;  011-000-00000</p>
          </div>
        </div>
        <hr className=" border-[1px] "/>
        <div className=" flex gap-5">
        <div className=" bg-lgrey text-white flex justify-center items-center  text-center p-3 h-[60px] w-[60px]">
            <Icons.CALL  className=" text-[35px]" />
          </div>
          <div className=" flex-1">
            <span className="text-xl font-medium">E-Mail</span>
            <p className="  text-lg md:text-xl">info@yourdomain.com</p>
          </div>
        </div>
        <hr className=" border-[1px]" />
        <div className=" flex gap-5">
        <div className=" bg-lgrey text-white flex justify-center items-center  text-center p-3 h-[60px] w-[60px]  ">
            <Icons.CALL  className=" text-[35px]" />
          </div>
          <div className=" flex-1">
            <span className="text-xl font-medium">Contact</span>
            <p className="  text-lg md:text-xl">e-9/24, 1st floor, vasant vihar, new delhi-110 057 india</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTextAra;
