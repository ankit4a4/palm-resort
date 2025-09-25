"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

const packages = [
    {
        id: 4,
        title: "7‑Day Detox & Yoga Retreat",
        desc:
            "Cleanse your body and mind with guided yoga, organic meals and herbal therapies.",
        image:
            "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1470&q=80",
        duration: "7 Days",
        price: "₹24,999",
        highlight: "Most Popular",
    },
    {
        id: 5,
        title: "Weekend Mindfulness Escape",
        desc:
            "Perfect for working professionals — weekend escape with meditation and holistic cuisine.",
        image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1587&q=80",
        duration: "3 Days",
        price: "₹15,999",
    },
    {
        id: 6,
        title: "Ayurvedic Weight Management",
        desc:
            "Scientific weight control via Ayurveda herbs, yoga routines & detox meals.",
        image:
            "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=1470&q=80",
        duration: "21 Days",
        price: "₹40,999",
        highlight: "Comprehensive",
    },

];

export default function WellnessPackagesSection() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out-back',
            mirror: true
        });
    }, []);

    const route = useRouter()

    const setId = (id) => {
        const idd = localStorage.setItem("id", id)
        route.push("/booknow")
    }

    return (
        <section className="bg-gradient-to-b from-[#f9f6f2] to-[#f0e9df] py-20 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div
                    className="text-center mb-16"
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-anchor-placement="top-bottom"
                >

                    <h2 className="text-4xl font-alegreya  italic md:text-5xl font-playfair font-semibold text-yellow-700/90 mb-4">
                        Wellness Packages
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our carefully curated wellness programs designed to nourish your body, mind and soul
                    </p>
                    <div className="mt-6 w-24 h-1.5 mx-auto bg-gradient-to-r from-[#A67A35] to-[#D4AF37] rounded-full" />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {packages.map(({ title, desc, image, duration, price, highlight, id }, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                            data-aos-anchor-placement="top-bottom"
                            className="group relative bg-[#fbf7f0] rounded-xl shadow-lg overflow-hidden border border-[#e0d5c5] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#A67A35]/10 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                            {/* Card */}
                            <div className="relative h-full flex flex-col">
                                {/* Image container with parallax effect */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-[#8B5A2B] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                                    <Image
                                        loading="lazy"
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {highlight && (
                                        <div
                                            className="absolute top-4 right-4 bg-[#A67A35] text-[#f3e9cb] text-xs font-bold px-3 py-1 rounded-full z-10 
                                            transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
                                        >
                                            {highlight}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-[#f3e9cb] z-10">
                                        <span className="text-sm font-medium bg-[#A67A35] px-2 py-1 rounded 
                                            group-hover:bg-[#D4AF37] transition-colors duration-300">
                                            {duration}
                                        </span>
                                        <h3 className="text-xl font-bold mt-2 drop-shadow-md group-hover:text-[#F5E6C8] font-alegreya  italic transition-colors duration-300">
                                            {title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content with sliding up effect */}
                                <div className="p-6 flex-grow flex flex-col transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <p className="text-gray-700 mb-5 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                        {desc}
                                    </p>
                                    <div className="mt-auto flex justify-between items-center">
                                        <span className="text-lg font-bold text-[#8B5A2B] group-hover:text-[#A67A35] transition-colors duration-300">
                                            {price}
                                        </span>
                                        <button
                                            onClick={() => setId(id)}
                                            className="px-4 py-2 bg-[#A67A35] hover:bg-[#8B5A2B] text-[#f3e9cb] text-sm font-medium rounded-lg 
                                            transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#A67A35]/30">
                                            Book Now
                                            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Border animation */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/30 rounded-xl pointer-events-none transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}