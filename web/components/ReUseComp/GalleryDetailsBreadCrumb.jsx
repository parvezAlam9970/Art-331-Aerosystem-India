import React from "react";
import { Icons } from "@/constants/icons";
import Link from "next/link";
import Container from "../custom/Container";

const GalleryDetailsBreadCrumb = ({ title="", subtitle="", dynamictitle="" ,img }) => {

  return (
    <div
      className={` bg-no-repeat bg-cover bg-center w-full h-[300px] md:h-[400px] xl:h-[550px] relative flex justify-start`}
      style={{ backgroundImage: `url(${img || "/images/breadcrumb.png"})` }}

    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <Container className="relative z-10 pt-24 lg:pt-36 ">
        <h2 className="text-[22px] md:text-[28px] font-georgia  lg:text-[34px]  font-bold capitalize  text-white ">
          {dynamictitle || title}
        </h2>
        <div className="text-primary   flex sm:gap-1 ">
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
      </Container>
    </div>
  );
};      

export default GalleryDetailsBreadCrumb;
