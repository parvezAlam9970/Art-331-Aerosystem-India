"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Container from "../custom/Container";
import { Icons } from "@/constants/icons";

const images = [
  {
    src: "/image/plane1.jpg",
    name: "Boeing 747",
    code: "B747",
    desc: "A large, long–range wide-body airliner designed by Boeing.",
  },
  {
    src: "/image/plane2.jpg",
    name: "Airbus A380",
    code: "A380",
    desc: "The world’s largest passenger airliner developed by Airbus.",
  },
  {
    src: "/image/plane3.jpg",
    name: "Concorde",
    code: "CONC",
    desc: "A turbojet-powered supersonic passenger airliner.",
  },
  {
    src: "/image/plane4.jpg",
    name: "Cessna 172",
    code: "C172",
    desc: "A popular single-engine aircraft used for training and private flying.",
  },
];

const HomeBannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const progressRefs = useRef([]);

  // Handle autoplay with custom timing
  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current?.slideNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate progress bar for active thumbnail
  useEffect(() => {
    progressRefs.current.forEach((bar, idx) => {
      if (!bar) return;
      bar.style.transition = "none";
      bar.style.width = "0%";

      if (idx === activeIndex) {
        void bar.offsetWidth; // trigger reflow
        bar.style.transition = "width 5s linear";
        bar.style.width = "100%";
      }
    });
  }, [activeIndex]);

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
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1500}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        // style={{height:"100vh"}}
        className=" h-[450px] lg:h-screen"
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
        <div className="mt-4 grid grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6 w-full">
          {images?.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer col-span-1     overflow-hidden relative transition-all
              ${
                    index === activeIndex ? 'text-white' : 'text-gray-400'
                } `}
              onClick={() => handleThumbClick(index)}
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-400 rounded-md">
                <div
                  ref={(el) => (progressRefs.current[index] = el)}
                  className={`h-full  rounded-md ${index === activeIndex ? 'bg-blue-500' : ''}`}
                  style={{ width: "0%" }}
                ></div>
              </div>
              <div className=" text-sm p-1 flex items-center text-center gap-1 md:gap-3 my-2 lg:my-5">
                <span className=" ">
                  <Icons.PLANE className=" text-[15px] md:text-[28px]  rotate-45" />
                </span>
                <span className="text-[15px] md:text-[24px] font-medium">{item.code}</span>
              </div>
              <div className=" text-sm p-1 my-2 lg:my-4 hidden md:block ">
                <span className="text-[22px] lg:text-[30px] xl:text-[34px] font-medium">{item.name}</span>
              </div>
            </div>
          ))}
          <div className=" hidden md:flex justify-center items-center text-center gap-2 ">
            <span className="text-white cursor-pointer border-2 border-white p-1" onClick={handlePrev}>
            <Icons.ARROW_LEFT className="text-[25px] lg:text-[32px]"/>
            </span>
            <span className="text-white cursor-pointer border-2 p-1 border-white" onClick={handleNext}>
            <Icons.ARROW_RIGHT className="text-[25px] lg:text-[32px]"/>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBannerSlider;
