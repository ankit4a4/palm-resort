"use client"
import { Music2, Palette, Sparkles } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import img1 from "@/public/Images/birthday/birthday1.jpg"
import img2 from "@/public/Images/birthday/birthday2.webp"
import img3 from "@/public/Images/birthday/birthday3.webp"
import img4 from "@/public/Images/birthday/birthday4.webp"
import img5 from "@/public/Images/birthday/birthday5.jpg"
import img6 from "@/public/Images/birthday/birthday6.jpg"
import img7 from "@/public/Images/birthday/birthday7.jpg"

const BirthdayParty = () => {

    const birthdayPhotos = [
            { id: 1, src: img1.src, alt: "" },
            { id: 2, src: img2.src, alt: "" },
            { id: 3, src: img3.src, alt: "" },
            { id: 4, src: img4.src, alt: "" },
            { id: 5, src: img5.src, alt: "" },
            { id: 6, src: img7.src, alt: "" },
        ];
        
    return (
        <>
            {/* ================= Birthday Party Highlight Section ================= */}
            <section className="relative w-full bg-[#F3E9CB] py-28 px-6 md:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl italic font-playfai font-serif font-bold text-[#6B4F2C] tracking-wide mb-6">
                            Birthday Party at <span className="text-[#A17633]">The Palm Bliss Resort</span>
                        </h2>
                        <div className="w-44 h-1 bg-gradient-to-r from-[#D4AF37] via-[#A17633] to-[#D4AF37] mx-auto rounded-full shadow-md"></div>
                        <p className="text-xl md:text-1xl text-[#5A4632] font-light italic font-playfai mt-6">
                            🎂 Celebrate Life, Create Memories 🎂
                        </p>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Fun Decor */}
                        <div
                            className="p-10 bg-gradient-to-b from-[#EFE3C6] to-[#E3D2A6] rounded-3xl shadow-xl border border-[#D1B68E]/70 hover:-translate-y-2 transition"
                            data-aos="zoom-in"
                        >
                            <h3 className="text-2xl italic font-playfai font-semibold text-[#6B4F2C] mb-4">
                                Vibrant Decorations
                            </h3>
                            <p className="text-[#4B3824] text-lg leading-relaxed">
                                Bright and colorful décor to bring out the joy of your special day.
                            </p>
                        </div>

                        {/* Fun Activities */}
                        <div
                            className="p-10 bg-gradient-to-b from-[#EFE3C6] to-[#E3D2A6] rounded-3xl shadow-xl border border-[#D1B68E]/70 hover:-translate-y-2 transition"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <h3 className="text-2xl italic font-playfai font-semibold text-[#6B4F2C] mb-4">
                                Fun Activities
                            </h3>
                            <p className="text-[#4B3824] text-lg leading-relaxed">
                                Games, laughter, and endless fun tailored for guests of all ages.
                            </p>
                        </div>

                        {/* Cakes & Treats */}
                        <div
                            className="p-10 bg-gradient-to-b from-[#EFE3C6] to-[#E3D2A6] rounded-3xl shadow-xl border border-[#D1B68E]/70 hover:-translate-y-2 transition"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <h3 className="text-2xl italic font-playfai font-semibold text-[#6B4F2C] mb-4">
                                Cakes & Treats
                            </h3>
                            <p className="text-[#4B3824] text-lg leading-relaxed">
                                Indulge in customized cakes, desserts, and a spread of delicious treats.
                            </p>
                        </div>

                        {/* Music & Dance */}
                        <div
                            className="p-10 bg-gradient-to-b from-[#EFE3C6] to-[#E3D2A6] rounded-3xl shadow-xl border border-[#D1B68E]/70 hover:-translate-y-2 transition"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            <h3 className="text-2xl italic font-playfai font-semibold text-[#6B4F2C] mb-4">
                                Music & Dance
                            </h3>
                            <p className="text-[#4B3824] text-lg leading-relaxed">
                                Celebrate with joyful music and lively dance to light up the evening.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= Birthday Party Memories Section ================= */}
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

                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        {/* Left Big Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="lg:w-2/3"
                        >
                            <Image
loading="lazy" 
                src={img6.src} 
                                alt="Birthday Celebration"
                                width={800}
                                height={600}
                                className="rounded-2xl shadow-xl object-cover w-full h-full"
                            />
                        </motion.div>

                        {/* Right Collage */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="lg:w-1/3 grid grid-cols-2 gap-4"
                        >
                            {birthdayPhotos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="rounded-xl overflow-hidden shadow-md group relative"
                                >
                                    <Image
loading="lazy" 
                        src={photo.src}
                                        alt={photo.alt}
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-2">
                                        <p className="text-white text-xs font-medium drop-shadow-md">
                                            {photo.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-3xl mx-auto text-center mt-16">
                        <h3 className="text-3xl md:text-4xl italic font-playfai font-bold text-[#A17633] mb-6 leading-snug">
                            Every Birthday, A Story
                        </h3>
                        <p className="text-black italic text-lg md:text-xl mb-6">
                            “Candles, cakes, and smiles that last forever.”
                        </p>
                        <p className="text-black leading-relaxed mb-8">
                            Our photography captures the fun, emotions, and joy of every birthday moment — from blowing candles to dancing with friends.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BirthdayParty
