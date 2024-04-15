"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Products() {
  const [carousel, setCarousel] = useState<any | null>(null);
  const [prevButton, setPrevButton] = useState<any | null>(null);
  const [nextButton, setNextButton] = useState<any | null>(null);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    setCarousel(carousel);
    const prevButton = document.querySelector(".carousel-control-prev");
    setPrevButton(prevButton);
    const nextButton = document.querySelector(".carousel-control-next");
    setNextButton(nextButton);
  }, []);

  const prevButtonHandler = () => {
    prevButton?.addEventListener("click", () => {
      carousel?.scrollBy({
        left: -carousel?.offsetWidth,
        behavior: "smooth",
      });
    });
  };

  const nextButtonHandler = () => {
    nextButton?.addEventListener("click", () => {
      carousel?.scrollBy({
        left: carousel?.offsetWidth,
        behavior: "smooth",
      });
    });
  };
  return (
    <>
      <Navbar />
      <section>
        <div className="relative flex justify-center items-center ">
          <div className="carousel flex no-scrollbar">
            {/* <!-- Carousel items --> */}
            <div className="carousel-item ">
              <h1 className=" absolute text-5xl font-semibold text-white">
                Family <span className="text-red-500">life </span>Protection
                Plan
              </h1>
              <Image
                src="/family.jpg"
                alt="Carousel Image 1"
                className="w-full h-[60vh] object-cover"
              />
            </div>
            <div className="carousel-item">
              <h1 className=" absolute text-5xl font-semibold text-white">
                Royal <span className="text-red-500">Funeral </span>
                Plan
              </h1>
              <Image
                src="/ceremony.jpg"
                alt="Carousel Image 2"
                className="w-full h-[60vh] object-cover"
              />
            </div>
            <div className="carousel-item">
              <h1 className=" absolute text-5xl font-semibold text-white">
                Future <span className="text-red-500">Scholar </span>
                Plan
              </h1>
              <Image
                src="/education-plan.jpg"
                alt="Carousel Image 3"
                className="w-full h-[60vh] object-cover"
              />
            </div>
          </div>

          {/* <!-- Carousel controls --> */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
            <button
              className="carousel-control-prev bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
              onClick={prevButtonHandler}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
            <button
              className="carousel-control-next bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
              onClick={nextButtonHandler}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
