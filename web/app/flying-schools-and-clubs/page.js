import Container from "@/components/custom/Container";
import FlyingSchoolsClubsMain from "@/components/flying-school-clubs/FlyingSchoolsClubsMain";
import { Icons } from "@/constants/icons";
import Link from "next/link";
import React from "react";

const FlyingSchoolClubsPage = () => {
  return (
    <div>
      <Container className="h-[200px] flex justify-between  items-center text-center bg-[#707070]  pt-[calc(200px-101px)]">
        <div className="">
          <h4 className="text-lg md:text-2xl font-bold">
            FLYING SCHOOLS AND CLUBS
          </h4>
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
              <span>FLYING SCHOOLS AND CLUBS</span>
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <FlyingSchoolsClubsMain/>
      </Container>
    </div>
  );
};

export default FlyingSchoolClubsPage;
