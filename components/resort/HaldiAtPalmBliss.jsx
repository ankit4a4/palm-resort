import React from "react";
import { TreePalm, Sparkles, Music2 } from "lucide-react";

const HaldiHighlightSection = () => {
  return (
    <section className="relative w-full bg-[#F3E9CB] py-28 px-6 md:px-12 overflow-hidden">
      {/* Decorative Floral Corners */}
      {/* <div className="absolute top-0 left-0 w-40 h-40 bg-[url('https://i.ibb.co/4jSx6Rd/floral-corner.png')] bg-no-repeat opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[url('https://i.ibb.co/4jSx6Rd/floral-corner.png')] bg-no-repeat rotate-180 opacity-30"></div> */}

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl italic font-playfai font-serif font-bold text-[#6B4F2C] tracking-wide mb-6">
          Haldi at <span className="text-[#A17633]">The Palm Bliss Resort</span>
        </h2>
        <div className="w-44 h-1 bg-gradient-to-r from-[#D4AF37] via-[#A17633] to-[#D4AF37] mx-auto rounded-full mb-8 shadow-md"></div>
        <p className="text-xl md:text-1xl text-[#5A4632] font-light italic font-playfai mb-20">
          🌼 A Celebration in Nature’s Embrace 🌼
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Scenic Outdoor Venues */}
          <div
            className="relative group p-12 bg-gradient-to-b from-[#EFE3C6] to-[#E3D2A6] rounded-3xl shadow-xl border border-[#D1B68E]/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-tr from-[#A17633] to-[#C8A96A] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <TreePalm className="w-10 h-10 text-[#F3E9CB]" />
            </div>
            <h3 className="mt-12 text-2xl italic font-playfai font-semibold text-[#6B4F2C] mb-4">
              Scenic Outdoor Venues 
            </h3>
            <p className="text-[#4B3824] text-lg leading-relaxed">
              Celebrate amidst lush greenery, fresh air, and natural beauty for
              an unforgettable Haldi experience.
            </p>
          </div>

          {/* Traditional Meets Modern */}
          <div
            className="relative group p-12 bg-gradient-to-b from-[#EFE3C6] to-[#E3D2A6] rounded-3xl shadow-xl border border-[#D1B68E]/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-tr from-[#A17633] to-[#C8A96A] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <Sparkles className="w-10 h-10 text-[#F3E9CB]" />
            </div>
            <h3 className="mt-12 text-2xl italic font-playfai font-semibold text-[#6B4F2C] mb-4">
              Traditional Meets Modern 
            </h3>
            <p className="text-[#4B3824] text-lg leading-relaxed">
              A blend of age-old rituals with contemporary elegance to make your
              Haldi truly special.
            </p>
          </div>

          {/* Custom Experiences */}
          <div
            className="relative group p-12 bg-gradient-to-b from-[#EFE3C6] to-[#E3D2A6] rounded-3xl shadow-xl border border-[#D1B68E]/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-tr from-[#A17633] to-[#C8A96A] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <Music2 className="w-10 h-10 text-[#F3E9CB]" />
            </div>
            <h3 className="mt-12 text-2xl font-semibold italic font-playfai text-[#6B4F2C] mb-4">
              Custom Experiences 
            </h3>
            <p className="text-[#4B3824] text-lg leading-relaxed">
              From music to décor, every detail is tailored for a joyful Haldi
              celebration at Palm Bliss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaldiHighlightSection;
