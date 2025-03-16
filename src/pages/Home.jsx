import React from "react";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <div className="flex-grow flex items-center justify-center px-2 py-1">
        <div className="relative w-full h-full">
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}