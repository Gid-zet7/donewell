import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ExecutiveWealthPlan() {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative flex justify-center items-center h-[30rem]">
          <div className="w-full h-[30rem] md:h-[40rem] flex justify-center">
            <h1 className=" absolute text-5xl font-semibold text-white top-40">
              <span className="text-orange-300">Executive </span> Wealth Plan
            </h1>
            <Image
              src="/exec-wealth.jpg"
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
            <span className="text-orange-300">Future Scholar Policy</span> is
            more than just a financial instrument, it&apos;s a testament to the
            enduring power of education. From kindergarten through tertiary
            level, this policy stands as a steadfast guardian, ensuring that
            your child&apos;s educational aspirations are nurtured and protected
            every step of the way.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 bg-orange-300 mb-20">
        <div className="max-w-6xl mt-48 flex justify-center flex-col items-center">
          <h1 className="text-5xl font-bold">
            &quot;Education is the most powerful{" "}
            <span className="dark:text-black "> weapon</span> which you can use
            to change the world&quot; - Nelson Mandela.
          </h1>

          <div className="flex flex-col md:flex-row mt-10 max-w-6xl mx-auto justify-between text-center gap-20 mb-36">
            <div className="mb-5">
              <Image
                src="/student.png"
                alt="man icon"
                width={200}
                height={100}
              />
              <p className=" w-48 ">
                “An investment in knowledge pay the best interest”- Benjamin
                Franklin
              </p>
              {/* <p className="mt-8 italic">1 Life</p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 mb-20">
        <div className="w-full md:max-w-6xl flex flex-col gap-4 mt-10">
          <h3 className="text-3xl font-semibold">Benefits</h3>
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className=" w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/investment.png"
                width={80}
                height={50}
                alt="investment icon"
              />
              <p>Attractive investment benefit </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
              <Image
                src="/cashback.png"
                width={80}
                height={50}
                alt="cashback icon"
              />
              <p>Partial withdrawal</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/memorial.png"
                width={80}
                height={50}
                alt="memorial icon"
              />
              <p>Memorial benefit</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/save-money.png"
                width={80}
                height={50}
                alt="save-money icon"
              />
              <p>Waiver of premium</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
