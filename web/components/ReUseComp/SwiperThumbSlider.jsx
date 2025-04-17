"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Container from "../custom/Container";
import { Icons } from "@/constants/icons";

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

const SwiperThumbSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Handle autoplay with custom timing
  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current?.slideNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbClick = (index) => {
    swiperRef.current?.slideToLoop(index);
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div>
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={1500}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className=" h-full md:h-[450px] lg:h-[600px]"
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index} className=" ">
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-4 md:px-16">
                <div className="text-white ">
                  <span className="text-[24px] font-medium">{item.code}</span>

                  <h2 className="text-[48px] font-bold">{item.name}</h2>
                  <p className="text-[16px]">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Container className="absolute bottom-0 xl:bottom-5 left-0 w-full p-4 z-10">
          <div className="mt-4 flex justify-center md:justify-between gap-2">
            <div className=" flex gap-4">
              {images?.map((item, index) => (
                <div
                  key={index}
                  className={`w-[45px] md:w-[60px] cursor-pointer h-[40px] md:h-[55px] ${
                    index === activeIndex ? "" : "filter grayscale"
                  } `}
                  onClick={() => handleThumbClick(index)}
                >
                  <img
                    src={item?.src}
                    width={70}
                    height={60}
                    className=" w-full h-full "
                  />
                </div>
              ))}
            </div>
            <div className=" hidden md:flex justify-center items-center text-center gap-2 ">
              <span
                className="text-white cursor-pointer border-2 border-white p-1"
                onClick={handlePrev}
              >
                <Icons.ARROW_LEFT className="text-[25px] lg:text-[32px]" />
              </span>
              <span
                className="text-white cursor-pointer border-2 p-1 border-white"
                onClick={handleNext}
              >
                <Icons.ARROW_RIGHT className="text-[25px] lg:text-[32px]" />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SwiperThumbSlider;
