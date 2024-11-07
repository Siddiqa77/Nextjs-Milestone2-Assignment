import Image from "next/image";
import React from "react";
import { Italianno } from "next/font/google";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const About = () => {
  return (
    <div>
      <div className="bg-[#ffdcd1]">
        <Image
          src="/aboutbanner.png"
          alt="free image"
          width={1600}
          height={50}
          className="w-full"
        />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row px-5 py-12 lg:py-24 items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-full mb-10 lg:mb-0">
            <Image
              className="object-cover object-center rounded lg:ml-5"
              alt="hero"
              src="/aboutshop.jpg"
              width={500}
              height={500}
            />
          </div>

          {/* Decorative Image */}
          <Image
            src="/vector 12.png"
            alt="about"
            width={5}
            height={1}
            className="lg:ml-24 md:ml-32 hidden lg:block"
          />

          {/* Text Section */}
          <div className="lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              className={`${italianno.className} text-5xl md:text-6xl lg:text-7xl font-bold mb-4 cursor-pointer mt-16  relative inline-block after:content-[''] after:block after:h-1 after:bg-[#ff8886] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
            >
              About Us
            </h1>
            <p className="mb-8 leading-relaxed text-lg md:text-xl font-mono">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="ml-4 mb-5 inline-flex text-[#1a1618] bg-[#ff8886] border-0 py-2 px-6 focus:outline-none  rounded text-lg transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
