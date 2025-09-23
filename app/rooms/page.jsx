"use client";

import RoomsGrid from "@/components/rooms/RoomsGrid"
import RoomFeature from "@/components/rooms/RoomFeature";
import HeroSection from "@/components/home/HeroSection";
import HomeRooms from "@/components/home/HomeRooms"
import GallerySection from "@/components/home/GallerySection";

export default function Rooms() {
  return (
    <div>
      <HeroSection showHeading="false" welcomeHeading="Accommodation" />
      <GallerySection />

      <HomeRooms />

      <RoomFeature />
    </div>
  );
}
