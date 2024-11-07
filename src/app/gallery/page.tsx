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
        className={`${italianno.className} text-center lg:top-10 font-bold mb-4 text-5xl sm:text-4xl lg:text-6xl relative `}
      >
        Wedding Cakes
      </h2>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/wed1.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/wed2.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/wed3.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/wed4.jpg"}
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/wed5.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/wed6.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <h2
        className={`${italianno.className} title-font text-center lg:top-10 font-bold mb-4 text-5xl sm:text-4xl lg:text-6xl relative`}
      >
        Customize Cakes
      </h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/customize1.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/customize2.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/customize3.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/customize4.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/customize5.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/customize6.jpg"}
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <h2
        className={`${italianno.className} title-font text-center lg:top-10 font-bold mb-4 text-5xl sm:text-4xl lg:text-6xl relative`}
      >
        Birthday Cake
      </h2>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/bd2.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/bd3.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/bd4.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/bd5.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/bd6.jpg"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 m-4"
                src={"/bd7.jpg"}
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
