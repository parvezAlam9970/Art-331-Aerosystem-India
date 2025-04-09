import Container from "@/components/custom/Container";
import React from "react";

const TopHeader = () => {
  return (
    <div className=" h-30 bg-secondary ">
      <Container>
        <div className="text-center items-center">
            <p className="text-white text-[13px] sm:text[16px] py-1 lg:text-[18px] font-normal">20% Discount On Every Admission</p>
        </div> 
      </Container>
    </div>
  );
};

export default TopHeader;
