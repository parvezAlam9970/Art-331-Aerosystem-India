import { Icons } from "@/constants/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GalleryCards = ({data ,icons,className}) => {
  return (
    <div className=" relative group  cursor-pointer">
      <div className=" h-[250px] md:h-[366px] w-full bg-mgrey relative">
        <div className={cn(" w-[70px] h-[70px]  absolute right-3 top-3",className)}>
          <Image
            src={icons}
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
            alt="cessna-logo"
          />
        </div>
      </div>
      <div className=" absolute -bottom-5 w-[95%] px-4 py-3 bg-sgrey h-16 md:h-20">
        <div className="text-black flex gap-2 justify-between">
          <div className=" md:mt-2">
            <p className=" text-sm">{data?.name}</p>
            <h3 className=" text-xl  font-bold">{data?.title}</h3>

          </div>
          <div className=" group-hover:transition-all group-hover:ease-in-out group-hover:duration-600 group-hover:mt-[-5px] w-[45px] md:w-[55px] h-[45px] md:h-[55px] bg-black text-white flex items-center text-center justify-center">
          <Link  href={`/aerosystem/gallery/${data?.slug}`}>
            <Icons.ARROW_RIGHT className="-rotate-45 text-[35px]" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
