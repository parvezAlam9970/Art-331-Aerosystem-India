import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Util from "../util/helperFunction";

const CoruseSlider = ({ data }) => {
  console.log("data", data);

  const settings = {
    dots: true,
    infinite: false ,
    arrows:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full slider-container course_silder testimonials_slider_container h-full mb-10">
      <Slider {...settings}>
        {data?.map((val, inx) => {
          return (
            <div key={inx} className="sm:px-2 my-3 mt-0 mb-8 sm:mb-3">
              <div className="rounded-md h-[440px] shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-[220px] overflow-hidden rounded-t-md">
                  <Image
                    src={'/images/course-img.png'}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[18px] h-[44px] font-semibold mb-2">{val.courseName}</h3>
                   <p className="text-[16px]  md:line-clamp-2 "> <span className="font-semibold">Eligibility</span> : {val.eligibility}</p>
                  <p className="pt-3 text-[14px] text-[#807e7e]">{Util.trimText(val.careerPath, 115)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CoruseSlider;
