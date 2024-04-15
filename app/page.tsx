"use client";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import { Paper } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col">
        <section id="hero" className=" bg-black px-4">
          <div className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 flex flex-col-reverse md:flex-row mt-4 max-w-6xl mx-auto justify-between items-center">
            <article className="md:w-1/2">
              <h2 className="max-w-md text-center text-4xl font-bold text-white sm:text-left sm:text-5xl">
                Welcome to Donewell Agent
              </h2>
              <p className="mt-4 max-w-md text-center text-xl text-slate-400 sm:text-left">
                We pledge to improve the financial security of our clients by
                offering life insurance products that respond to their needs,
                operate with commitment to unparalleled standards of business
                ethics and good governance whilst building shareholder value.
              </p>
              <div className="flex gap-3 mt-3">
                <button className=" px-1 w-5/12 py-2 md:px-3 md:py-4 border-none outline-none rounded-sm bg-red-500">
                  Go to Dashboard
                </button>
                <button className="px-3 w-5/12 py-4 rounded-sm bg-blue-50 text-red-600">
                  Get a demo
                </button>
              </div>
            </article>
            <Image src="/agent.png" alt="" />
          </div>
        </section>

        <hr className="mx-auto w-24 bg-black dark:bg-red-500 " />

        <section className="flex flex-col text-center justify-center mt-12">
          <h1 className="big-text my-12 font-semibold">Core values</h1>
          <div className="wrapper mb-48">
            <CoreValues />
          </div>
        </section>

        <hr className="mx-auto w-24 bg-red-500 " />

        <section className="p-4">
          <Paper className="flex flex-col md:flex-row mt-4 max-w-6xl mx-auto justify-between text-center gap-3 mb-48">
            <div className="md:w-2/5">
              <Image src="/sales-process.png" alt="" />
            </div>
            <div className=" p-6 md:w-1/2 flex flex-col justify-center text-center gap-3">
              <h1 className="text-2xl font-semibold">Sales Process</h1>
              <p>
                There are nine common steps to the selling process:{" "}
                <span className=" font-semibold">
                  prospecting, qualification, needs assesment, presentation,
                  handling objections, closing, follow-up, customer relationship
                  management and asking for referrals
                </span>
                . The first three steps of the selling process involve research
                into prospects&apos; wants and needs, with your presentation
                midway through the selling process.
              </p>
              <button className=" px-3 py-4 border-none outline-none rounded-sm bg-red-500">
                Read more
              </button>
            </div>
          </Paper>
        </section>

        <hr className="mx-auto w-24 bg-red-500 " />
      </main>
    </>
  );
}
