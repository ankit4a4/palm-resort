"use client";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

import img1 from "../../public/Images/gallery/newg1.jpeg";
import img2 from "../../public/Images/gallery/newg2.jpeg";
import img3 from "../../public/Images/gallery/newg3.jpeg";
import img4 from "../../public/Images/gallery/newg4.jpeg";
import img5 from "../../public/Images/gallery/newg5.jpeg";
import img6 from "../../public/Images/gallery/newg6.jpeg";
import img7 from "../../public/Images/gallery/newg7.jpeg";
import img8 from "../../public/Images/gallery/newg8.jpeg";

import img9 from "../../public/Images/AllPhotos/gardenView.webp";
import img10 from "../../public/Images/AllPhotos/indoorGame1.webp";
import img11 from "../../public/Images/AllPhotos/mud-house.webp";
import img12 from "../../public/Images/AllPhotos/outdoorDining.webp";
import img13 from "../../public/Images/AllPhotos/pool.webp";
import img14 from "../../public/Images/AllPhotos/swiss.webp";

import img15 from "../../public/Images/ayush-dining/1.jpg";
import img16 from "../../public/Images/ayush-dining/2.jpg";
import img18 from "../../public/Images/ayush-dining/4.jpg";
import img19 from "../../public/Images/ayush-dining/11.png";

import img20 from "../../public/Images/familyRoom/1.webp";
import img23 from "../../public/Images/familyRoom/4.webp";

import img26 from "../../public/Images/gallery/2.webp";
import img27 from "../../public/Images/gallery/3.webp";
import img28 from "../../public/Images/gallery/4.webp";
import img31 from "../../public/Images/gallery/7.webp";
import img34 from "../../public/Images/gallery/10.webp";
import img35 from "../../public/Images/gallery/11.webp";
import img36 from "../../public/Images/gallery/12.webp";
import img38 from "../../public/Images/gallery/14.webp";
import img39 from "../../public/Images/gallery/15.webp";
import img42 from "../../public/Images/gallery/18.webp";
import img43 from "../../public/Images/gallery/19.jpg";
import img44 from "../../public/Images/gallery/20.jpg";
import img45 from "../../public/Images/gallery/21.jpg";
import img46 from "../../public/Images/gallery/22.jpg";
import img47 from "../../public/Images/gallery/23.jpg";
import img48 from "../../public/Images/gallery/24.jpg";

import img52 from "@/public/Images/ring/RingCeremony2.jpg";
import img53 from "@/public/Images/ring/RingCeremony3.jpg";
import img54 from "@/public/Images/ring/RingCeremony3.jpg";
import img55 from "@/public/Images/ring/RingCeremony5.jpg";
import img56 from "@/public/Images/ring/RingCeremony6.jpg";
import img57 from "@/public/Images/ring/RingCeremony7.webp";
import img58 from "@/public/Images/ring/RingCeremony8.jpg";
import img59 from "@/public/Images/ring/RingCeremony9.jpg";
import img60 from "@/public/Images/ring/RingCeremony10.jpeg";
import img61 from "@/public/Images/ring/RingCeremony11.jpg";

import img62 from "@/public/Images/birthday/birthday1.jpg";
import img63 from "@/public/Images/birthday/birthday2.webp";
import img64 from "@/public/Images/birthday/birthday3.webp";
import img65 from "@/public/Images/birthday/birthday4.webp";
import img66 from "@/public/Images/birthday/birthday5.jpg";
import img67 from "@/public/Images/birthday/birthday6.jpg";
import img68 from "@/public/Images/birthday/birthday7.jpg";
import img69 from "@/public/Images/birthday/birthday8.jpg";

import img71 from "@/public/Images/mehndiImages/Mehndi1.jpg";
import img72 from "@/public/Images/mehndiImages/Mehndi2.jpg";
import img73 from "@/public/Images/mehndiImages/Mehndi4.jpg";
import img74 from "@/public/Images/mehndiImages/Mehndi5.jpg";
import img75 from "@/public/Images/mehndiImages/Mehndi6.jpg";
import img76 from "@/public/Images/mehndiImages/Mehndi7.jpg";

const galleryImages = [
  img1,img9,img52,img2,img31,img63,img3,img15,img71,img4,img10,img55,img5,
  img35,img62,img38,img6,img23,img56,img7,img14,img73,img8,img11,img66,img18,
  img57,img26,img45,img12,img64,img28,img39,img13,img74,img67,img53,img34,
  img16,img72,img60,img27,img19,img65,img42,img59,img36,img20,img43,img68,
  img54,img31,img48,img61,img28,img47,img75,img5,img69,img44,img76,img45, img46
];

export default function GallerySection() {
  return (
    <section className="py-20 px-4 bg-[#f3e9cb]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold font-alegreya italic text-center mb-16 text-yellow-700/90">
          Our Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="relative h-[300px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={src}
                  alt="Gallery Image"
                  className="w-full h-full rounded-xl object-cover transition-transform duration-500 hover:scale-[1.03]"
                  placeholder="blur"
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
