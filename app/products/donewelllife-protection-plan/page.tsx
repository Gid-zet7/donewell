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

      <hr className="mx-auto w-24 bg-black dark:bg-red-500 mt-36 md:mt-40" />

      <section className="flex flex-col justify-center items-center">
        <div className=" mt-20 md:mt-34 flex justify-center flex-col px-4 max-w-6xl mb-20">
          <h1 className=" text-5xl font-bold">Donewell life Protection Plan</h1>
          <h6 className="mt-3 font-semibold">
            Introducing the DoneWell Life Protection Policy Experience
          </h6>
          <p className=" mt-10">
            Peace of mind and security with our comprehensive term assurance
            product, the DoneWell Life Protection Policy. Designed to safeguard
            your family&apos;s financial well-being in the face of life&apos;s
            uncertainties, this policy offers a range of benefits tailored to
            your needs.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 bg-red-600 mb-20">
        <div className="w-full md:max-w-6xl p-5 my-20">
          <h1 className="text-5xl font-bold">Flexible Terms and Options:</h1>
          <ul className="flex flex-col gap-10">
            <li className="mt-8">
              • Age at Inception: Open to individuals aged 18 to 55 years,
              ensuring accessibility to a wide range of individuals.
            </li>

            <li className="">
              • Sum Assured: Choose a sum assured between GH 10,000 and GH
              100,000, tailored to your specific needs and circumstances.
            </li>

            <li className="">
              • Waiting Period: Benefit from a waiting period tailored to your
              sum assured, ensuring that coverage comes into effect when you
              need it most.
            </li>

            <li className="">
              • Term Length: Select a term length between 10 and 40 years,
              providing flexibility to meet your long-term financial goals.
            </li>
          </ul>
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
                src="/medical.png"
                width={80}
                height={50}
                alt="medical icon"
              />
              <p>Critical Illness</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image
                src="/wheelchair.png"
                width={80}
                height={50}
                alt="wheelchair icon"
              />
              <p>Total Permanent Disability Benefit</p>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full md:max-w-6xl">
          <h1 className="text-2xl font-semibold">
            Add-on / Voluntary benefits you can choose
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image src="/mother.png" width={80} height={50} alt="" />
              <p>Maternity Complications Coverage</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image src="/hospital-bed.png" width={80} height={50} alt="" />
              <p>Hospitalization Coverage</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-around items-center py-3 bg-white text-black rounded-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <Image src="/mothers-day.png" width={80} height={50} alt="" />
              <p>Female Related Illness Coverage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-0 bg-red-600 mb-20">
        <div className="w-full md:max-w-6xl p-5 my-20">
          <h1 className="text-5xl font-bold">
            Some <span className="text-black">unique</span> features and
            benefits
          </h1>
          <ul className="flex flex-col gap-10">
            <li className="mt-8">
              • <span className=" font-semibold">Death Benefit:</span> Provides
              financial support for your family in the event of your passing,
              ensuring their continued financial stability.
            </li>

            <li className="">
              •{" "}
              <span className=" font-semibold">Critical Illness Coverage:</span>{" "}
              Offers protection against the financial burden of critical
              illnesses, providing you with the necessary funds to cover medical
              expenses and maintain your lifestyle.
            </li>

            <li className="">
              •{" "}
              <span className=" font-semibold">
                Total Permanent Disability Benefit:
              </span>{" "}
              Assists you in the event of total permanent disability, ensuring
              that you and your family are provided for during difficult times.
            </li>

            <li className="">
              •{" "}
              <span className=" font-semibold">
                Optional Maternity Complications Coverage:
              </span>{" "}
              Additional coverage for maternity complications, offering peace of
              mind during pregnancy and childbirth.
            </li>
            <li className="">
              •{" "}
              <span className=" font-semibold">
                Optional Hospitalization Coverage:
              </span>{" "}
              Offers financial support for hospitalization expenses, ensuring
              that you receive the best possible care without worrying about the
              associated costs.
            </li>
            <li className="">
              •{" "}
              <span className=" font-semibold">
                Optional Female Related Illness Coverage:
              </span>{" "}
              Coverage for female-related illnesses, providing support and
              financial assistance when facing health challenges specific to
              women.
            </li>
            <li className="">
              • <span className=" font-semibold">Cash Back Benefit:</span>
              Enjoy the benefit of receiving a percentage of your premiums back
              every five years if no claims have been made, rewarding you for
              maintaining your policy.
            </li>
            <li className="">
              •{" "}
              <span className=" font-semibold">Accelerated Death Benefit:</span>{" "}
              Provides early access to a portion of your policy proceeds upon
              the occurrence of a specialized event, such as terminal illness,
              offering financial support when you need it most.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
