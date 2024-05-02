import Navbar from "@/components/Navbar";
import { Steps } from "@/constant";
import Image from "next/image";
import React from "react";

export default function SalesProcess() {
  return (
    <>
      <Navbar />
      <section id="hero" className=" bg-black px-4 ">
        <div className=" flex flex-col-reverse md:flex-row mt-4 max-w-6xl mx-auto justify-between items-center my-12 ">
          <article className="md:w-1/2">
            <h2 className="max-w-md text-center text-5xl md:text-7xl font-bold text-white sm:text-left sm:text-5xl mt-4">
              <span className="text-red-400">Sales</span> Process
            </h2>
          </article>
          <Image src="/steps.png" alt="" width={550} height={100} />
        </div>
      </section>

      <hr className="mx-auto w-24 bg-black dark:bg-red-500 " />

      <section className="flex flex-col justify-center items-center px-6">
        <div className="mt-48 wrapper mb-20 ">
          <article>
            <h2 className="text-4xl font-bold ">
              What is the Selling Process?
            </h2>
            <p className=" md:w-2/3 mt-6">
              The selling process is the interaction between a seller and a
              potential buyer or client. It&apos;s generally a method businesses
              can replicate for consistent performance among salespeople.
              Businesses use the common seven steps of the selling process to
              complete sales and ensure continued profits.
            </p>

            <h2 className="text-4xl font-bold mt-20">7-step selling process</h2>
            <ol className="flex flex-col gap-3 mt-20">
              {Steps.map((step, i) => {
                return (
                  <li key={i}>
                    <h3 className="relative text-lg font-semibold mt-4 before:w-16 before:h-1 before:bg-red-500 before:content-[''] before:absolute before:top-10 before:left-5">
                      {step.title}
                    </h3>
                    <p className="text-lg w-full md:w-3/4 mt-8">{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </article>
        </div>
      </section>
    </>
  );
}
