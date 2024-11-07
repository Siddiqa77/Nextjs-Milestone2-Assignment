"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiUserCircle, HiBell, HiShoppingCart } from "react-icons/hi";
import { Italianno } from "next/font/google";
import Link from "next/link";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection() {
 

  return (
    <div
      className="relative bg-cover bg-center w-full h-[600px]"
      style={{ backgroundImage: "url('/Rectangle 44.png')" }}
    >
      {/* Main Hero Content */}
      <div className="max-w-8xl mx-auto h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1
          className={`${italianno.className} text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-bold text-[#ffdcd1] leading-normal`}
        >
          The <span className="text-[#ff8886]">Delicious</span> Baked{" "}
          <br className="hidden sm:block" /> Cake Everyday
        </h1>
        <p
          className={`${italianno.className} mt-8  text-2xl md:text-2xl lg:text-4xl italic font-light text-white`}
        >
          "Where there is cake, there is hope."
        </p>

        {/* Buttons */}

        <Link
          href="/contact"
          className="text-[#1a1618] bg-[#ff8886] px-3 py-2 rounded-md mt-8 font-bold text-[20px] transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105"
        >
          Order Now
        </Link>

        {/* Social Media Icons on the Left */}

        <div className="absolute top-20 left-0 flex flex-col items-center space-y-4 ml-4 text-white md:ml-8">
          <img className="h-[190px] w-[1px]" src="/vector 12.png" alt="" />
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <img className="h-[190px] w-[1px]" src="/vector 11.png" alt="" />
        </div>

        {/* Social Media Icons on the Right */}
        <div className="absolute top-20 right-0 flex flex-col items-center space-y-4 mr-4 text-white md:mr-8">
          <img className="h-[190px] w-[1px]" src="/vector 12.png" alt="" />
          <HiUserCircle className="cursor-pointer" />
          <HiBell className="cursor-pointer" />
          <HiShoppingCart className="cursor-pointer" />
          <img className="h-[190px] w-[1px]" src="/vector 11.png" alt="" />
        </div>
      </div>
      {/* Back to top button */}
    </div>
  );
}
