import ContactComp from "@/components/contact/ContactComp";
import Container from "@/components/custom/Container";
import Heading from "@/components/ReUseComp/Heading";
import { Icons } from "@/constants/icons";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Container className="h-[200px] flex justify-between  items-center text-center bg-[#707070]  pt-[calc(200px-101px)]">
        <div className="">
          <Heading isPlane={false} className=" font-bold">
            Contact
          </Heading>
        </div>
        <div>
          <div className="text-primary   flex sm:gap-1 items-center justify-center text-center">
            <Link
              href="/"
              className="  text-[16px] sm:text-[16px] text-white   "
            >
              Home
            </Link>
            <p className="flex items-center  text-[16px] sm:text-[16px]  font-bold text-white">
              <Icons.RIGHT_CUVE_ARROW className="text-[17px] md:text-[16px]" />{" "}
              <span>Contact</span>
            </p>
          </div>
        </div>
      </Container>
      <ContactComp/>
    </div>
  );
};

export default ContactPage;
