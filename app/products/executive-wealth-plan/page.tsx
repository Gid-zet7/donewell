import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ExecWaitingPeriod from "@/components/ExectWaitingPeriod";
import ExecHospAmount from "@/components/ExecHospAmount";

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
            Are you dealing with rising costs, or mounting debt? Whatever your
            money worries, don&apos;t let them slow down your success for saving
            towards your studies, a dream house, or a dream holiday.
          </p>
          <p className="mt-5">
            <span className="text-orange-300">Executive Wealth Plan</span> is
            designed to grow your money over medium to long term while also
            covering you against death, critical illness and total permanent
            disability. It puts your Money Plan into action by helping you do
            the groundwork to achieve your next big thing!
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 mb-20">
        <div className="w-full md:max-w-6xl flex flex-col gap-4 mt-10">
          <h3 className="text-3xl font-semibold">Main Benefits</h3>
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className=" w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image src="/rip.png" width={80} height={50} alt="rip icon" />
              <p>Death benefit</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
              <Image
                src="/fender-bender.png"
                width={80}
                height={50}
                alt="fender-bender icon"
              />
              <p>Accidental benefit</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/green-leaf.png"
                width={80}
                height={50}
                alt="green-leaf icon"
              />
              <p>Maturity bonus</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/growth.png"
                width={80}
                height={50}
                alt="growth icon"
              />
              <p>Maturity benefit</p>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full md:max-w-6xl">
          <h1 className="text-2xl font-semibold">
            Add-on / Voluntary benefits you can choose
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/medical.png"
                width={80}
                height={50}
                alt="medical icon"
              />
              <p>Critical Illness</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/hospital-bed.png"
                width={80}
                height={50}
                alt="hospital-bed icon"
              />
              <p>Hospitalization Coverage</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/wheelchair.png"
                width={80}
                height={50}
                alt="wheelchair icon"
              />
              <p>Total Permanent disability</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 mb-20">
        <div className="mt-20">
          <h1 className="text-5xl font-bold">Waiting Period</h1>
        </div>
        <div className="max-w-4xl flex justify-center items-center">
          <ExecWaitingPeriod />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 mb-20">
        <div className="mt-20">
          <h1 className="text-5xl font-bold">Daily Hospital Amount</h1>
        </div>
        <div className="max-w-4xl flex justify-center items-center">
          <ExecHospAmount />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 bg-red-600">
        <div className="w-full md:max-w-6xl p-5 my-20">
          <h1 className="text-5xl font-bold">
            Some <span className="text-black">unique</span> features and
            benefits
          </h1>
          <ul>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/customization.png"
                width={30}
                height={20}
                alt="customization icon"
              />
              Customise your plan
            </li>
            <p className="text-gray-300">
              You choose the type of cover and benefits that best suit your
              needs and budget.
            </p>

            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image src="/rip.png" width={30} height={20} alt="rip icon" />
              Death Benefit
            </li>
            <p className="text-gray-300">
              A lump sum payment equal to the Sum Assured on the death of the
              life insured
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/fender-bender.png"
                width={30}
                height={20}
                alt="fender-bender icon"
              />
              Accidental Death
            </li>
            <p className="text-gray-300">
              it, a lump sum payment equal to the death benefit will be paid if
              the policyholder&apos;s death is caused by an accident
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/medical.png"
                width={30}
                height={20}
                alt="medical icon"
              />
              Critical Illness
            </li>
            <p className="text-gray-300">
              A lump sum payment equal to 50% of the death benefit if the main
              life is diagnosed with any of the named critical illness. This
              benefit is an accelerated death benefit
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/growth.png"
                width={30}
                height={20}
                alt="growth icon"
              />
              Maturity benefit
            </li>
            <p className="text-gray-300">
              A lump sum payment equal to the Sum Assured less all unpaid
              premiums.
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/green-leaf.png"
                width={30}
                height={20}
                alt="green-leaf icon"
              />
              Maturity bonus
            </li>
            <p className="text-gray-300">
              Bonus of 2% simple interest on the Sum Assured at maturity will be
              paid provided all premiums have been paid to date. The maturity
              bonus will not apply if a premium was missed throughout the policy
              term.
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/hospital-bed.png"
                width={30}
                height={20}
                alt="hospital-bed icon"
              />
              Hospitalisation
            </li>
            <p className="text-gray-300">
              A lump sum payment will be paid for each day the life insured is
              hospitalised as a result of illness or injury during the policy
              term, subject to a minimum and maximum number of 5 and 20 days
              respectively
            </p>
          </ul>
        </div>
      </section>
    </>
  );
}
