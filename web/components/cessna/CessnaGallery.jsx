"use client";

import React, { useRef } from "react";
import Container from "../custom/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Heading from "../ReUseComp/Heading";
import SwiperPrevNextComp from "../ReUseComp/SwiperPrevNextComp";
import GalleryDetailsCards from "../ReUseComp/GalleryDetailsCards";

const CessnaGallery = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <Container>
      <div className=" flex justify-between items-center mb-8      ">
        <Heading isPlane={false} className="font-bold">
          Gallery
        </Heading>
        <div>
          <SwiperPrevNextComp {...{ handleNext, handlePrev }} />
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper "
      >
        {Array(10)
          .fill()
          .map((_, index) => {
            return (
              <SwiperSlide className=" mb-10">
                <GalleryDetailsCards key={index} isDownload={false}/>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default CessnaGallery;
