"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const navItemsLeft = [
    { name: "Home", href: "/" },
    { name: "Our Legacy", href: "/about" },
    { name: "Accommodation", href: "/rooms" },
    { name: "Ayush Bhoj (Dinning)", href: "/ayush-dining" },
    { name: "Ayush Store", href: "/ayush-store" },
  ];

  const navItemsRight = [
    { name: "Ayush Wellness", href: "/wellness" },
    { name: "Wellness Packages", href: "/wellness-packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fbf7f0] backdrop-blur-sm shadow-lg"
          : "backdrop-blur-sm bg-black/10"
      }`}
    >
      <div className="mx-auto px-4 md:px-[10vw] md:py-[2vw] py-3">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left Nav */}
          <div className="flex items-center space-x-6 md:space-x-[1.1vw] z-10">
            {navItemsLeft.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? "text-black" : "text-[#f3e9cb]"
                } font-normal hover:text-royal-gold transition-colors text-[1vw]`}
                style={{
                  color: pathname === item.href ? "#d4af37" : "",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo Center */}
          <Image
            src={logo}
            alt="Logo"
            className="absolute left-1/2 transform -translate-x-1/2 md:h-[230%] object-contain"
          />

          {/* Right Nav */}
          <div className="flex items-center z-10 space-x-6 md:space-x-[2vw]">
            {navItemsRight.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? "text-black" : "text-[#f3e9cb]"
                } font-normal hover:text-royal-gold transition-colors text-[1vw]`}
                style={{
                  color: pathname === item.href ? "#d4af37" : "",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Nav Header */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center justify-start gap-1 ">
            <Image
              src={logo}
              alt="Logo"
              className="transform w-[25%] object-contain"
            />
          </Link>

          <button
            className={`${
              isScrolled ? "text-black" : "text-[#f3e9cb]"
            } hover:text-royal-gold`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            />

            {/* Slide-in Menu */}
            <div className="fixed top-0 left-0 z-[100] min-h-screen w-[80vw] max-w-sm bg-[#fbf7f0] shadow-xl p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center mb-4">
                <Link href="/" className="flex items-center gap-1 ">
                  <Image
                    loading="lazy"
                    src={logo}
                    alt="Logo"
                    className="absolute left-[20%] transform -translate-x-1/2 w-[30%] object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black hover:text-royal-gold transition"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {[...navItemsLeft, ...navItemsRight].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-2 px-3 rounded-md text-black text-[2.2vh] font-normal hover:bg-[#a17633]/10 hover:text-royal-gold transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
