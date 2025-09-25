"use client"
import React, { useState, useEffect } from "react";
import img1 from "@/public/Images/AllPhotos/mud-house.webp"
import img2 from "@/public/Images/swissRooms/1.jpg"
import img3 from "@/public/Images/familyRoom/3.webp"
import img4 from "@/public/Images/luxeryRooms/1.webp"
import Image from "next/image";

const BookNowPage = () => {
    const [nights, setNights] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [index, setIndex] = useState(1)

    useEffect(() => {
        setIndex(localStorage.getItem("id"))
    }, [])


    const room = [
        {
            id: 0,
            title: "Mud Houses",
            price: 6999,
            capacity: "2 Adults",
            images: img1.src,
        },
        {
            id: 1,
            title: "Swiss Cottages",
            price: 5999,
            capacity: "2 Adults",
            images: img2.src,
        },
        {
            id: 2,
            title: "Family Suite",
            price: 7999,
            capacity: "2 Adults + 2 Children",
            images: img3.src,
        },
        {
            id: 3,
            title: "Luxury Room",
            price: 8999,
            capacity: "2 Adults",
            images: img4.src,
        },
        {
            id: 4,
            title: "7‑Day Detox & Yoga Retreat",
            images:
                "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1470&q=80",
            capacity: "7 Days",
            price: 24999,
        },

        {
            id: 5,
            title: "Weekend Mindfulness Escape",
            images:
                "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1587&q=80",
            capacity: "3 Days",
            price: 15999,
        },
        {
            title: "Ayurvedic Weight Management",
            images:
                "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=1470&q=80",
            capacity: "21 Days",
            price: 40999,
        },
    ];

    const handlePayment = () => {
        setConfirmed(true);
    };

    const totalAmount = room[index].price * nights;

    useEffect(() => {
        if (startDate) {
            const start = new Date(startDate);
            const end = new Date(start);
            end.setDate(start.getDate() + nights);
        }
    }, [startDate, nights]);

    return (
        <div className="min-h-screen py-28 bg-[#a1773360] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6">
                {!confirmed ? (
                    <>
                        {/* Room Info */}
                        <div className="flex flex-col md:flex-row md:gap-6">
                           <Image
loading="lazy" 
                           height={100}
                                           width={100}
                                src={room[index]?.images}
                                alt={room[index]?.title}
                                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                            />
                            <div className="mt-4 md:mt-0 md:w-1/2 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold">{room[index]?.title}</h2>
                                    <p className="text-gray-600 mt-2">Price per night: ₹{room[index]?.price}</p>
                                    <p className="text-gray-600 mt-2">{room[index].capacity}</p>

                                    {/* Start Date */}
                                    <div className="mt-4">
                                        <label className="block text-gray-700 mb-1"> Date:</label>
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="w-full border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2"
                                        />
                                    </div>

                                    {/* Number of Nights */}
                                    <div className="mt-4">
                                        <label className="block text-gray-700 mb-1">Number of nights:</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={nights}
                                            onChange={(e) => setNights(Number(e.target.value))}
                                            className="w-full border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2"
                                        />
                                    </div>

                                    


                                </div>

                                <div className="mt-4 md:mt-auto">
                                    <p className="text-lg font-semibold">Total: ₹{totalAmount}</p>
                                    <button
                                        onClick={handlePayment}
                                        className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition-colors"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-3xl font-bold text-green-600">Booking Confirmed!</h2>
                        <p className="mt-4 text-gray-700">Room: {room[index].title}</p>
                        <p>Start Date: {startDate}</p>
                        <p>Total Paid: ₹{totalAmount}</p>
                        <p className="mt-2">Thank you for your booking.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookNowPage;
