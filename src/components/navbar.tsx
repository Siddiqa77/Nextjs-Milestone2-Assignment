"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { HiBell, HiShoppingCart } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import vector from "../../public/Vector.png"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  const handleSearch = () => {
    if (searchTerm.trim()) {
    }
    // Close the search input after use
    setIsSearchOpen(false);
    setSearchTerm(""); // Optionally clear the search term
  };

  return (
    <div className="bg-[#1a1618] w-[1728] h-[117] opacity-6 border-b-2 border-y-[#ff8886]">
      {/* Header */}
      <header className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <Image src={vector} alt="CakeMate Logo" width={40} height={40} />
          <div>
            <span className="block text-[#ffdcd1] text-xl font-['Notable']">
              CAKE
            </span>
            <span className="block text-[#ff8886] text-xl font-['Notable']">
              ZONE
            </span>
          </div>
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex justify-center flex-grow space-x-8 text-sm font-normal sm:text-[#ff8886]">
          <Link
            href="/"
            className={
              pathname === "/" ? "text-[#ffdcd1]" : "hover:text-pink-300"
            }
          >
            HOME
          </Link>
          <Link
            href="/gallery"
            className={
              pathname === "/gallery" ? "text-[#ffdcd1]" : "hover:text-pink-300"
            }
          >
            CATALOGUE
          </Link>

          <Link
            href="/blogdata"
            className={
              pathname === "/" ? "text-[#ffdcd1]" : "hover:text-pink-300"
            }
          >
            BLOG
          </Link>

          <Link
            href="/about"
            className={
              pathname === "/about" ? "text-[#ffdcd1]" : "hover:text-pink-300"
            }
          >
            ABOUT US
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact" ? "text-[#ffdcd1]" : "hover:text-pink-300"
            }
          >
            CONTACT US
          </Link>
        </nav>

        {/* Icons and Hamburger Menu for Mobile */}
        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="flex items-center border-b border-gray-300">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none text-white px-2 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button onClick={handleSearch} className="text-[#ff8886]">
                <CiSearch className="text-2xl" />
              </button>
            </div>
          ) : (
            <CiSearch
              className="text-2xl cursor-pointer hidden md:block"
              onClick={() => setIsSearchOpen(true)}
            />
          )}
          <div className="relative">
            {/* Bell Icon */}
            <HiBell className="text-2xl cursor-pointer hidden md:block" />

            {/* Red Dot */}
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full hidden md:block"></span>
          </div>
          <HiShoppingCart className="text-2xl cursor-pointer hidden md:block" />

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#ff8886] md:hidden text-3xl bg-[#1a1618] opacity-6"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="flex flex-col items-center  bg-[#1a1618] py-4 space-y-4 md:hidden uppercase text-sm font-normal tracking-widest font-['Roboto']">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#ff8886] hover:text-pink-300"
          >
            HOME
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#ff8886] hover:text-pink-300"
          >
            Catalogue
          </Link>
          <Link
            href="/blogdata"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#ff8886] hover:text-pink-300"
          >
            Blog
          </Link>

          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#ff8886] hover:text-pink-300"
          >
            ABOUT US
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#ff8886] hover:text-pink-300"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </div>
  );
}
