import React from "react";
import img from "../../public/Images/MATHPAL.jpeg"

const RRAHMATHPAL = () => {
    return (
        <section className="py-16" style={{ backgroundColor: "#f3e9cb" }}>
            <div className="max-w-7xl shadow-lg border border-gray-200 rounded-lg p-8 mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <h2 className="text-5xl font-alegreya italic md:text-6xl font-bold mb-3" style={{ color: "#a17633" }}>
                        RRA H MATHPAL
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-alegreya italic font-semibold mb-5" style={{ color: "#a17633" }}>
                        Founder - The Astrolrra
                    </h3>
                    <p className="text-lg md:text-xl text-gray-800 italic mb-5">
                        Guiding Souls through Astrology, Numerology & Vastu
                    </p>
                    <p className="text-xl md:text-2xl font-alegreya italic font-medium text-gray-900 mb-5">
                        A Multifaceted Visionary
                    </p>
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                        Irra H Mathpal stands as a beacon of wisdom and expertise. She
                        masterfully blends ancient sciences with modern insights. Her
                        journey is a testament to profound knowledge and diverse
                        professional excellence. She inspires and empowers many worldwide.
                    </p>
                </div>

                {/* Photo */}
                <div className="flex-shrink-0 order-1 md:order-2">
                    <img
                        src={img.src}
                        alt="Irra H Mathpal"
                        className="w-72 h-72 md:w-80 md:h-80 rounded-xl object-cover shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default RRAHMATHPAL;
