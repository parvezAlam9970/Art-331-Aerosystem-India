"use client"

import DownloadSection from "@/components/aerosystem/gallery/DownloadSection";
import GalleryDetailsMain from "@/components/aerosystem/gallery/GalleryDetailsMain";
import GalleryImgViewModal from "@/components/custom/modal/GalleryImgViewModal";
import GalleryDetailsBreadCrumb from "@/components/ReUseComp/GalleryDetailsBreadCrumb";
import { Images } from "@/constants/images";
import React, { useState } from "react";
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const GalleryDetails = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div>
      <div className=" relative">
        <GalleryDetailsBreadCrumb
          subtitle="Cessna"
          title="Cessna Skyhawk"
          img={Images.TESTING_IMG.src}
        />
        <div className=" absolute -bottom-16 w-full">
          <DownloadSection />
        </div>
      </div>
      <div className=" mt-[120px]"></div>
      <GalleryDetailsMain />
    </div>

    <GalleryImgViewModal type={"IMG_VIEW"} />

    </>
  );
};

export default GalleryDetails;
