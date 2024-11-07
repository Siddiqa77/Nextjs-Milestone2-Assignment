import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#1a1618] font-mono mt-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#ff8886] tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="/"
                  className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer"
                >
                  CATALOGUE
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer"
                >
                  CONTACT US
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#ff8886] tracking-widest text-sm mb-3">
              POLICIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer">
                  Return Policy
                </a>
              </li>
              <li>
                <a className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer">
                  Booking Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#ff8886] tracking-widest text-sm mb-3">
              SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer">
                  Support
                </a>
              </li>
              <li>
                <a className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer">
                  Shipping
                </a>
              </li>
              <li>
                <a className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-[#ffdcd1] hover:text-pink-300 cursor-pointer">
                  FAQs
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#ff8886] tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-[#ffdcd1] font-mono"
                >
                  Newsletter
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 f text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <Link href="https://mail.google.com/mail/u/0/#inbox">
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-[#1a1618] bg-[#ff8886] font-bold  border-0 py-2 px-6 focus:outline-none  rounded transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105">
                  Button
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 md:w-full">
        <div className="footer-container lg:w-full bg-[#1a1618] border-t-2 border-y-[#ff8886] opacity-6 px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex items-center space-x-2">
            <Image src="/vector.png" alt="CakeMate Logo" width={40} height={40} />
            <div>
              <span className="block text-[#ffdcd1] text-xl font-['Notable']">
                CAKE
              </span>
              <span className="block text-[#ff8886] text-xl font-['Notable']">
                ZONE
              </span>
            </div>
          </div>
          <p className="text-sm text-[#ffdcd1] sm:ml-6 sm:mt-0 mt-4 lg:ml-auto md:ml-auto">
            © 2024 Cake Zone
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-[#ffdcd1] ml-1"
              target="_blank"
            >
              @ Copyright
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div className="flex items-center space-x-4 text-[#ffdcd1]">
              <FaFacebookF className="text-2xl cursor-pointer  md:block" />
              <FaInstagram className="text-2xl cursor-pointer  md:block" />
              <FaTwitter className="text-2xl cursor-pointer  md:block" />
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
