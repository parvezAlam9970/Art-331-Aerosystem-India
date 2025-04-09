"use client";
import React, { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Container from "@/components/custom/Container";
import Image from "next/image";
import Link from "next/link";
import MenuLinks from "./MenuLinks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-20 border-b-[1px] border-white ${
          !isScrolled
            ? "bg-transparent backdrop-blur-[2px]"
            : " backdrop-blur-[4px] bg-[#1B1B1B] "
        }  shadow-custom-light`}
      >
        <Container>
          {/* Desktop Header */}
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={"/logo/logo.svg"}
                width={166}
                height={78}
                className=" w-[144px] h-[60px]  xl:w-[166px] xl:h-[78px] "
                alt="Logo"
                priority
              />
            </Link>
            <nav>
            <MenuLinks isScrolled={isScrolled} />
            </nav>
          </div>

          {/* Mobile Header */}
          {/* <div className="flex md:hidden justify-between items-center">
          <Link href="/">
            <Image
              src={`/home/logo.svg`}
              width={75}
              height={60}
              alt="Logo"
              priority
            />
          </Link>
          <button
            className={`flex items-center justify-center text-white w-10 h-10`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div> */}
        </Container>

        {/* Mobile Menu */}
      </header>
    </>
  );
};

export default Header;
