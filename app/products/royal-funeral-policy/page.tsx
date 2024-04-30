import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CoverLevels from "@/components/CoverLevels";
import RFPSumAssured from "@/components/RFPSumAssured";
import RFPWaitingPeriod from "@/components/RFPWaitingPeriod";

export default function RoyalFuneralPolicy() {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative flex justify-center items-center h-[30rem]">
          <div className="w-full h-[30rem] md:h-[40rem] flex justify-center">
            <h1 className=" absolute text-5xl font-semibold top-40 text-gray-300">
              Royal <span className="text-red-500">Funeral </span>Policy
            </h1>
            <Image
              src="/funeral.jpg"
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
          <h1 className=" text-5xl font-bold">Royal Funeral Policy</h1>
          <h6 className="mt-3 font-semibold">
            Welcome to the Royal Funeral Policy: Where Dignity Meets Assurance
          </h6>
          <p className=" mt-10">
            Every individual has parts to play in life as if it were still a
            grand stage production with every participant knowing his/her lines.
            While we may rehearse our lines and perfect our acts, there&apos;s
            one scene none of us can evade: the final curtain call. None of us
            choose when they will die; Death is by appointment, not election.
            Embracing this certainty, we introduce the Royal Funeral Policy, to
            serve as a source of hope during major life issues.
          </p>
          <p className="mt-5">
            <span className="text-red-500">
              Purpose Beyond Mortality More than just a policy
            </span>
            , the Royal Funeral Policy stands as a testament to preparedness and
            compassion. It&apos;s a whole life policy meticulously crafted to
            extend a dignified farewell to both the policyholder and their
            cherished dependents.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 bg-red-600 mb-20">
        <div className="max-w-6xl mt-48 flex justify-center flex-col items-center">
          <h1 className=" text-5xl font-bold">
            A canopy of protection under which your
            <span className="dark:text-black "> loved ones</span> find solace
          </h1>
          <p className="mt-5 font-semibold">
            We offer the following flexible and affordable funeral plans
          </p>
          <div className="flex flex-col md:flex-row mt-10 max-w-6xl mx-auto justify-between text-center gap-20 mb-36">
            <div className="mb-5">
              <Image
                src="/covered.png"
                alt="man icon"
                width={200}
                height={100}
              />
              <p className=" w-36 ml-[1rem]">
                Protect your whole family under one policy
              </p>
              {/* <p className="mt-8 italic">1 Life</p> */}
            </div>
          </div>
          <p className=" uppercase font-semibold mb-1 text-black">
            You may cover up to 13 lives including the plan owner
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 mb-20">
        <div className="w-full md:max-w-6xl flex flex-col gap-4 mt-10">
          <h3 className="text-3xl font-semibold">Benefits</h3>
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className=" w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/refund.png"
                width={80}
                height={50}
                alt="refund icon"
              />
              <p>No claim refund</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
              <Image
                src="/cashback.png"
                width={80}
                height={50}
                alt="cashback icon"
              />
              <p>Cash back benefit</p>
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

      <section className="flex flex-col justify-center items-center px-4 mb-20">
        <div className="mt-20">
          <h1 className="text-5xl font-bold">Cover Levels</h1>
        </div>
        <div className="max-w-4xl flex justify-center items-center">
          <RFPSumAssured />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 mb-20">
        <div className="mt-20">
          <h1 className="text-5xl font-bold">Waiting Period</h1>
        </div>
        <div className="max-w-4xl flex justify-center items-center">
          <RFPWaitingPeriod />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 bg-red-600">
        <div className="w-full md:max-w-6xl p-5 my-20">
          <h1 className="text-5xl font-bold">
            <span className="text-black">features</span> and benefits
          </h1>
          <ul>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/refund.png"
                width={30}
                height={20}
                alt="refund icon"
              />
              No refund claim
            </li>
            <p className="text-gray-300">
              A return of premium equal to 20% of the total premium paid by the
              primary insured/ main life during the prior 3 years is refunded
              every 3 years if no claim is made during the period and the policy
              is active. This is minus policy fee. For all other lives covered,
              a return of premium equal to 25% of the total premium paid for
              nominated lives during the prior 5 years would be refunded.
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/cashback.png"
                width={30}
                height={20}
                alt="cashback icon"
              />
              Cash Back Benefit
            </li>
            <p className="text-gray-300">
              Clients also have the option of putting aside a minimum of GH¢
              10.00 and a maximum of GH¢ 200 in addition to their monthly
              premium for an investment retrieval every other three years. The
              Cash back benefit account accrues an interest of 5% annually and
              withdrawal (Up to 50% of accumulated funds) is allowed after 2
              years of continuous contribution.
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/memorial.png"
                width={30}
                height={20}
                alt="memorial icon"
              />
              Memorial Benefit
            </li>
            <p className="text-gray-300">
              7 days, 40 days and 1 year memorial benefit is available on the
              Royal Funeral Policy. Half (50%) of the Sum Assured for the life
              (Main and Nominated) is paid at each memorial. Half (50%) of basic
              premium is also charged for each memorial.
            </p>

            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/save-money.png"
                width={30}
                height={20}
                alt="rip icon"
              />
              Waiver of Premium
            </li>
            <p className="text-gray-300">
              Waives the premium of Nominated Lives upon the death of Main Life.
              Main Life should have purchased the policy before age 55 age next
              birthday. 10% of basic premium of nominated life is charged for
              the waiver benefit and Automatic Waiver for Main Life at age 65
            </p>
          </ul>
        </div>
      </section>
    </>
  );
}
