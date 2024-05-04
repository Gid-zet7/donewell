import React from "react";

export default function ExecWaitingPeriod() {
  return (
    <div className="relative overflow-x-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-black overflow-x-auto">
        <thead className="text-xs text-white uppercase bg-red-600">
          <tr>
            <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
              Benefit
            </th>
            <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
              Waiting Period
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Death (Main Life)</td>
            <td className="px-4 py-2 md:px-6 md:py-4">12 months</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Accidental Death</td>
            <td className="px-4 py-2 md:px-6 md:py-4">No waiting period</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Maturity benefit</td>
            <td className="px-4 py-2 md:px-6 md:py-4">No waiting period</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Critical Illness</td>
            <td className="px-4 py-2 md:px-6 md:py-4">12 months</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">
              Total Permanent Disability
            </td>
            <td className="px-4 py-2 md:px-6 md:py-4">12 months</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Hospilisation</td>
            <td className="px-4 py-2 md:px-6 md:py-4">
              6 Months- Unless Hospitalisation is Due to accident
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
