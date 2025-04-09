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

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-5 md:pt-10  lg:pt-16">
      <Container>
        <div className="mx-auto  grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Left Section */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4 text-center justify-center sm:justify-start">
              <Link href={"/"}>
                <Image
                  alt="socail-icon"
                  src={"/logo/footer.png"}
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
            <h3 className="text-[25px] font-bold mb-4 nav-link_footer">
              Follow Us On :
            </h3>

            <div className="flex space-x-3 mt-4">
              <div className="social_iocon">
                <Link
                  href="https://www.instagram.com/abroaduniversity/"
                  target="_blank"
                >
                  <FaInstagram className="text-white" size={25} />
                </Link>
              </div>
              <div className="social_iocon">
                <Link href="https://twitter.com/bauintbatumi" target="_blank">
                  <BsTwitterX className="text-white" size={22} />
                </Link>
              </div>
              <div className="social_iocon">
                <Link
                  href="https://www.facebook.com/mbbsuniversity"
                  target="_blank"
                >
                  <FaFacebook className="text-white" size={26} />
                </Link>
              </div>
              <div className="social_iocon">
                <Link
                  href="https://www.linkedin.com/company/international-university-batumi/"
                  target="_blank"
                >
                  <IoLogoLinkedin className="text-white" size={25} />
                </Link>
              </div>
              <div className="social_iocon">
                <Link
                  href="https://www.youtube.com/@abroaduniversityadmission"
                  target="_blank"
                >
                  <FaYoutube className="text-white" size={26} />
                </Link>
              </div>
            </div>
          </div>

          {/* Middle Section - Menu Links */}
          <div className="md:col-span-2 nav-item_footer">
            <h3 className="text-[25px] font-bold mb-4 nav-link_footer">
              Common Links
            </h3>
            <ul className="space-y-2">
              <li className="nav-item_footer">
                <Link className="nav-link_footer" href="#aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item_footer">
                <Link className="nav-link_footer" href="#Admissions">
                  Admission
                </Link>
              </li>
              <li className="nav-item_footer">
                <Link className="nav-link_footer" href="#Courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item_footer">
                <Link className="nav-link_footer" href="#campus">
                  Campus
                </Link>
              </li>
              <li className="nav-item_footer">
                <Link className="nav-link_footer" href="#facilities">
                  Facilities
                </Link>
              </li>
              <li className="nav-item_footer">
                <Link className="nav-link_footer" href="#reviews">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* New Section - Services */}
          <div className="md:col-span-2 nav-item_footer">
            <h3 className="text-[25px] font-bold mb-4 nav-link_footer">
              Courses
            </h3>
            <ul className="space-y-2">
              <li className="nav-item_footer">
                <Link href="#Courses">Medicine Program</Link>
                {/* </Link> */}
              </li>
              <li className="nav-item_footer">
                <Link href="#Courses">Dentistry Program</Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Us */}
          <div className="md:col-span-4 xl:px-[30px] nav-item_footer">
            <h3 className="text-[25px] font-bold mb-4 nav-link_footer">
              Get In Touch
            </h3>

            <div className="space-y-2">
              <div className="flex gap-3 pb-5">
                <div className="w-[50px] h-[50px] bg-[#3D71B5] rounded-full flex  justify-center items-center text-white">
                  <FaMapMarkerAlt size={25} />
                </div>
                <div className=" flex-1">
                  <p className="text-[16px] font-semibold">Address</p>
                  <p className="15px ">
                    Iris Borchashvili Health Center Medina 237, Fridon Khalvashi
                    ST, Batumi, 6010, Georgia
                  </p>
                </div>
              </div>
              <div className="flex gap-3 pb-5">
                <div className="w-[50px] h-[50px] bg-[#3D71B5] rounded-full flex  justify-center items-center text-white">
                  <IoIosCall size={25} />
                </div>
                <div className=" flex-1">
                  <p className="text-[16px] font-semibold">Phone No</p>
                  <p className="15px">+91 99991 63692</p>
                </div>
              </div>
              <div className="flex gap-3 pb-5">
                <div className="w-[50px] h-[50px] bg-[#3D71B5] rounded-full flex  justify-center items-center text-white">
                  <IoMail size={25} />
                </div>
                <div className="flex-1">
                  <p className="text-[16px] font-semibold">Email</p>
                  <Link href="mailto:abroaduniversitydelhi@gmail.com" className="text-[15px] hover:underline">
                    abroaduniversitydelhi@gmail.com
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
      <hr className="mt-5" />
      <div className=" flex justify-center items-center text-center py-3 md:py-4 px-5 sm:px-0">
        <p className="text-center  text-[13px] md:text-[14px] ">
          Copyright 2025 | BAU International University Batumi | All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
