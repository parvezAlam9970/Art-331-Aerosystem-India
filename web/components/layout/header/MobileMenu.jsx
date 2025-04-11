"use client";
import React, { useState } from "react";
import {
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeaderLinks } from "@/constants/Links";
import { Icons } from "@/constants/icons";

const MobileMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SheetContent side="right" className="bg-[#1B1B1B] text-white">
      <SheetHeader className="mb-4">
        <Image
          src="/logo/logo.svg"
          width={120}
          height={60}
          alt="Logo"
          className="mx-auto"
        />
      </SheetHeader>

      <nav className="space-y-2 px-1 md:px-2">
        {HeaderLinks.MENU_LINKS.map((item, index) => (
          <div key={index}>
            {item?.Children ? (
              <Collapsible
                open={openIndex === index}
                onOpenChange={() => handleToggle(index)}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full px-1 md:px-3 py-1 md:py-2 text-left rounded hover:bg-white/10">
                  <span>{item.name}</span>
                  {openIndex === index ? (
                    <Icons.ARROW_UP className="text-[22px]" />
                  ) : (
                    <Icons.ARROW_DOWN className="text-[22px]" />
                  )}
                </CollapsibleTrigger>

                {/* Smooth transition added below */}
                <CollapsibleContent
                  className=" pl-2 md:pl-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
                >
                  {item?.Children?.map((child, i) => (
                    <Link
                      key={i}
                      href={child.path}
                      className="  py-1 rounded hover:bg-white/10 text-[14px] flex gap-2  items-center "
                    >
                      <span className="border-[1px] border-grey flex justify-center items-center p-1 text-lgrey rounded-md line-clamp-1">
                        {child.icons}
                      </span>
                     <span>{child.name}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link
                href={item.path}
                className="block px-1 md:px-3 py-1 md:py-2 rounded hover:bg-white/10"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </SheetContent>
  );
};

export default MobileMenu;
