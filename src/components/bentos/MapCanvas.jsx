import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, Point } from "leaflet";
import "leaflet/dist/leaflet.css"

const customIcon = new Icon({
  iconUrl: "/map-pointer.png",
  iconSize: [64, 64],
  iconAnchor: [32, 52],
});



export default function MapCanvas(){

  return(
    <div className="bento-map">
      <MapContainer center={[-32.89098150313837, -68.84535570603789]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-32.89098150313837, -68.84535570603789]} icon={customIcon}>
          <Popup offset={[0, -35]} >¡Aquí estoy!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}