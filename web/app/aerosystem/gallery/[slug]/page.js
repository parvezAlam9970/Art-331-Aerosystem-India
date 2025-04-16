"use client";

import DownloadSection from "@/components/aerosystem/gallery/DownloadSection";
import GalleryDetailsMain from "@/components/aerosystem/gallery/GalleryDetailsMain";
import Container from "@/components/custom/Container";
import GalleryDetailsBreadCrumb from "@/components/ReUseComp/GalleryDetailsBreadCrumb";
import { Images } from "@/constants/images";
import React, { useState } from "react";

const timelineData = [
  {
    year: 2025,
    title: "IGM Is Founded",
    content: `Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book.
              Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XcA1Hhes6nrjYc5nh9lNDHGM445UbZ.png",
  },
  {
    year: 2024,
    title: "Global Expansion",
    content: `Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book.
              Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XcA1Hhes6nrjYc5nh9lNDHGM445UbZ.png",
  },
  {
    year: 2023,
    title: "Innovation Award",
    content: `Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book.
              Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XcA1Hhes6nrjYc5nh9lNDHGM445UbZ.png",
  },
  {
    year: 2022,
    title: "New Product Line",
    content: `Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book.
              Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
              And Scrambled It To Make A Type Specimen Book.`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XcA1Hhes6nrjYc5nh9lNDHGM445UbZ.png",
  },
];

const GalleryDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
      <div className=" my-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-10">
            {/* Year tabs */}
            <div className="w-[200px] relative">
              <div className="top-24 flex flex-row md:flex-col items-center md:items-start">
                <div className="hidden md:block absolute left-[30px] top-[30px] w-[2px] h-[calc(100%-60px)] bg-blue-200"></div>
                <div className="md:hidden absolute left-0 top-[30px] w-full h-[2px] bg-blue-200"></div>
                {timelineData.map((item, index) => (
              <button
                key={item.year}
                onClick={() => setActiveIndex(index)}
                className="relative flex items-center mb-0 md:mb-24 mx-4 md:mx-0 focus:outline-none transition-all"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full font-bold transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 text-gray-700 hover:bg-blue-300"
                  }`}
                >
                  {item.year}
                </div>


                {/* Triangle on the right when active */}
                {index === activeIndex && (
                  <div className="absolute left-full -ml-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[12px] border-t-transparent border-b-transparent border-l-blue-500" />
                )}
              </button>
            ))}

              </div>
            </div>

            {/* Content section */}
            <div>
              <div className="sticky top-40">
                <div
                  key={timelineData[activeIndex].year}
                  className="mb-16 md:mb-32 animate-slide-up"
                >
                  <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 pr-0 md:pr-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                          {timelineData[activeIndex].title}
                        </h2>
                        <div className="text-gray-700 space-y-4">
                          {timelineData[activeIndex].content
                            .split("\n\n")
                            .map((paragraph, i) => (
                              <p key={i} className="text-sm md:text-base">
                                {paragraph}
                              </p>
                            ))}
                        </div>
                      </div>
                      <div className="md:w-1/3 mt-6 md:mt-0">
                        <img
                          src={
                            timelineData[activeIndex].image ||
                            "/placeholder.svg"
                          }
                          alt={`${timelineData[activeIndex].year} - ${timelineData[activeIndex].title}`}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GalleryDetails;
