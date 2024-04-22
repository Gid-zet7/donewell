import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import CoverLevels from "@/components/CoverLevels";
import WaitingPeriod from "@/components/WaitingPeriod";

export default function FamilyLifePolicy() {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative flex justify-center items-center h-[30rem]">
          <div className="w-full h-[30rem] md:h-[40rem] flex justify-center">
            <h1 className=" absolute text-5xl font-semibold text-white top-40">
              Family <span className="text-red-500">life </span>Protection Plan
            </h1>
            <Image
              src="/fammy.jpg"
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
          <h1 className=" text-5xl font-bold">
            Understanding <span className="">Family Life</span> Protection Plan
          </h1>
          <p className=" mt-10">
            During the chaos of everyday life, it is crucial to prioritize the
            safety and happiness of our family members. Despite our best
            efforts, unexpected events can sometimes put our loved ones at risk.
            This is where Family Life Protection Plan Policy comes in, providing
            financial stability and peace of mind.{" "}
          </p>
          <p className="mt-5">
            <span className="text-red-500">Family Life Protection Plan</span>, a
            whole life protection plan, where a one-time payment, called the
            death benefit is paid to the policyholder's beneficiaries when the
            policy holder passes away. This financial assistance is vital for
            families in times of grief, helping them cope with the difficulties
            that come after a loss
          </p>
        </div>
      </section>

      {/* <hr className="mx-auto w-24 bg-black dark:bg-red-500 mt-40" /> */}

      <section className="flex flex-col justify-center items-center px-4 bg-red-600 mb-20">
        <div className="max-w-6xl mt-48 flex justify-center flex-col items-center">
          <h1 className=" text-5xl font-bold">
            Protect your whole<span className="text-black"> Family</span> on one
            plan
          </h1>
          <p className="mt-5 font-semibold">
            We offer the following flexible and affordable funeral plans
          </p>
          <div className="flex flex-col md:flex-row mt-10 max-w-6xl mx-auto justify-between text-center gap-20 mb-36">
            <div className="mb-5">
              <Image src="/man.png" alt="man icon" width={100} height={50} />
              <p>Single</p>
              <p>(Plan owner)</p>
              <p className="mt-8 italic">1 Life</p>
            </div>
            <div>
              <Image
                src="/woman.png"
                alt="woman icon"
                width={100}
                height={50}
              />
              <p>Your life patner</p>
              <p className="mt-8 italic">Up to 2 Lives</p>
            </div>
            <div>
              <Image
                src="/sister-and-brother.png"
                alt="children"
                width={100}
                height={50}
              />
              <p> Your Children</p>
              <p className="mt-8 italic">Child x6 Lives</p>
            </div>
            <div>
              <Image src="/fam.svg" alt="fam" width={100} height={50} />
              <p>Parents</p>
              <p className="mt-8 italic">Up to 4 Lives</p>
            </div>
          </div>
          <p className=" uppercase font-semibold mb-1 text-black">
            You may cover up to 13 lives including the plan owner
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 mb-20">
        <div className="w-full md:max-w-6xl">
          <h1 className="text-5xl font-bold">What we offer</h1>
          <h2 className="text-4xl text-red-500 mt-10 font-semibold">
            Benefits
          </h2>
          <p className="mt-4 w-full md:w-2/3">
            The Policy holder is entitled to the following Compulsory / Standard
            Benefits provided under this policy as long as the policy remains
            active
          </p>
        </div>
        <div className="w-full md:max-w-6xl flex flex-col gap-4 mt-10">
          <h3 className="text-3xl font-semibold">Main Benefits</h3>
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <Paper className=" w-full md:w-1/2 flex justify-around items-center py-3">
              <Image src="/rip.png" width={80} height={50} alt="rip icon" />
              <p>Death Benefit</p>
            </Paper>
            <Paper className="w-full md:w-1/2 flex justify-around items-center py-3 ">
              <Image src="/happiness.png" width={80} height={50} alt="" />
              <p>Refreshment</p>
            </Paper>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Paper className="w-full md:w-1/2 flex justify-around items-center py-3">
              <Image src="/medical.png" width={80} height={50} alt="" />
              <p>Critical Illness</p>
            </Paper>
            <Paper className="w-full md:w-1/2 flex justify-around items-center py-3">
              <Image src="/save-money.png" width={80} height={50} alt="" />
              <p>Waiver of premium</p>
            </Paper>
          </div>
        </div>
        <div className="mt-10 w-full md:max-w-6xl">
          <h1 className="text-2xl font-semibold">
            Add-on / Voluntary benefits you can choose
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <Paper className="w-full md:w-1/2 flex justify-around items-center py-3">
              <Image src="/fired.png" width={80} height={50} alt="" />
              <p>Redundancy Benefit</p>
            </Paper>
            <Paper className="w-full md:w-1/2 flex justify-around items-center py-3">
              <Image src="/incremental.png" width={80} height={50} alt="" />
              <p>Annual Premium and Benefit Increase Option</p>
            </Paper>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 mb-20">
        <div className="mt-20">
          <h1 className="text-5xl font-bold">Cover Levels</h1>
        </div>
        <div className="max-w-4xl flex justify-center items-center">
          <CoverLevels />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 mb-20">
        <div className="mt-20">
          <h1 className="text-5xl font-bold">Waiting Period</h1>
        </div>
        <div className="max-w-4xl flex justify-center items-center">
          <WaitingPeriod />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 bg-red-600">
        <div className="w-full md:max-w-6xl p-5 my-20">
          <h1 className="text-5xl font-bold">
            Some <span className="text-black">unique</span> features and
            benefits
          </h1>
          <ul>
            <li className="text-xl font-semibold mt-6 text-black">
              Customise your plan
            </li>
            <p className="text-gray-300">
              You choose the type of cover and benefits that best suit your
              needs and budget
            </p>
            <li className="text-xl font-semibold mt-6 text-black">
              No medical health checks
            </li>
            <p className="text-gray-300">Only waiting periods apply</p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image src="/rip.png" width={30} height={20} alt="rip icon" />
              Death Benefit
            </li>
            <p className="text-gray-300">
              A lump sum is paid to cover funeral expenses when someone covered
              by the policy passes away
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image
                src="/happiness.png"
                width={30}
                height={20}
                alt="rip icon"
              />
              Refreshment Benefit
            </li>
            <p className="text-gray-300">
              We will make a one-off lump sum payment on the first death of any
              life covered under the policy
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image src="/medical.png" width={30} height={20} alt="rip icon" />
              Critical Illness
            </li>
            <p className="text-gray-300">
              A lump sum payment equal to 50% of the death benefit if the main
              life is diagnosed with any of the named critical illness. This
              benefit is an accelerated death benefit
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
              In the event of the main life's death, all future expense and
              dependent premiums are waived
            </p>
            <li className="text-xl font-semibold mt-6 text-black flex items-center gap-3">
              <Image src="/fired.png" width={30} height={20} alt="rip icon" />
              Redundancy
            </li>
            <p className="text-gray-300">
              An optional or voluntary benefit which waives premiums for a
              period of 6 months if the main member is made redundant from their
              job
            </p>
          </ul>
        </div>
      </section>
    </>
  );
}
