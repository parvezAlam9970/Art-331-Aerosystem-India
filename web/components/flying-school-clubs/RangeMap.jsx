"use client";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = L.divIcon({
  className: "custom-div-icon",
  html: `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="40" height="40">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
  </svg>`,
  iconSize: [30, 40],   
  iconAnchor: [15, 40], 
});


function FlyTo({ position }) {
  const map = useMap();
  if (position) map.flyTo(position, 7);
  return null;
}

const RangeMap = ({ locations, markerRefs, flyToPosition }) => {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {flyToPosition && <FlyTo position={flyToPosition} />}
      {locations.map((loc) => (
        <Marker
          key={loc.name}
          position={loc.position}
          icon={markerIcon}
          ref={(ref) => {
            if (ref) {
              markerRefs.current[loc.name] = ref;
              ref.on("click", () => {
                const [lat, lng] = loc.position;
                window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
              });
            }
          }}
        >
          <Popup
          >{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RangeMap;
