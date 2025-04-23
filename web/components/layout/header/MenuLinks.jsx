import { Icons } from "@/constants/icons";
import { HeaderLinks } from "@/constants/Links";
import React, { useState } from "react";
import { HeaderLinksData } from "@/constants/linkData";
import Link from "next/link";
import Container from "@/components/custom/Container";
import Image from "next/image";
import { Images } from "@/constants/images";

const MenuLinks = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [activeSimple, setActiveSimple] = useState(null);

  return (
    <div className="flex gap-3 xl:gap-5 justify-center items-center  z-50">
      <ul className="text-white flex gap-3 xl:gap-5">
        {HeaderLinks.MENU_LINKS.map((item, indx) => {
          const hasChildren = !!item?.Children;
          if (item.type === "overlay") {
            const isOpen = activeOverlay === indx;
            return (
              <div
                key={indx}
                className=""
                onMouseEnter={() => setActiveOverlay(indx)}
                onMouseLeave={() => setActiveOverlay(null)}
              >
                <li className="text-[14px] flex gap-1 items-center py-10 cursor-pointer group">
                  {item.name}
                  {hasChildren && (
                    <span className="text-sm">
                      <Icons.PLUS className="text-[18px]" />
                    </span>
                  )}
                </li>

                <div
                  className={`absolute left-0 top-full w-screen h-screen text-black z-50 transition-all duration-300 ease-in-out overflow-hidden bg-gradient-to-b from-black/80 via-black/60 to-transparent ${
                    isOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto visible"
                      : "opacity-0 translate-y-4 pointer-events-none invisible"
                  }`}
                >
                  <Container className="pt-16 grid grid-cols-4 gap-5 ">
                  <div className={` col-span-1 border-r-2 border-white`}>
                  {item.Children.map((child, idx) => (
                    <Link href={child.path}>
                      <li
                        key={idx}
                        className="my-4 whitespace-nowrap flex gap-4 items-center text-[20px]"
                        onClick={() => setActiveOverlay(null)}
                      >
                        <span className="border-[1px] border-grey flex justify-center items-center p-2 text-lgrey rounded-md line-clamp-1">
                          {child.icons}
                        </span>
                        <span className="flex items-center text-white gap-2 text-[20px]">
                          {child.name}
                          <Icons.ARROW_RIGHT className="-rotate-45" />
                        </span>
                      </li>
                    </Link>
                  ))}
                  </div>
                    <div className={` col-span-3`}>
                      {HeaderLinksData[item.name] && (
                        <div className="flex  flex-wrap gap-6 text-lg">
                          {HeaderLinksData[item.name].map((child, idx) => (
                            <div
                              key={child.id ?? idx}
                              className="hover:underline cursor-pointer transition-colors "
                              onClick={() => setActiveOverlay(null)}
                            >
                              <div className="w-[300px] h-[200px]">

                              <Link href={child?.path} className="">
                                <Image
                                  src={child?.images || Images.TESTING_IMG}
                                  width={1000}
                                  height={1000}
                                  className=" w-full h-full"
                                />
                              </Link>
                              </div>

                              <div className=" py-2">
                                <p className="text-white text-center  ">{item?.name}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Container>
                </div>
              </div>
            );
          }

          const isSimpleOpen = activeSimple === indx;

          return (
            <div
              key={indx}
              className="relative"
              onMouseEnter={() => setActiveSimple(indx)}
              onMouseLeave={() => setActiveSimple(null)}
            >
              <Link href={item?.path}>
              <li className="text-[14px] flex gap-1 items-center py-10 cursor-pointer group">
                {item.name}
                {hasChildren && (
                  <span className="text-sm">
                    <Icons.PLUS className="text-[18px]" />
                  </span>
                )}
              </li>
              </Link>

              {hasChildren && item.type === "simple" && (
                <ul
                  className={`absolute top-full bg-white -left-5 text-black shadow-md px-6 py-4 transition-all duration-300 ease-in-out z-10 overflow-hidden ${
                    isSimpleOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto visible"
                      : "opacity-0 translate-y-4 pointer-events-none invisible"
                  }`}
                >
                  {item.Children.map((child, idx) => (
                    <Link href={child.path}>
                      <li
                        key={idx}
                        className="my-4 whitespace-nowrap flex gap-4 items-center text-[20px]"
                        onClick={() => setActiveSimple(null)}
                      >
                        <span className="border-[1px] border-grey flex justify-center items-center p-2 text-lgrey rounded-md line-clamp-1">
                          {child.icons}
                        </span>
                        <span className="flex items-center gap-2">
                          {child.name}
                          <Icons.ARROW_RIGHT className="-rotate-45" />
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </ul>

      {/* Search + Call Section */}
      <div className="border-l-[1px] border-white flex gap-2 xl:gap-4 items-center pl-4">
        <Icons.SEARCH className="text-[25px] text-white" />
        <div className="flex gap-3 items-center">
          <div className="bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center">
            <Icons.CALL_OUTLINE className="text-[22px] text-black" />
          </div>
          <div className="flex flex-col text-white text-left">
            <span className="text-[12px]">Call Us</span>
            <span className="text-[15px] font-medium">+91 00000 00000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLinks;
