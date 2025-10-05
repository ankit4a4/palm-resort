// components/PhotographySection.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const PhotographySection = () => {
  const photos = [
    { id: 1, src: "https://tarangiramganga.com/img/haldi-ceremony1.jpg", alt: "Haldi ceremony moment" },
    { id: 2, src: "https://i.pinimg.com/736x/d2/1d/a0/d21da0685c3e108d0535c206c7942696.jpg", alt: "Traditional Haldi application" },
    { id: 3, src: "https://i.pinimg.com/originals/5c/9b/43/5c9b431b74a2b66651839e704a0c74f2.jpg", alt: "Family blessings" },
    { id: 4, src: "https://yaanudaipur.com/wp-content/uploads/2022/10/haldi_-188.jpg", alt: "Golden moments" },
    { id: 5, src: "https://www.winsomeresorts.com/images/haldi-images/6.jpg", alt: "Celebration in the hills" },
    { id: 6, src: "https://www.anantumgatewayresorts.com/wp-content/uploads/2023/11/haldi-1.jpg", alt: "Joyful laughter" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl pb-4 font-serif font-extrabold text-[#A17633] italic font-playfai">
            Memories & Photography
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full shadow-md"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Left: Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            {/* Mobile: 2 cols, Desktop: 3 cols */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="rounded-xl overflow-hidden shadow-lg group relative"
                >
                  <Image
loading="lazy" 
    src={photo.src}
                    alt={photo.alt}
                    width={500}       // Fixed width
                    height={500}      // Fixed height
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-3">
                    <p className="text-[#f3e9cb] text-sm font-medium drop-shadow-md">
                      {photo.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h3 className="text-3xl md:text-4xl italic font-playfai font-bold text-[#A17633] mb-6 leading-snug">
              Every Frame a Masterpiece
            </h3>

            <p className="text-black italic text-lg md:text-xl mb-6">
              “Golden glow, laughter in the hills, blessings in abundance.”
            </p>

            <p className="text-black leading-relaxed mb-8">
              Our photography captures the essence of your special moments,
              preserving the joy, emotions, and beauty of your Haldi ceremony.
              Each photograph is carefully crafted to tell your unique story.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              {[
                "Traditional & Candid Shots",
                "Natural Golden Lighting",
                "High Resolution Images",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-amber-100 rounded-full py-2 px-5 text-amber-800 flex items-center shadow-sm"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
