import React from "react";
import Container from "../custom/Container";
import { Icons } from "@/constants/icons";
import Heading from "../ReUseComp/Heading";

const GoogleMapContainer = () => {
  return (
    <Container className="my-5 md:my-10 lg:my-16">
      <div className="flex gap-2 items-center pb-3">
        <Icons.PLANE className=" text-2xl rotate-45" />
        <span className="text-xl md:text-2xl">Maps</span>
      </div>
      <Heading isPlane={false}>
        We are<b> On Map</b>
      </Heading>
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.681198461782!2d77.13624827529162!3d28.699181675628527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d0eb400001%3A0x3b274a5032053d8a!2sArramton%20Infotech%20Pvt%20Ltd%2C%20Software%20Development%2C%20Web%20Design%2C%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1745215147975!5m2!1sen!2sin"
          
          className=" border-none w-full text-[350px    ] md:h-[480px]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default GoogleMapContainer;
