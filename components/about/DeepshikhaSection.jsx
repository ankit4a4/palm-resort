'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../../public/Images/shakshi1.jpeg";
import img2 from "../../public/Images/shakshi2.jpeg";
import img3 from "../../public/Images/shakshi3.jpeg";

const DeepshikhaSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Slick Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className="py-20 bg-[#fdf6ec]">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">

                {/* LEFT IMAGE - 40% */}
                <div className="md:w-[40%] w-full">
                    <img
                        src={img1.src}
                        alt="Dr. Deepshikha Garg"
                        className="w-full h-[500px] object-cover object-top rounded-2xl shadow-2xl border-[6px] border-[#a17633]/40"
                    />
                </div>

                {/* RIGHT CONTENT - 60% */}
                <div className="md:w-[60%] w-full">
                    <h2 className="text-4xl md:text-5xl font-alegreya italic font-bold mb-5 text-[#a17633]">
                        Dr. Deepshikha Garg
                    </h2>

                    <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
                        <p>
                            Dt. Deepshikha Garg is a <span className="font-semibold text-[#a17633]">Gold Medalist Clinical, Celebrity, and Army Dietitian</span>
                            with over <span className="font-semibold">23 years of distinguished experience</span> in nutrition, wellness, and preventive health.
                            She served with excellence as an Army Dietitian at the <span className="italic">Military Hospital</span> and the
                            <span className="italic"> Indian Military Academy, Dehradun</span>, contributing to the health and performance of India’s finest officers.
                        </p>

                        <p>
                            She is an <span className="font-semibold">Indian Dietetic Association (IDA)–approved dietitian</span>, and the
                            <span className="font-semibold"> Founder & Chief Clinical Dietitian</span> of
                            <span className="italic"> Dr. Diet Therapy Nutrition and Wellness Clinic</span>, Dehradun.
                            Her clinic is a recognized name in the field of <span className="font-semibold">holistic nutrition and therapeutic wellness</span>.
                        </p>

                        <p>
                            Throughout her illustrious career, Dt. Garg has been
                            <span className="font-semibold text-[#a17633]"> honoured with multiple national awards</span>
                            for excellence in clinical dietetics and community health promotion.
                            Her work has received <span className="italic">extensive media recognition</span> for transforming lives
                            through evidence-based nutrition, personalized counseling, and sustainable lifestyle practices.
                        </p>

                        <p>
                            At this <span className="font-semibold">Wellness Retreat Program</span>,
                            she brings her vast expertise to guide participants on a journey of
                            <span className="italic"> complete physical, mental, and emotional rejuvenation</span> —
                            through balanced nutrition, mindful living, and long-term wellness empowerment.
                        </p>
                    </div>

                    {/* BUTTON TO OPEN GALLERY */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-6 bg-[#a17633] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#8b5e24] transition-all duration-300"
                    >
                        View Gallery
                    </button>
                </div>
            </div>

            {/* POPUP MODAL WITH SLIDER */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-[#a17633] rounded-2xl w-11/12 max-w-2xl p-6 relative shadow-2xl border border-[#a17633]/30">
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-4 text-[#fff] font-bold text-3xl hover:text-[#fff] transition"
                        >
                            &times;
                        </button>

                        {/* SLIDER */}
                        <Slider {...settings}>
                            <div>
                                <img
                                    src={img2.src}
                                    alt="Dr. Deepshikha 2"
                                    className="w-full h-[420px] object-contain rounded-xl"
                                />
                            </div>
                            <div>
                                <img
                                    src={img3.src}
                                    alt="Dr. Deepshikha 3"
                                    className="w-full h-[420px] object-contain rounded-xl"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            )}
        </section>
    );
};

export default DeepshikhaSection;
