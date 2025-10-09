import React from "react";
import img from "../../public/Images/MATHPAL.jpeg";

const RRAHMATHPAL = () => {
    return (
        <section className="py-16" style={{ backgroundColor: "#f3e9cb" }}>
            <div className="max-w-7xl shadow-lg rounded-lg p-8 mx-auto px-4 flex flex-col gap-12">

                {/* TOP SECTION (Left + Right) */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

                    {/* LEFT SIDE - Heading + Intro */}
                    <div className="flex-1 text-center md:text-left">
                        <h2
                            className="text-5xl font-alegreya italic md:text-6xl font-bold mb-3"
                            style={{ color: "#a17633" }}
                        >
                            IRRA H MATHPAL
                        </h2>
                        <h3
                            className="text-3xl md:text-4xl font-alegreya italic font-semibold mb-5"
                            style={{ color: "#a17633" }}
                        >
                            Founder – The Astrolrra
                        </h3>
                        <p className="text-lg md:text-xl text-gray-800 italic mb-5">
                            Guiding Souls through Astrology, Numerology & Vastu
                        </p>
                        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                            Irra H Mathpal is a visionary spiritual guide who blends traditional wisdom
                            with modern understanding to help individuals navigate life with clarity,
                            balance, confidence, and purpose. Through her deep expertise in astrology,
                            numerology, and vastu, she empowers people to recognize their strengths,
                            make informed decisions, overcome challenges, and cultivate inner peace,
                            inspiring personal growth and a harmonious, fulfilling life.
                        </p>

                    </div>

                    {/* RIGHT SIDE - Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={img.src}
                            alt="Irra H Mathpal"
                            className="w-72 h-72 md:w-80 md:h-80 rounded-xl object-cover shadow-2xl"
                        />
                    </div>
                </div>

                {/* BOTTOM SECTION - Full width detailed content */}
                <div className="w-full text-center md:text-left">
                    <p className="text-xl md:text-2xl font-alegreya italic font-medium text-gray-900 mb-5 "  style={{ color: "#a17633" }}>
                        A Multifaceted Visionary
                    </p>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                        Through her deep knowledge of <b>astrology, numerology, and vastu</b>,
                        Irra has empowered thousands to align their energies with cosmic
                        balance. Her insights are rooted in authenticity, compassion, and
                        transformation, guiding individuals toward holistic well-being.
                    </p>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                        As the Founder of <b>The Astrolrra</b>, she envisions a global
                        community where spirituality and practicality go hand in hand.
                        Through personalized consultations, workshops, and mentorship,
                        she helps people overcome emotional and professional challenges
                        using time-tested cosmic principles.
                    </p>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                        Her teachings are not limited to predictions — they are pathways to
                        self-awareness, confidence, and success. With each session, she
                        inspires seekers to unlock their inner potential and walk a path of
                        purpose and peace.
                    </p>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                        Irra H Mathpal’s journey is a living example of how ancient sciences
                        can shape modern lives. Her calm aura, sharp intuition, and
                        forward-thinking mindset continue to make her one of the most
                        respected names in spiritual guidance today.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RRAHMATHPAL;
