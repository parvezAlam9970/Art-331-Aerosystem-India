import { Icons } from "@/constants/icons";
import { HeaderLinks } from "@/constants/Links";
import React, { useState } from "react";
import { HeaderLinksData } from "@/constants/linkData";

const MenuLinks = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [activeSimple, setActiveSimple] = useState(null);

  return (
    <div className="flex gap-3 xl:gap-5 justify-center items-center text-center z-50">
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
                  className={`absolute left-0 top-full w-screen min-h-[75vh] bg-white text-black z-50 pt-24 px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto visible"
                      : "opacity-0 translate-y-4 pointer-events-none invisible"
                  }`}
                >
                  <h2 className="text-3xl font-semibold mb-8">{item.name}</h2>
                  <ul className="flex flex-col gap-6 text-lg">
                    {item.Children.map((child, idx) => (
                      <li
                        key={idx}
                        className="hover:underline cursor-pointer transition-colors"
                        onClick={() => setActiveOverlay(null)}
                      >
                        {child.name}
                      </li>
                    ))}
                  </ul>
                 <h2>new one</h2>
                 {HeaderLinksData[item.name] && (
                <ul className="flex flex-col gap-6 text-lg">
                  {HeaderLinksData[item.name].map((child, idx) => (
                    <li
                      key={child.id ?? idx}
                      className="hover:underline cursor-pointer transition-colors"
                      onClick={() => setActiveOverlay(null)}
                    >
                      {child.name}
                    </li>
                  ))}
                </ul>
              )}
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
              <li className="text-[14px] flex gap-1 items-center py-10 cursor-pointer group">
                {item.name}
                {hasChildren && (
                  <span className="text-sm">
                    <Icons.PLUS className="text-[18px]" />
                  </span>
                )}
              </li>

              {hasChildren && item.type === "simple" && (
                <ul
                  className={`absolute top-full bg-white -left-5 text-black shadow-md px-6 py-4 transition-all duration-300 ease-in-out z-10 overflow-hidden ${
                    isSimpleOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto visible"
                      : "opacity-0 translate-y-4 pointer-events-none invisible"
                  }`}
                >
                  {item.Children.map((child, idx) => (
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
