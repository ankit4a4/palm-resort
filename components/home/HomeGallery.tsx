"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import img from "@/public/Images/AllPhotos/DSC06389.webp";
import img2 from "@/public/Images/AllPhotos/DSC06396.webp";
import img3 from "@/public/Images/AllPhotos/DSC06399.webp";
import img4 from "@/public/Images/AllPhotos/DSC06434.webp";
import img5 from "@/public/Images/AllPhotos/DSC06460.webp";
import img6 from "@/public/Images/AllPhotos/DSC06475.webp";
import img7 from "@/public/Images/AllPhotos/DSC06521.webp";
import Link from "next/link";

export default function HomeGallery() {
  const images = [
    img.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
    img6.src,
    img7.src,
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedImage]);

  return (
    <section className="md:py-[10vh] py-10 bg-[#fbf7f0]">
      <div className="w-[90vw] max-w-[1200px] mx-auto px-[2vw]">
        <div className="text-center mb-[5vh]">
          <h2 className="text-[6vw] md:text-[3vw] capitalize font-playfair font-bold text-yellow-700/90 mb-[1.5vh]">
            Our <span className="">Gallery</span>
          </h2>
          <p className="text-[3.5vw] md:text-[1.3vw] text-gray-600 max-w-[80vw] md:max-w-[50vw] mx-auto">
            Discover the serene ambiance and natural elegance of our spaces
            through this visual journey.
          </p>
        </div>

        {/* Display first 3 images only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.slice(0, 3).map((img, index) => (
            <div
              key={index}
              className="relative h-[30vh] md:h-[40vh] rounded-[2vw] overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-[2vh] left-[2vw] text-[#f3e9cb] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[3.5vw] md:text-[1.2vw] font-semibold">
                  View Image
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10 border px-3 py-2 w-max mx-auto border-yellow-700 hover:bg-yellow-700 hover:text-[#f3e9cb] ">
          <Link href="/gallery">See More</Link>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-[4vw]">
          <div className="relative w-full" ref={modalRef}>
            <div className="relative w-[95%] md:w-[60%] h-[40vh] md:h-[80vh] mx-auto rounded-[1vw]">
              <Image
                src={selectedImage}
                alt="Popup Image"
                fill
                sizes="(max-width: 768px) 90vw, 60vw"
                className="object-contain rounded-[3vw] md:rounded-[1vw]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-[-5vw] top-[-5vw] md:top-[-3vh] md:right-[-8vh] bg-red-600 text-[#f3e9cb] text-[4vw] md:text-[1.5vw] rounded-full w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw] flex items-center justify-center shadow-lg hover:bg-red-700 transition"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
