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


const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img18, img19, img20,
  img23, img26, img27, img28, img31, img34, img35, img36, img38,
  img39, img42, img43, img44, img45, img46, img47, img48,
];

export default function GallerySection() {
  return (
    <section className="py-20 px-4 bg-[#f3e9cb]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold font-alegreya italic text-center mb-16 text-yellow-700/90">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4">
          <AnimatePresence>
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="relative h-[300px]  overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 break-inside-avoid"
              >
                <Image
                  src={src}
                  alt={`Gallery image}`}
                  className="w-full h-[100%] rounded-xl object-cover transition-transform duration-500 hover:scale-[1.03]"
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
