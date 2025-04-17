"use client";

import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux-toolkit/slices/modal/modalSlices";
import { Icons } from "@/constants/icons";

const CustomModalWrapper = ({ className, type, children }) => {
  const dispatch = useDispatch();
  const { modalType, isModalOpen } = useSelector((state) => state.modal);

  return (
    <Dialog open={isModalOpen && modalType === type}
     onOpenChange={() => dispatch(closeModal())}
    >
      <DialogContent
        className={cn(
          " bg-white p-0 m-0 outline-none border-none  rounded-none sm:rounded-none",
          className
        )}
      >
        <div
          className=" absolute top-3 right-3 bg-[#9A9A9A] p-1 rounded-full text-white cursor-pointer shadow-sm"
          onClick={() => dispatch(closeModal())}
        >
          <Icons.CLOSE className="text-[16px] md:text-[18px]" />
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModalWrapper;
