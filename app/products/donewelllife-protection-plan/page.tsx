import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function DonewellLifeProtectionPlan() {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative flex justify-center items-center h-[30rem]">
          <div className="w-full h-[30rem] md:h-[40rem] flex justify-center">
            <h1 className=" absolute text-5xl font-semibold text-white top-40">
              Donewell <span className="text-red-500"> Life </span> Protection
              Plan
            </h1>
            <Image
              src="/donewell-life.jpg"
              alt="hero image"
              width={2000}
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
