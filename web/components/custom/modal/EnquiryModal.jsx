
"use client"
import React, { useState } from "react";
import CustomModalWrapper from "../CustomModalWrapper";
import Image from "next/image";
import { Images } from "@/constants/images";
import ButtonWrapper from "../ButtonWrapper";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const EnquiryModal = ({ type }) => {
  const [message, setMessage] = useState("");

  return (
    <CustomModalWrapper
      type={type}
      className=" max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl "
    >
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className=" h-[180px] sm:h-[250px] md:h-[450px] w-full relative">
          <Image
            src={Images.TESTING_IMG}
            width={1000}
            height={1000}
            className=" w-full h-full "
          />
          <div className={" w-[55px] h-[55px]  absolute right-3 top-3"}>
            <Image
              src={Images.CESSNA_BLACK_LOGO}
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
              alt="cessna-logo"
            />
          </div>
          <div className="absolute left-3 top-3">
            <Image
              src={Images.WHITE_LOGO}
              width={1000}
              height={1000}
              className="w-[144px] h-[60px] xl:w-[166px] xl:h-[78px]"
              alt="cessna-logo"
            />
          </div>
        </div>
        <div className=" p-4 md:p-6 flex flex-col justify-center">
          <h4 className=" text-xl">
            Sales Will Contact You <span className=" font-bold"> Soon</span>
          </h4>
          <form className=" grid grid-cols-2 gap-3 md:gap-4 mt-5">
            <div>
              <Input placeholder="Company Name" className="" />
            </div>
            <div>
              <Input
                placeholder="Phone No."
                type="number"
                className=""
                min={0}
              />
            </div>
            <div>
              <Input placeholder="Email" className="" />
            </div>
            <div>
              <Select className=" rounded-none">
                <SelectTrigger className="rounded-none">
                  <SelectValue placeholder="Select a Plane" />
                </SelectTrigger>
                <SelectContent className=" bg-white">
                  <SelectGroup>
                    <SelectLabel>Air Crafts</SelectLabel>
                    <SelectItem value="skyhawk">Skyhawk</SelectItem>
                    <SelectItem value="turbo-skylane">Turbo Skylane</SelectItem>
                    <SelectItem value="skylane">Skylane</SelectItem>
                    <SelectItem value="turbo">Turbo Stationair HD</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className=" col-span-2">
              <Textarea 
              placeholder="Request Information"
                value={message}
                maxLength={200}
                onChange={(e) => setMessage(e.target.value)}
                 />
                  <p className="text-sm text-gray-500 text-right pt-2">{message.length}/200 characters</p>
            </div>

            <div className=" col-span-2 mt-3 md:mt-5 ">
                <ButtonWrapper className="w-full">SUBMIT</ButtonWrapper>
            </div>
          </form>
        </div>
      </div>
    </CustomModalWrapper>
  );
};

export default EnquiryModal;
