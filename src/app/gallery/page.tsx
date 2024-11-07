import Image from "next/image";
import React from "react";
import { Italianno } from "next/font/google";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Gallery = () => {
  return (
    <div>
      <h2
        className={`${italianno.className} text-center lg:top-10 font-bold mb-4 text-4xl sm:text-5xl md:text-6xl relative`}
      >
        Wedding Cakes
      </h2>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="flex flex-wrap -m-1 sm:-m-2">
          {["wed1.jpg", "wed2.jpg", "wed3.jpg", "wed4.jpg", "wed5.jpg", "wed6.jpg"].map((src, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-1 sm:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                src={`/${src}`}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>

      <h2
        className={`${italianno.className} title-font text-center lg:top-10 font-bold mb-4 text-4xl sm:text-5xl md:text-6xl relative`}
      >
        Customize Cakes
      </h2>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="flex flex-wrap -m-1 sm:-m-2">
          {["customize1.jpg", "customize2.jpg", "customize3.jpg", "customize4.jpg", "customize5.jpg", "customize6.jpg"].map((src, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-1 sm:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                src={`/${src}`}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>

      <h2
        className={`${italianno.className} title-font text-center lg:top-10 font-bold mb-4 text-4xl sm:text-5xl md:text-6xl relative`}
      >
        Birthday Cake
      </h2>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="flex flex-wrap -m-1 sm:-m-2">
          {["bd2.jpg", "bd3.jpg", "bd4.jpg", "bd5.jpg", "bd6.jpg", "bd7.jpg"].map((src, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-1 sm:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                src={`/${src}`}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
