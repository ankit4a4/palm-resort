"use client";

import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import 'aos/dist/aos.css';

const HeroSection = ({
  welcomeHeading,
  subtitle = "The Palm Bliss",
  showHeading,
}) => {
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    arrival: "",
    departure: "",
    rooms: 1,
    adults: 1,
    children: 0,
  });
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative md:min-h-screen min-h-[80vh] flex flex-col justify-end">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      >
        <source src="/Images/Home/herosection.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div
        data-aos="fade-up"
        className="absolute md:pl-24 inset-0 z-10 flex flex-col items-start justify-center text-center px-4"
      >
        <h1 className="text-[#f3e9cb] text-[6vh] md:text-4xl font-bold drop-shadow-lg">
          <span className="text-6xl font-[900] font-tangerine">
            {welcomeHeading.charAt(0)}
          </span>
          {welcomeHeading.slice(1)}
        </h1>

        <h1 className="text-2xl md:text-3xl text-[#f3e9cb] font-playfair text-center tracking-widest">
          <span className="text-4xl md:text-5xl font-playfair font-tangerine">
            T
          </span>
          he <span className="text-4xl md:text-5xl font-playfair font-tangerine">P</span>alm{" "}
          <span className="text-4xl md:text-5xl font-playfair font-tangerine">B</span>liss{" "}
          <span className="text-4xl md:text-5xl font-playfair font-tangerine">R</span>esort
        </h1>
        <h1 className="text-gray-200 text-4xl font-tangerine mt-1">
          Adventure in jungle
        </h1>

        <p className="font-playfair text-start text-[#f3e9cb] text-2xl md:text-3xl ">
          <span className="text-4xl md:text-5xl font-tangerine">A</span>tharva{" "}
          <span className="text-4xl md:text-5xl font-tangerine">A</span>yurvedic{" "}
          <span className="text-4xl md:text-5xl font-tangerine">W</span>ellness <br className="hidden md:flex" />{" "}
          <span className="text-4xl md:text-5xl font-tangerine">R</span>etreat
        </p>

        <button
          onClick={() => router.push("/resort")}
          className="px-7 py-3 mt-6 rounded-lg text-[#f3e9cb] 
  bg-[#a67a35]/40 border border-white/20 
  backdrop-blur-md shadow-lg hover:bg-[#fff]/60 transition"
        >
          Select your goal
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden z-10 px-[4vh] pb-[4vh]">
        <button
          onClick={() => setShowMobileForm(!showMobileForm)}
          className="w-full bg-[#c1a47a] text-black font-bold text-[2.2vh] py-[2.2vh] rounded-md tracking-wide"
        >
          {showMobileForm ? "Close Form" : "Enquire Now"}
        </button>
      </div>

      {/* Enquiry Form */}
      <div
        data-aos="fade-up"
        className={`z-10 w-full max-w-[94vw] mx-auto px-[2vh] md:px-[2vw] pb-[4vh] md:pb-[4vh] ${
          showMobileForm ? "block" : "hidden"
        } md:block`}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 md:grid-cols-8 gap-px overflow-hidden bg-[#fbf7f0]/5 backdrop-blur-md border border-white/10 rounded-[2vh] md:rounded-[1vw] shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-[#f3e9cb] font-medium text-[1.6vh] md:text-[1vw]"
        >
          {[{ label: "Name", name: "name", type: "text", placeholder: "Your Name" },
            { label: "Phone", name: "phone", type: "tel", placeholder: "Phone Number" }].map(({ label, name, type, placeholder }) => (
            <div key={name} className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]">
              <label className="text-[#f3e9cb]/80 text-[1.4vh] md:text-[1vw]">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="bg-transparent border-b border-white/30 focus:border-[#c1a47a] placeholder:text-[#f3e9cb]/40 focus:outline-none transition-all text-[1.5vh] md:text-[1vw]"
              />
            </div>
          ))}

          {/* Arrival & Departure */}
          {[{ label: "Arrival", name: "arrival" }, { label: "Departure", name: "departure" }].map(({ label, name }) => (
            <div key={name} className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]">
              <label className="text-[#f3e9cb]/80 text-[1.4vh] md:text-[1vw]">{label}</label>
              <div className="flex items-center border-b border-white/30">
                <input
                  type="date"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="bg-transparent w-full text-[#f3e9cb] placeholder:text-[#f3e9cb]/40 focus:outline-none text-[1.5vh] md:text-[1vw]"
                />
                <CalendarDays className="ml-2 w-[2vh] h-[2vh] md:w-[1.2vw] md:h-[1.2vw] text-[#f3e9cb]/60" />
              </div>
            </div>
          ))}

          {/* Dropdowns */}
          {[{ label: "Rooms", name: "rooms", options: [1, 2, 3, 4] },
            { label: "Adults", name: "adults", options: [1, 2, 3, 4] },
            { label: "Children", name: "children", options: [0, 1, 2, 3] }].map(({ label, name, options }) => (
            <div key={name} className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]">
              <label className="text-[#f3e9cb]/80 text-[1.4vh] md:text-[1vw]">{label}</label>
              <select
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="bg-transparent border-b border-white/30 text-[#f3e9cb] focus:outline-none appearance-none text-[1.5vh] md:text-[1vw]"
              >
                {options.map((opt) => (
                  <option key={opt} value={opt} className="text-black">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Submit Button */}
          <div className="bg-[#c1a47a] px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex items-end justify-center text-black font-bold uppercase tracking-wider text-[1.4vh] md:text-[1vw] hover:bg-[#d9b98c] transition-all">
            <button type="submit" className="w-full h-full">
              Enquire Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
