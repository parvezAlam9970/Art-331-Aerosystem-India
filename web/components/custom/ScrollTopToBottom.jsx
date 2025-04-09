"use client";
import React, { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa6";

const ScrollTopToBottom = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const scrollPercent = (scrollTop / scrollHeight) * 100; 
    setScrollProgress(scrollPercent);

    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    {isVisible && (
      <div className="go_to_top_btn">
        <div
          onClick={scrollToBottom}
          className="relative w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer"
        >
          <div
            className="circular-progress absolute inset-0 w-full h-full rounded-full p-2"
            style={{
              background: `conic-gradient(#0C4DA2 ${scrollProgress}%, transparent 0)`,
            }}
          />
          <div className="bg-white z-50 rounded-full w-[42px] h-[42px] flex justify-center items-center text-center">
            <FaAngleUp color='#0C4DA2' size={20}/>
          </div>
        </div>
    </div>
      )}
</>
  );
};

export default ScrollTopToBottom;
