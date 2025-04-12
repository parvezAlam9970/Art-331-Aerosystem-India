"use client";
import React, { useEffect, useState } from "react";

const TimeDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options)
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-GB")
  };

  return (
    <div className="absolute right-16 md:right-14 top-0 flex gap-3 font-mono text-white">
      <div className="bg-[#6C6C6C] rounded-b-lg px-2 py-[2px] min-w-[100px] text-center">
        <span className="text-[12px] block">{formatDate(currentTime)}</span>
      </div>
      <div className="bg-[#6C6C6C] rounded-b-lg px-2 py-[2px] min-w-[80px] text-center">
        <span className="text-[12px] block">{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default TimeDate;
