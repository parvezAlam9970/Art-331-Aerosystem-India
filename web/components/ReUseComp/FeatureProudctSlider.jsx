"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import SwiperPrevNextComp from "./SwiperPrevNextComp";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/image/plane1.jpg",
  },
  {
    src: "/image/plane2.jpg",
  },
  {
    src: "/image/plane3.jpg",
  },
  {
    src: "/image/plane4.jpg",
  },
];

const FeatureProudctSlider = ({isLeftArrow=false,className}) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1500}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}

        className="relative"
      >
        {images?.map((item, index) => {
          return (
            <SwiperSlide>
              <div key={index} className={cn("w-full h-full lg:h-[500px]",className)}>
                <Image
                  src={item.src}
                  alt={index}
                  width={2000}
                  height={2000}
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`absolute z-20 ${isLeftArrow ? "bottom-5 left-5  lg:bottom-10 lg:left-10":"bottom-5 right-5  lg:bottom-10 lg:right-10"}`}>
          <SwiperPrevNextComp {...{ handleNext, handlePrev }} />
        </div>
      </Swiper>
    </div>
  );
};

export default FeatureProudctSlider;
