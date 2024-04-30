import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function FutureScholarPlan() {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative flex justify-center items-center h-[30rem]">
          <div className="w-full h-[30rem] md:h-[40rem] flex justify-center">
            <h1 className=" absolute text-5xl font-semibold text-white top-40">
              Future <span className="text-red-500"> Scholar </span>Plan
            </h1>
            <Image
              src="/scholar.jpg"
              alt="hero image"
              width={2000}
              height={100}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <hr className="mx-auto w-24 bg-black dark:bg-red-500 mt-36 md:mt-40" />

      <section className="flex flex-col justify-center items-center">
        <div className=" mt-20 md:mt-34 flex justify-center flex-col px-4 max-w-6xl mb-20">
          <h1 className=" text-5xl font-bold">Future Scholar Policy</h1>
          <h6 className="mt-3 font-semibold">
            Embark on a Journey of Knowledge with the Future Scholar Policy
          </h6>
          <p className=" mt-10">
            In the vast journey of life, few investments are as precious as
            education. It&apos;s the cornerstone upon which dreams are built,
            the key that unlocks countless opportunities, and the beacon that
            illuminates the path to a brighter future. Recognizing the profound
            importance of education, we proudly introduce the Future Scholar
            Policy, an investment linked life assurance policy designed to
            safeguard the educational journey of your child.
          </p>
          <p className="mt-5">
            At its core, the{" "}
            <span className="text-red-500">Future Scholar Policy</span> is more
            than just a financial instrument, it&apos;s a testament to the
            enduring power of education. From kindergarten through tertiary
            level, this policy stands as a steadfast guardian, ensuring that
            your child&apos;s educational aspirations are nurtured and protected
            every step of the way.
          </p>
        </div>
      </section>
    </>
  );
}
