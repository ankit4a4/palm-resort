"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
// import img1 from "@/public/Images/ring/RingCeremony1.jpg"
import img2 from "@/public/Images/ring/RingCeremony2.jpg"
import img3 from "@/public/Images/ring/RingCeremony3.jpg"
import img4 from "@/public/Images/ring/RingCeremony4.jpg"
import img5 from "@/public/Images/ring/RingCeremony5.jpg"
import img6 from "@/public/Images/ring/RingCeremony6.jpg"
import img7 from "@/public/Images/ring/RingCeremony7.webp"
import img8 from "@/public/Images/ring/RingCeremony8.jpg"
import img9 from "@/public/Images/ring/RingCeremony9.jpg"
import img10 from "@/public/Images/ring/RingCeremony10.jpeg"
import img11 from "@/public/Images/ring/RingCeremony11.jpg"

const RingCeremony = () => {
    const ringPhotos = [
        { id: 1, src: img10.src, alt: "" },
        { id: 2, src: img2.src, alt: "" },
        { id: 3, src: img3.src, alt: "" },
        { id: 4, src: img4.src, alt: "" },
        { id: 5, src: img5.src, alt: "" },
        { id: 6, src: img7.src, alt: "" },
        { id: 7, src: img8.src, alt: "" },
        { id: 8, src: img9.src, alt: "" },
    ];

    return (
        <>
            {/* ================= Ring Ceremony Highlight Section ================= */}
            <section className="relative w-full bg-[#F3E9CB] py-28 px-6 md:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl italic font-playfai font-serif font-bold text-[#6B4F2C] tracking-wide mb-6">
                            Ring Ceremony at <span className="text-[#A17633]">The Palm Bliss Resort</span>
                        </h2>
                        <div className="w-44 h-1 bg-gradient-to-r from-[#D4AF37] via-[#A17633] to-[#D4AF37] mx-auto rounded-full shadow-md"></div>
                        <p className="text-xl md:text-1xl text-[#5A4632] font-light italic font-playfai mt-6">
                            💍 A Promise of Forever Begins Here 💍
                        </p>
                    </div>

                    {/* Timeline Style Steps */}
                    <div className="space-y-14 relative">
                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
                            <div className="md:w-1/2">
                                <Image
                                    src={img6.src}// apni image lagana
                                    alt="Elegant Venue"
                                  width={100}
                                    height={100}
                                    className="rounded-2xl md:h-[300px] shadow-xl object-cover w-full"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold italic font-playfai text-[#6B4F2C] mb-4">
                                    Elegant Venues
                                </h3>
                                <p className="text-[#4B3824] leading-relaxed">
                                    Celebrate your engagement in a setting of timeless beauty and charm, designed to make every moment memorable.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8" data-aos="fade-up" data-aos-delay="200">
                            <div className="md:w-1/2">
                                <Image
                                    src={img11.src}
                                    alt="Modern Meets Tradition"
                                    width={100}
                                    height={100}
                                    className="rounded-2xl md:h-[300px] shadow-xl object-cover w-full"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold italic font-playfai text-[#6B4F2C] mb-4">
                                    Tradition Meets Modern
                                </h3>
                                <p className="text-[#4B3824] leading-relaxed">
                                    From cultural rituals to elegant décor, we blend traditions with contemporary elegance for a perfect ring exchange.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-up" data-aos-delay="400">
                            <div className="md:w-1/2">
                                <Image
                                    src={img2.src}
                                    alt="Celebration & Music"
                                   width={100}
                                    height={100}
                                    className="rounded-2xl md:h-[300px] shadow-xl object-cover w-full"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold italic font-playfai text-[#6B4F2C] mb-4">
                                    Music & Celebration
                                </h3>
                                <p className="text-[#4B3824] leading-relaxed">
                                    A lively evening with music, laughter, and togetherness to mark the beginning of your journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= Ring Ceremony Memories Section ================= */}
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

                    {/* Text block */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h3 className="text-3xl md:text-4xl italic font-playfai font-bold text-[#A17633] mb-6 leading-snug">
                            Every Ring, Every Smile
                        </h3>
                        <p className="text-black italic text-lg md:text-xl mb-6">
                            “Shining rings, smiling faces, and love in the air.”
                        </p>
                        <p className="text-black leading-relaxed mb-8">
                            Our photography beautifully captures the emotions of your engagement – the smiles, the promises, and the heartfelt moments.
                        </p>
                    </div>

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {ringPhotos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="rounded-xl overflow-hidden shadow-lg group relative"
                                >
                                    <Image
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

export default RingCeremony
