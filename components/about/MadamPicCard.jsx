"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/public/Images/about1.jpg"
import img2 from "@/public/Images/about2.jpg"
import img3 from "@/public/Images/about3.jpg"
import img4 from "@/public/Images/about4.jpg"
import img5 from "@/public/Images/about5.jpg"
import img6 from "@/public/Images/about6.jpg"
import img7 from "@/public/Images/about7.jpg"

export default function MadamProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const pics = [
    img2.src,
    img3.src,
    img4.src,
    img5.src,
    img6.src,
    img7.src,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    Autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-[#f3e9cb]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/3 h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={img1.src}
            alt="Dr. Urmilla N. Pandey"
            fill
            className="object-cover object-top "
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/1 text-gray-900">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#AA7021]">
            Dr. Urmilla N. Pandey
          </h2>
          <p className="text-lg mb-4">
            Dr. Urmilla N. Pandey is a highly experienced Yoga and Rekhi teacher
            committed to promoting holistic health, wellness, and mindfulness.
            Her expertise blends physical postures, breathing techniques, and
            meditation to enhance flexibility, energy, and mental clarity.
          </p>
          <p className="text-base mb-6">
            With a deep connection to traditional healing, she guides her
            students to achieve balance, strength, and inner peace. Her
            approach nurtures both body and soul, making every session a
            transformative experience.
          </p>

          {/* Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#AA7021] text-[#f3e9cb] font-semibold px-6 py-3 rounded-full hover:bg-[#8c5d18] transition shadow-md"
          >
            View Madam Pics
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-[#A17633] rounded-xl w-full max-w-2xl p-6 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-600 font-bold text-2xl"
            >
              &times;
            </button>

            {/* Slider */}
            <Slider {...settings}>
              {pics.map((pic, index) => (
                <div
                  key={index}
                  className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden"
                >
                  <Image
                    src={pic}
                    alt={`Madam Pic ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </section>
  );
}
