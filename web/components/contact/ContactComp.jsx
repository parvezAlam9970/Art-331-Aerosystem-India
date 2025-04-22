import React from "react";
import Container from "../custom/Container";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "../ui/textarea";
import ButtonWrapper from "../custom/ButtonWrapper";
import ContactTextAra from "./ContactTextAra";

const ContactComp = () => {
  return (
    <Container className="my-5 md:my-10 lg:my-16 grid grid-cols-1 lg:grid-cols-5 gpa-10 lg:gap-16">
      <div className=" lg:col-span-2">
        <ContactTextAra/>
      </div>
      <div className=" lg:col-span-3 shadow-lightShadow px-3 md:px-5 py-4 md:py-8">
        <form className=" grid grid-cols-2 gap-3 md:gap-5">
          <div>
            <Input placeholder="First Name" className=" py-3 md:py-6" />
          </div>
          <div>
            <Input placeholder="Last Name*" className=" py-3 md:py-6" />
          </div>
          <div>
            <Input placeholder="Email Address*" className=" py-3 md:py-6" />
          </div>
          <div >
            <Input
              placeholder="Phone Number (Optional)"
              type="number"
              className=" py-3 md:py-6"
              min={0}
            />
          </div>
          <div className=" col-span-2 md:col-span-1">
            <Input
              placeholder="ZIP / Postal Code (Optional)"
              type="number"
              className=" py-3 md:py-6"
              min={0}
            />
          </div>
          <div className=" col-span-2 md:col-span-1">
            <span className=" text-[14px] md:text-[13px] font-medium">Phone Type</span>
            <RadioGroup defaultValue="option-one" className=" flex gap-5 mt-3 md:mt-1 ">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Work</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Mobile</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Home</Label>
              </div>
            </RadioGroup>
          </div>
          <div className=" col-span-2 my-2 md:my-0">
            <Textarea placeholder="Comments*"  />
          </div>
          <div className=" col-span-2">
            <span className=" text-[14px] md:text-[16px] font-medium">I Prefer To Be Contacted By</span>
            <RadioGroup defaultValue="option-one" className="mt-3 md:mt-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Phone</Label>
              </div>
           
            </RadioGroup>
          </div>
          <div className=" col-span-2 mt-3 md:mt-5 ">
            <div className=" flex justify-end">
              <ButtonWrapper>
                 SUBMIT
              </ButtonWrapper>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ContactComp;
