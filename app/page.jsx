"use client"
import LotMap from '../components/LotMap';


export default function LotPage() {
  const latitude = 9.034437;
  const longitude = 38.760524;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Lot Location</h1>
      <LotMap latitude={latitude} longitude={longitude} />
    </div>
  );
}
