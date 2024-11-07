"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Italianno } from "next/font/google";



const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Card = () => {
  return (
    <div>
      <div className="mx-auto text-center max-w-md md:max-w-xl lg:max-w-3xl">
        <h3
          className={`${italianno.className} cursor-pointer mt-16 mb-6 text-7xl font-bold relative inline-block after:content-[''] after:block after:h-1 after:bg-[#ff8886] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
        >
          Choose a Dessert
        </h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0 font-mono text-gray-500">
          Explore our range of decadent pastries, and luscious cupcakes, each
          designed to satisfy your sweet tooth and elevate any occasion. Whether
          you are hosting a birthday party, wedding, or simply craving a treat.
        </p>
      </div>
      <section className=" bg-[#1a1618] body-font mt-20 mb-24 w-full">
        <div className="container px-5 py-24 mx-auto w-[80%]">
          <div className="flex flex-wrap -m-4">
            {/* card 1 */}

            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake1.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  Tiramisu Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Our Tiramisu Cake is moist and rich in flavor, it has soft
                  cake lay..
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 2 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake2.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  Cellebaut Chocolate Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  A buttery tart with truffle-like chocolate filling is an ideal
                  dess..
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 3 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake3.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  Festive Dark Chocolate Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Celebrate any occasion with this gorgeous cake! It is a moist
                  dark c.
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 4 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake4.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  {" "}
                  Tripple Layer Chocolate Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  A cake made with three types of premium chocolate is the
                  ultimate t..
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 5 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake5.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  {" "}
                  Chocolate Heart Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Got a chocolate lover in your life? Of course you do! Make
                  their da.
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 6 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake6.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  {" "}
                  Cup Cake (Box of Six)
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Show your love with our special cupcakes! These super moist
                  cupcake.
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 7 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake7.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  {" "}
                  Milk Chocolate Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Love has four letters, and so does cake. One of our top
                  sellers! It.
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 8 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake8.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  {" "}
                  Almond Tea Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  If you love almonds, you love this cake! It has almonds all
                  over ..
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 9 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake9.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  {" "}
                  8 Layer Honey Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Happiness starts here. Layers upon layers of honey goodness
                  filled .
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 10 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake10.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  Father&apos;s Day Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Indulge your Father&apos;s sweet tooth with our decadent
                  classic chocola..
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 11 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake11.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  {" "}
                  Red Velvet Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Our red velvet sponge is covered in smooth cream cheese
                  frosting ma.
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>

            {/* card 12 */}
            <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full">
              <Link href="#">
                <Image
                  alt="cake catalogue"
                  className="block rounded-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 mx-auto m-4"
                  src={"/cake12.webp"}
                  width={500}
                  height={500}
                />
              </Link>
              <div className="mt-4 text-[#ffdcd1] text-center">
                <h2 className="title-font text-lg font-medium sm:text-base">
                  {" "}
                  Blueberry Cheese Cake
                </h2>
                <p className="mt-2 text-sm font-mono sm:text-xs sm:ml-2 leading-normal">
                  Perfectly baked creamy cheesecake topped with fresh
                  blueberries, ho.
                </p>
                <p className="mt-1 sm:text-sm">PKR 2500</p>
              </div>
              <Link
                href="/"
                className="text-[#1a1618] bg-[#ff8886] px-4 py-2 lg:py-3 md:py-3 lg:font-bold lg:text-md rounded-md mx-auto block text-center text-[14px] sm:text-xs sm:px-3 sm:py-1 transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105 w-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
