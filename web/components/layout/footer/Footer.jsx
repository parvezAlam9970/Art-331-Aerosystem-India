import Container from "@/components/custom/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { Icons } from "@/constants/icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 md:pt-10  lg:pt-16">
      <Container>
        <div className="mx-auto  grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 text-center justify-center sm:justify-start">
              <Link href={"/"}>
                <Image
                  alt="socail-icon"
                  src={"/logo/logo.svg"}
                  width={250}
                  height={40}
                />
              </Link>
            </div>
            <p
              className="text-sm leading-relaxed xl:pr-[80px] pb-5 pt-3 sm:pt-0"
              style={{ letterSpacing: "0.5px", lineHeight: "24px" }}
            >
              As industry leaders since our founding in 2000, we’ve grown
              accustomed to working with companies of all sizes, and providing
              products to wholesalers and dealers worldwide. We enjoy putting
              our minds together to deliver quality goods that adhere to the
              highest standards.
            </p>
          </div>
          <div className=" col-span-4">
            <div className=" grid grid-cols-4">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
            </div>
            <div className=" grid grid-cols-4 mt-5">
              <div>One</div>
              <div>Two</div>
              <div className=" col-span-2">Three</div>
            </div>
          </div>
        </div>
        <div className=" my-10 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <div className=" bg-[#414141] p-4 shadow-lightShadow flex gap-5  ">
            <div>
              <Icons.LOCATION_PIN className="text-[28px]" />
            </div>
            <div className=" flex-1">
              <span className=" font-bold">Address</span>
              <p>219-220, gulabi bagh, delhi - 110007</p>
            </div>
          </div>
          <div className=" bg-[#414141] p-4 shadow-lightShadow flex gap-5  ">
            <div>
              <Icons.CALL className="text-[28px]" />
            </div>
            <div className=" flex-1">
              <span className=" font-bold">Phone</span>
              <p>011-350-77777</p>

              <p>011-350-77777</p>
            </div>
          </div>
          <div className=" bg-[#414141] p-4 shadow-lightShadow flex gap-5  ">
            <div>
              <Icons.EMAIL className="text-[28px]" />
            </div>
            <div className=" flex-1">
              <span className=" font-bold">Email</span>
              <p>info@aerosapce.com</p>
            </div>
          </div>
          <div className=" bg-[#414141] p-4 shadow-lightShadow flex gap-5  ">
            <div>
              <Icons.TIME className="text-[28px]" />
            </div>
            <div className=" flex-1">
              <span className=" font-bold">Timing</span>
              <p>Mon - Fri 09.30 - 17.30</p>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className=" flex justify-between flex-col gap-3 lg:gap-0 lg:flex-row items-center text-center py-3 md:py-6 px-5 sm:px-0">
          <div className="text-center  text-[13px] md:text-[14px] ">
            <Link href="/">Terms & Conditions</Link>
            <span className="px-3"> | </span>
            <Link href="/">Privacy Policy</Link>
          </div>
          <div className="text-center  text-[13px] md:text-[14px] ">
            © 2025. <strong> AEROSYSTEM India </strong> | All Rights Reserved.
          </div>
          <div className="text-center  text-[13px] md:text-[14px] flex gap-4 items-center  ">
            <span className="text-[13px] md:text-[14px] font-medium">
              FOLLOW US
            </span>
            <div className=" flex gap-2">
              <div className=" border-[1px] rounded-full border-lgrey p-2">
                <Icons.FACEBOOK className=" text-lgrey text-[18px]" />
              </div>
              <div className=" border-[1px] rounded-full border-lgrey p-2">
                <Icons.LINKEDIN className=" text-lgrey text-[18px]" />
              </div>
              <div className=" border-[1px] rounded-full border-lgrey p-2">
                <Icons.INSTAGRAM className=" text-lgrey text-[18px]" />
              </div>
              <div className=" border-[1px] rounded-full border-lgrey p-2">
                <Icons.YOUTUBE className=" text-lgrey text-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
