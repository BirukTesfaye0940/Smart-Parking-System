'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function LotMap({ latitude, longitude }) {
  const [L, setL] = useState(null);
  const [markerIcon, setMarkerIcon] = useState(null);

  useEffect(() => {
    // Dynamically import leaflet only on client side
    import('leaflet').then((leaflet) => {
      setL(leaflet);

      const icon = new leaflet.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
      });

      setMarkerIcon(icon);
    });
  }, []);

  if (!L || !markerIcon) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="h-96 w-full">
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={markerIcon}>
          <Popup>Parking Lot Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
