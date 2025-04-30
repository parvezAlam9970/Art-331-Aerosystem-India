"use client";
import React, { useRef, useState } from "react";
import RangeMap from "./RangeMap";

const locations = [
  { name: "Center of India", position: [20.5937, 78.9629] },
  { name: "Jaisalmer", position: [26.9157, 70.9160] },
  { name: "Delhi", position: [28.6139, 77.2090] },
  { name: "Mumbai", position: [19.0760, 72.8777] },
  { name: "Rashtrapati Bhavan", position: [28.6143, 77.1995] },
  { name: "Gateway of India", position: [18.921984, 72.834654] },
  { name: "Charminar", position: [17.3616, 78.4747] },
  { name: "India Gate", position: [28.6129, 77.2295] },
  { name: "Qutub Minar", position: [28.5244, 77.1855] },
  { name: "Taj Mahal", position: [27.1751, 78.0421] },
  { name: "Victoria Memorial", position: [22.5448, 88.3426] },
  { name: "Howrah Bridge", position: [22.5850, 88.3468] },
  { name: "Mysore Palace", position: [12.3051, 76.6551] },
  { name: "Hawa Mahal", position: [26.9239, 75.8267] },
  { name: "Red Fort", position: [28.6562, 77.2410] },
  { name: "Sanchi Stupa", position: [23.4793, 77.7369] },
  { name: "Konark Sun Temple", position: [19.8876, 86.0945] },
  { name: "Meenakshi Temple", position: [9.9195, 78.1195] },
  { name: "Golden Temple", position: [31.6200, 74.8765] },
  { name: "Statue of Unity", position: [21.8380, 73.7191] },
  { name: "Parliament of India", position: [28.6172, 77.2085] },
  { name: "Lotus Temple", position: [28.5535, 77.2588] },
  { name: "Nalanda University Ruins", position: [25.1357, 85.4434] },
  { name: "Rock Garden, Chandigarh", position: [30.7500, 76.7800] },
];

const FlyingSchoolsClubsMain = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const markerRefs = useRef({});
  const [flyToPosition, setFlyToPosition] = useState(null);

  const handleLocationClick = (location) => {
    setFlyToPosition(location.position);
    setActiveLocation(location.name); // Set active location
    const marker = markerRefs.current[location.name];
    if (marker) {
      marker.openPopup();
    }
  };

  return (
    <div className="my-5 md:my-10 lg:my-16 grid grid-cols-3 gap-5">
      <div className="col-span-1 px-4 py-6 bg-white shadow-lightShadow">
        <h3 className="font-bold text-2xl">USING CESSNA AIRCRAFTS</h3>
        <div
          className="max-h-[500px] p-3 overflow-y-auto 
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-[#D8E8F4]
          [&::-webkit-scrollbar-thumb]:bg-[#1277BD]
          dark:[&::-webkit-scrollbar-track]:bg-[#D8E8F4]
          dark:[&::-webkit-scrollbar-thumb]:bg-[#1277BD]"
        >
          {locations.map((loc) => (
            <button
              key={loc.name}
              onClick={() => handleLocationClick(loc)}
              className={`w-full text-left py-2 border-b transition ${
                activeLocation === loc.name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <RangeMap
          locations={locations}
          markerRefs={markerRefs}
          flyToPosition={flyToPosition}
        />
      </div>
    </div>
  );
};

export default FlyingSchoolsClubsMain;
