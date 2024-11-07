import Image from "next/image";
import React from "react";
import { Italianno } from "next/font/google";
import Link from "next/link";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Contact = () => {
  return (
    <div>
      <div>
        <Image
          className="w-full"
          src={"/contactbanner.png"}
          alt="free image"
          width={1600}
          height={50}
        />
      </div>
      <div className="mx-auto text-center max-w-md md:max-w-xl lg:max-w-3xl">
        <h3
          className={`${italianno.className} cursor-pointer mt-16 mb-6 text-7xl font-bold relative inline-block after:content-[''] after:block after:h-1 after:bg-[#ff8886] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
        >
          Contact Us
        </h3>
      </div>
      <section className="relative font-mono">
        <div className="container lg:mb-6 bg-[#eaeaea] px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className=" bg-gray-500 lg:w-2/3 md:w-1/2 bg- rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-[#e0a09f] relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm font-mono">
                  ADDRESS
                </h2>
                <p className="mt-1 font-mono text-gray-600">
                  1234 Elm Street Suite 567 Downtown Cityville, CA 90210
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm font-mono">
                  EMAIL
                </h2>
                <a className="text-gray-600 leading-relaxed">
                  cakezone@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed font-mono text-gray-600">
                  123-456-7890
                </p>
              </div>
            </div>
          </div>
          <div className="p-10 lg:w-1/3 md:w-1/2 bg-[#e0a09f] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-lg font-bold  ">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 font-mono">
              Fill out the form below, and our team will get back to you as soon
              as possible.
            </p>
            <div className="relative mb-4 ">
              <label htmlFor="name" className="leading-7 text-lg ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-lg font-mono text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="relative mb-4 font-mono">
              <label
                htmlFor="message"
                className="leading-7 text-lg font-mono text-gray-900 "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-transform duration-300 ease-in-out hover:scale-105"
                defaultValue={""}
              />
            </div>
            <Link href="https://mail.google.com/mail/u/0/#inbox">
              <button className="text-[#1a1618]  font-bold bg-[#ffdcd1] border-0 py-2 px-6 focus:outline-none  rounded text-lg transition-transform duration-300 ease-in-out hover:bg-red-950 hover:text-[#ff8886] hover:scale-105">
                Button
              </button>
            </Link>
            <p className="text-md  mt-3 font-mono text-gray-600">
              Whether you are interested in our services, have a suggestion, or
              need assistance, we're here to help. Let's connect!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
