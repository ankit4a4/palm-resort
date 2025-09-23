import React from 'react';
import img from "../../public/Images/wellness.jpg"
import img2 from "../../public/Images/AllPhotos/mud-house.webp"
const LuxuryMeetsWellness = () => {
    return (
        <div className="w-full py-20 px-4 md:px-8 bg-[#A17633] text-[#F3E9CB]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F3E9CB] font-serif italic font-playfai">
                        Palm Bliss – Where Luxury Meets Wellness
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Experience the perfect harmony of rejuvenating wellness and indulgent luxury,
                        where ancient healing traditions meet modern comfort in a serene natural setting.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="lg:w-2/5">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 italic font-playfai">The Perfect Harmony</h3>
                            <p className="mb-4">
                                At Palm Bliss, we've created a unique sanctuary where the ancient wisdom of Ayurveda
                                blends seamlessly with contemporary luxury. Our guests experience the best of both
                                worlds – transformative wellness therapies and indulgent comfort.
                            </p>
                            <p>
                                Whether you seek deep healing, spiritual growth, or simply a luxurious escape from
                                everyday life, our integrated approach ensures a truly holistic experience that
                                nourishes mind, body, and soul.
                            </p>
                        </div>

                        {/* Small Boxes */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-6 rounded-lg bg-[#A17633] border border-[#F3E9CB] shadow-md">
                                <div className="text-3xl mb-3">🌿</div>
                                <h4 className="font-bold mb-2 italic font-playfai">Wellness</h4>
                                <p className="text-sm">Authentic Ayurvedic treatments & yoga</p>
                            </div>
                            <div className="text-center p-6 rounded-lg bg-[#A17633] border border-[#F3E9CB] shadow-md">
                                <div className="text-3xl mb-3">✨</div>
                                <h4 className="font-bold mb-2 italic font-playfai">Luxury</h4>
                                <p className="text-sm">Premium accommodations & amenities</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="lg:w-3/5 relative">
                        <div className="relative h-96 md:h-[500px]">
                            {/* Wellness Image */}
                            <div className="absolute top-0 left-0 w-3/4 z-10 shadow-2xl rounded-lg overflow-hidden transform -rotate-2">
                                <div
                                    className="w-full h-72 md:h-96 bg-cover bg-center relative"
                                    style={{ backgroundImage: "url('/Images/wellness.jpg')" }}
                                >

                                </div>
                            </div>

                            {/* Luxury Image */}
                            <div className="absolute bottom-0 right-0 w-3/4 z-20 shadow-2xl rounded-lg overflow-hidden transform rotate-3">
                                <div
                                    className="w-full h-72 md:h-96 bg-cover bg-center relative"
                                    style={{ backgroundImage: "url('/Images/AllPhotos/mud-house.webp')" }}
                                >
                                    <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div
                                className="w-64 h-64 rounded-full opacity-10"
                                style={{ backgroundColor: '#A17633' }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="text-center p-8 rounded-xl border border-[#F3E9CB] bg-[#A17633]/20">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl mb-5"
                            style={{ backgroundColor: 'rgba(243, 233, 203, 0.2)', color: '#F3E9CB' }}
                        >
                            🧘
                        </div>
                        <h3 className="text-xl font-bold mb-3 italic font-playfai">Holistic Wellness</h3>
                        <p>
                            Experience authentic Ayurvedic treatments, daily yoga, and meditation sessions
                            tailored to your individual needs by expert practitioners.
                        </p>
                    </div>

                    <div className="text-center p-8 rounded-xl border border-[#F3E9CB] bg-[#A17633]/20">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl mb-5"
                            style={{ backgroundColor: 'rgba(243, 233, 203, 0.2)', color: '#F3E9CB' }}
                        >
                            🏨
                        </div>
                        <h3 className="text-xl font-bold mb-3 italic font-playfai">Luxurious Comfort</h3>
                        <p>
                            Indulge in our premium accommodations featuring elegant design, modern amenities,
                            and breathtaking views of the natural surroundings.
                        </p>
                    </div>

                    <div className="text-center p-8 rounded-xl border border-[#F3E9CB] bg-[#A17633]/20">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl mb-5"
                            style={{ backgroundColor: 'rgba(243, 233, 203, 0.2)', color: '#F3E9CB' }}
                        >
                            🌟
                        </div>
                        <h3 className="text-xl font-bold mb-3 italic font-playfai">Unique Experiences</h3>
                        <p>
                            From sunset meditation sessions to gourmet organic dining, we create memorable
                            experiences that blend wellness and luxury perfectly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuxuryMeetsWellness;
