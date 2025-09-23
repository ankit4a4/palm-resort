import React from "react";
import {
    GiLotus,
    GiMeditation,
    GiHerbsBundle,
    GiRecycle,
    GiHealing,
    GiMeal,
    GiBed,
    GiDiamondRing,
    GiFamilyHouse,
    GiKnifeFork,
    GiWaterSplash,
    GiMountainCave,
} from "react-icons/gi";
import { FaSpa } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";


const EnhancedDualExperience = () => {
    return (
        <div
            className="flex flex-col md:flex-row w-full min-h-screen"
            style={{ backgroundColor: "#FBF7F0" }}
        >
            {/* Left Side - Atharva: Ayurveda & Wellness Retreat */}
            <div className="relative w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #A17633 2px, transparent 2px)`,
                            backgroundSize: "40px 40px",
                        }}
                    ></div>
                </div>

                {/* Decorative Elements */}
                <div
                    className="absolute top-10 left-10 w-24 h-24 border-l-2 border-t-2"
                    style={{ borderColor: "#A17633" }}
                ></div>
                <div
                    className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2"
                    style={{ borderColor: "#A17633" }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center mb-8">
                        <div
                            className="mr-4 p-3 rounded-full"
                            style={{ backgroundColor: "rgba(161, 118, 51, 0.2)" }}
                        >
                            <span className="text-2xl" style={{ color: "#A17633" }}>
                                🌿
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold italic  font-serif font-playfai" style={{ color: "#A17633" }}>
                            Atharva Wellness
                        </h2>
                    </div>

                    <p
                        className="text-xl mb-6 opacity-90 font-serif uppercase tracking-widest italic font-playfai"
                        style={{ color: "#A17633" }}
                    >
                        Ayurveda & Wellness Retreat
                    </p>

                    <p className="mb-8 text-lg" style={{ color: "#5a4a32" }}>
                        Discover the ancient healing wisdom of Ayurveda in a serene natural
                        setting. Our retreat is designed to restore balance to your mind,
                        body, and spirit through personalized wellness programs.
                    </p>

                    <ul className="space-y-5 mb-10">
                        {[
                            {
                                icon: <GiLotus />,
                                title: "Ayurveda Therapies",
                                desc: "Authentic Panchakarma and rejuvenation treatments",
                            },
                            {
                                icon: <GiMeditation />,
                                title: "Yoga & Meditation",
                                desc: "Daily sessions with expert instructors for all levels",
                            },
                            {
                                icon: <GiHerbsBundle />,
                                title: "Naturopathy",
                                desc: "Natural healing through elements of nature",
                            },
                            {
                                icon: <GiRecycle />,
                                title: "Detox Programs",
                                desc: "Cleansing programs tailored to individual needs",
                            },
                            {
                                icon: <GiHealing />,
                                title: "Holistic Healing",
                                desc: "Integrative approaches to complete wellness",
                            },
                            {
                                icon: <GiMeal />,
                                title: "Organic Nutrition",
                                desc: "Wholesome meals prepared with locally sourced ingredients",
                            },
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div
                                    className="mr-4 flex-shrink-0 text-xl mt-1"
                                    style={{ color: "#A17633" }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <span
                                        className="text-lg font-medium block mb-1 italic font-playfai"
                                        style={{ color: "#A17633" }}
                                    >
                                        {item.title}
                                    </span>
                                    <span className="text-md block" style={{ color: "#5a4a32" }}>
                                        {item.desc}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Side - Palm Bliss Resort: Leisure & Luxury */}
            <div
                className="relative w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center overflow-hidden"
                style={{ backgroundColor: "rgba(161, 118, 51, 0.08)" }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: `linear-gradient(45deg, #A17633 2px, transparent 2px), linear-gradient(-45deg, #A17633 2px, transparent 2px)`,
                            backgroundSize: "40px 40px",
                        }}
                    ></div>
                </div>

                {/* Decorative Elements */}
                <div
                    className="absolute top-10 right-10 w-24 h-24 border-r-2 border-t-2"
                    style={{ borderColor: "#A17633" }}
                ></div>
                <div
                    className="absolute bottom-10 left-10 w-24 h-24 border-l-2 border-b-2"
                    style={{ borderColor: "#A17633" }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center mb-8">
                        <div
                            className="mr-4 p-3 rounded-full"
                            style={{ backgroundColor: "rgba(161, 118, 51, 0.2)" }}
                        >
                            <span className="text-2xl" style={{ color: "#A17633" }}>
                                🏨
                            </span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold italic font-playfai   " style={{ color: "#A17633" }}>
                            Palm Bliss Resort
                        </h2>
                    </div>

                    <p
                        className="text-xl mb-6 opacity-90 uppercase tracking-widest italic font-serif font-playfai"
                        style={{ color: "#A17633" }}
                    >
                        Leisure & Luxury
                    </p>

                    <p className="mb-8 text-lg" style={{ color: "#5a4a32" }}>
                        Experience unparalleled luxury amidst natural beauty. Our resort
                        offers world-class amenities, exquisite dining, and memorable
                        experiences for couples, families, and event celebrations.
                    </p>

                    <ul className="space-y-5 mb-10">
                        {[
                            {
                                icon: <GiBed />,
                                title: "Luxury Boutique Rooms",
                                desc: "Elegantly designed spaces with modern amenities and private balconies",
                            },
                            {
                                icon: <GiDiamondRing />,
                                title: "Destination Weddings",
                                desc: "Breathtaking venues and expert wedding planning services",
                            },
                            {
                                icon: <GiFamilyHouse />,
                                title: "Premium Family Stays",
                                desc: "Spacious villas and activities for all age groups",
                            },
                            {
                                icon: <GiKnifeFork />,
                                title: "Fine Dining Experience",
                                desc: "Multiple cuisines prepared by award-winning chefs",
                            },
                            {
                                icon: <MdOutlinePool />,
                                title: "Pool Facilities",
                                desc: "Infinity pools and rejuvenating treatments",
                            },
                            {
                                icon: <GiMountainCave />,
                                title: "Adventure Activities",
                                desc: "Curated experiences from nature walks to water sports",
                            },
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div
                                    className="mr-4 flex-shrink-0 text-xl mt-1"
                                    style={{ color: "#A17633" }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <span
                                        className="text-lg font-medium block mb-1 italic font-playfai"
                                        style={{ color: "#A17633" }}
                                    >
                                        {item.title}
                                    </span>
                                    <span className="text-md block" style={{ color: "#5a4a32" }}>
                                        {item.desc}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EnhancedDualExperience;
