"use client";
import React, { useState } from "react";

const ImagePopUp = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "https://via.placeholder.com/400x250?text=Image+1",
        "https://via.placeholder.com/400x250?text=Image+2",
        "https://via.placeholder.com/400x250?text=Image+3",
        "https://via.placeholder.com/400x250?text=Image+4",
        "https://via.placeholder.com/400x250?text=Image+5",
        "https://via.placeholder.com/400x250?text=Image+6",
    ];

    return (
        <div className="relative p-6">
            {/* Image Grid - Always Visible */}
            <div className="grid grid-cols-3 gap-4">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`img-${i}`}
                        className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>

            {/* Popup / Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="relative max-w-3xl w-full flex justify-center">
                        {/* Close Button */}
                        <button
                            className="absolute top-[-40px] right-0 bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 transition"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>

                        {/* Popup Image */}
                        <img
                            src={selectedImage}
                            alt="popup"
                            className="rounded-lg shadow-lg w-full max-h-[90vh] object-contain border-4 border-white"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImagePopUp;
