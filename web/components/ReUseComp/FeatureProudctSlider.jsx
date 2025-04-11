"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import SwiperPrevNextComp from "./SwiperPrevNextComp";

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

const FeatureProudctSlider = () => {
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
              <div key={index} className="  w-full h-full mdP:h-[500px]">
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
        <div className=" absolute z-10 bottom-5 right-5  mdP:bottom-10 mdP:right-10">
          <SwiperPrevNextComp {...{ handleNext, handlePrev }} />
        </div>
      </Swiper>
    </div>
  );
};

export default FeatureProudctSlider;
