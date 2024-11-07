import React from "react";
import { Italianno } from "next/font/google";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Testimonial = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <section className="text-neutral-700 dark:text-neutral-300">
        <div className="mx-auto text-center max-w-md md:max-w-xl lg:max-w-3xl">
          <h3
            className={`${italianno.className} cursor-pointer mt-16 mb-6 text-7xl font-bold relative inline-block after:content-[''] after:block after:h-1 after:bg-[#ff8886] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
          >
            Testimonial
          </h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0 font-mono text-gray-500">
            At CakeZone, every order is more than just a cake it is a memory
            waiting to be made. Our clients often mention how our creations not
            only taste incredible but also add that special touch to their
            celebrations.
          </p>
        </div>
        <div className="grid gap-6 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="transition-transform duration-300 ease-in-out hover:scale-105 m-4">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#c78d8c]" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt="Maria John"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria John</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  Thank you, CakeZone, for the amazing cake for our anniversary!
                  The chocolate layers were rich and moist, and the design
                  matched our theme perfectly. I appreciate your attention to
                  detail and excellent customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:scale-105 m-4">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#ff8886]" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  alt="Santy Mohan"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Santy Mohan</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  I ordered a custom cake for my son is first birthday, and it
                  was beyond my expectations! The team was so accommodating with
                  my requests, and the final product was not only gorgeous but
                  delicious. I will definitely be back for more!
                </p>
              </div>
            </div>
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:scale-105 m-4">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#452c38]" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  alt="John Smith"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  I am a regular at CakeZone, and I can it get enough of their
                  cupcakes! They are always fresh, beautifully decorated, and
                  the flavors are divine. Perfect for any occasion or just a
                  treat for myself! I am satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
