import React from "react";
import Container from "../custom/Container";
import Heading from "../ReUseComp/Heading";
import { Input } from "../ui/input";
import ButtonWrapper from "../custom/ButtonWrapper";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const KeepInTouch = () => {
  return (
    <Container className="my-5 md:my-10">
      <div className=" grid grid-cols-1  md:grid-cols-5  bg-[#E3E3E3] py-3 md:py-7 px-5 md:px-10">
        <div className=" col-span-1 md:col-span-2">
          <Heading className="" isPlane={false}>
            <strong> Keep In Touch </strong>
          </Heading>
          <p className=" text-sm text-lgrey">
            Lorem Ipsum Is Simply Dummy Text Of The <br /> Printing And
            Typesetting Industry.
          </p>
        </div>
        <div className="flex  flex-col col-span-1 md:col-span-3 mt-5 md:mt-0">
          <div className=" flex items-center w-full">
            <Input
              placeholder="Enter Your Mail Address"
              className=" py-6 border-none outline-none w-full bg-[#D9D9D9] "
            />
            <ButtonWrapper className=" py-3 lg:py-3 focus-visible:ring-0 lg:px-14">
              Subscribe
            </ButtonWrapper>
          </div>
          <div className="mt-3 flex gap-2 md:gap-10 flex-col md:flex-row  ">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
               I Agree To The Privacy Policy.*
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="email" />
              <Label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Yes, I Would Like To Receive Email Updates From Piper.*
              </Label>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default KeepInTouch;
