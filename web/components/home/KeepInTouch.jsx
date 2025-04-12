import React from "react";
import Container from "../custom/Container";
import Heading from "../ReUseComp/Heading";

const KeepInTouch = () => {
  return (
    <Container className="my-5 md:my-10">
      <div className=" grid grid-cols-5  bg-[#E3E3E3] py-7 px-10">
        <div className=" col-span-2">
           <Heading className="" isPlane={false}>
             <strong> Keep In Touch </strong>
           </Heading>
           <p className=" text-sm text-lgrey">Lorem Ipsum Is Simply Dummy Text Of The <br /> Printing And Typesetting Industry.</p>
        </div>
        <div className=" col-span-3">three</div>
      </div>
    </Container>
  );
};

export default KeepInTouch;
