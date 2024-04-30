import React from "react";

export default function RFPWaitingPeriod() {
  return (
    <div className="relative overflow-x-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-black overflow-x-auto">
        <thead className="text-xs text-white uppercase bg-red-600">
          <tr>
            <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
              Cover
            </th>
            <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
              Waiting Period
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Death (Main Life)</td>
            <td className="px-4 py-2 md:px-6 md:py-4">6 months</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">
              Death (Nominated lives)
            </td>
            <td className="px-4 py-2 md:px-6 md:py-4">6 months</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Accidental Death</td>
            <td className="px-4 py-2 md:px-6 md:py-4">No waiting period</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Note</td>
            <td className="px-4 py-2 md:px-6 md:py-4">
              When the death happens in the waiting period, the sum assured{" "}
              <span className="text-red-500">
                will not be paid for that life
              </span>{" "}
              (main and nominated) but the premiums paid will be refunded.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
