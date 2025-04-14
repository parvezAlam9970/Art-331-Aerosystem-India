import React from "react";
import { Icons } from "@/constants/icons";
import Link from "next/link";

const BreadCrumb = ({ title="", subtitle="", dynamictitle="" ,img }) => {

  return (
    <div
      className={` bg-no-repeat bg-cover bg-bottom w-full h-[230px] md:h-[300px] xl:h-[430px] flex justify-center items-center text-center relative`}
      style={{ backgroundImage: `url(${img || "/images/breadcrumb.png"})` }}

    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 pt-10 sm:pt-20 ">
        <h2 className="text-[22px] md:text-[28px] font-georgia  lg:text-[34px]  font-bold capitalize  text-white ">
          {dynamictitle || title}
        </h2>
        <div className="text-primary   flex sm:gap-1 items-center justify-center text-center">
          <Link href="/" className="  text-[16px] sm:text-[16px] text-white   ">
            Home
          </Link>
          {subtitle && (
            <p className="flex items-center  text-[16px] sm:text-[16px] text-white ">
              <Icons.RIGHT_CUVE_ARROW className="text-[16px]" />{" "}
              <span> {subtitle}</span>
            </p>
          )}
          {title && (
            <p className="flex items-center  text-[16px] sm:text-[16px]  font-bold text-white">
              <Icons.RIGHT_CUVE_ARROW className="text-[17px] md:text-[16px]" />{" "}
              <span> {title}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
