"use client";
import React, { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import { Menu as MenuIcon } from "lucide-react";
import Container from "@/components/custom/Container";
import Image from "next/image";
import Link from "next/link";
import MenuLinks from "./MenuLinks";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileMenu from "./MobileMenu";
import TimeDate from "@/components/home/TimeDate";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-20 border-b-[1px] border-white ${
        !isScrolled
          ? "bg-transparent backdrop-blur-[2px]"
          : "backdrop-blur-[4px] bg-[#1B1B1B]"
      } shadow-custom-light`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="py-2 lg:py-0">
            <Image
              src={"/logo/logo.svg"}
              width={166}
              height={78}
              className="w-[144px] h-[60px] xl:w-[166px] xl:h-[78px]"
              alt="Logo"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <MenuLinks isScrolled={isScrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet className="lg:hidden">
              <SheetTrigger className="text-white">
                <MenuIcon className="w-6 h-6" />
              </SheetTrigger>
              <MobileMenu />
            </Sheet>
          </div>
        </div>
      </Container>
      <TimeDate/>
    </header>
  );
};

export default Header;
