"use client"
import { Music2, Palette, Sparkles } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import img1 from "@/public/Images/mehndiImages/Mehndi1.jpg"
import img2 from "@/public/Images/mehndiImages/Mehndi2.jpg"
import img3 from "@/public/Images/mehndiImages/Mehnd3.jpg"
import img4 from "@/public/Images/mehndiImages/Mehndi4.jpg"
import img5 from "@/public/Images/mehndiImages/Mehndi5.jpg"
import img6 from "@/public/Images/mehndiImages/Mehndi6.jpg"
import img7 from "@/public/Images/mehndiImages/Mehndi7.jpg"


const MehndiSection = () => {

    const mehndiPhotos = [
        { id: 1, src: img1.src, alt: "Mehndi design moment" },
        { id: 2, src: img2.src, alt: "Family blessings" },
        { id: 3, src: img3.src, alt: "Dance & fun" },
        { id: 4, src: img4.src, alt: "Henna closeup" },
        { id: 5, src: img5.src, alt: "Celebration vibes" },
        { id: 6, src: img7.src, alt: "Candid laughter" },
    ];

    return (
        <>

            {/* ================= Mehndi Highlight Section ================= */}
            <section className="relative w-full bg-[#F3E9CB] py-28 px-6 md:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl italic font-playfai font-serif font-bold text-[#6B4F2C] tracking-wide mb-6">
                            Mehndi at <span className="text-[#A17633]">The Palm Bliss Resort</span>
                        </h2>
                        <div className="w-44 h-1 bg-gradient-to-r from-[#D4AF37] via-[#A17633] to-[#D4AF37] mx-auto rounded-full shadow-md"></div>
                        <p className="text-xl md:text-1xl text-[#5A4632] font-light italic font-playfai mt-6">
                            🌿 A Celebration of Colors & Traditions 🌿
                        </p>
                    </div>

                    {/* 2 Column Layout instead of 3 equal cards */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content (Text Blocks stacked) */}
                        <div className="space-y-10">
                            {/* Vibrant Outdoor Venues */}
                            <div
                                className="flex items-start gap-6 bg-gradient-to-r from-[#EFE3C6] to-[#E3D2A6] p-8 rounded-2xl shadow-lg border border-[#D1B68E]/70 transition-all hover:-translate-y-2 hover:shadow-2xl"
                                data-aos="fade-right"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#A17633] to-[#C8A96A] flex items-center justify-center shadow-md shrink-0">
                                    <Sparkles className="w-8 h-8 text-[#F3E9CB]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold italic font-playfai text-[#6B4F2C] mb-3">
                                        Vibrant Outdoor Venues
                                    </h3>
                                    <p className="text-[#4B3824] leading-relaxed">
                                        Celebrate amidst floral beauty, colorful décor, and nature’s charm for a magical Mehndi.
                                    </p>
                                </div>
                            </div>

                            {/* Tradition Meets Style */}
                            <div
                                className="flex items-start gap-6 bg-gradient-to-r from-[#EFE3C6] to-[#E3D2A6] p-8 rounded-2xl shadow-lg border border-[#D1B68E]/70 transition-all hover:-translate-y-2 hover:shadow-2xl"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#A17633] to-[#C8A96A] flex items-center justify-center shadow-md shrink-0">
                                    <Palette className="w-8 h-8 text-[#F3E9CB]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold italic font-playfai text-[#6B4F2C] mb-3">
                                        Tradition Meets Style
                                    </h3>
                                    <p className="text-[#4B3824] leading-relaxed">
                                        Age-old rituals enhanced with modern themes to make your Mehndi celebration unique.
                                    </p>
                                </div>
                            </div>

                            {/* Dance & Music */}
                            <div
                                className="flex items-start gap-6 bg-gradient-to-r from-[#EFE3C6] to-[#E3D2A6] p-8 rounded-2xl shadow-lg border border-[#D1B68E]/70 transition-all hover:-translate-y-2 hover:shadow-2xl"
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#A17633] to-[#C8A96A] flex items-center justify-center shadow-md shrink-0">
                                    <Music2 className="w-8 h-8 text-[#F3E9CB]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold italic font-playfai text-[#6B4F2C] mb-3">
                                        Music & Dance
                                    </h3>
                                    <p className="text-[#4B3824] leading-relaxed">
                                        Joyful songs, dhol beats, and dance – everything for a lively Mehndi bash.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Big Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-left">
                            <Image
loading="lazy" 
                src={img6.src}
                                alt="Mehndi celebration"
                                width={100}
                                height={100}
                                className="object-cover w-full h-full md:h-[560px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= Mehndi Memories Section ================= */}
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

                    {/* Layout change: Text Top + Grid Bottom */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h3 className="text-3xl md:text-4xl italic font-playfai font-bold text-[#A17633] mb-6 leading-snug">
                            Every Frame a Masterpiece
                        </h3>
                        <p className="text-black italic text-lg md:text-xl mb-6">
                            “Henna hues, laughter, music, and timeless traditions.”
                        </p>
                        <p className="text-black leading-relaxed mb-8">
                            Our photography captures the beauty of Mehndi – from intricate designs to happy emotions – preserving every colorful memory of your celebration.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center mb-10">
                            {[
                                "Candid & Traditional Shots",
                                "Vibrant Color Tones",
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
                    </div>

                    {/* Full width image grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {mehndiPhotos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="rounded-xl overflow-hidden shadow-lg group relative"
                                >
                                    <Image
loading="lazy" 
                        src={photo.src}
                                        alt={photo.alt}
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-3">
                                        <p className="text-white text-sm font-medium drop-shadow-md">
                                            {photo.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default MehndiSection
