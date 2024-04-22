import React from "react";

export default function CoverLevels() {
  return (
    <>
      <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-black overflow-x-auto">
          <thead className="text-xs text-white uppercase bg-red-600">
            <tr>
              <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
                Who can be covered
              </th>
              <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
                sum Assured
              </th>

              <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
                Minimum
              </th>
              <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
                Maximum
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  dark:border-gray-700">
              <td className="px-4 py-2 md:px-6 md:py-4">
                Principal Life Assured
              </td>
              <td className="px-4 py-2 md:px-6 md:py-4">100%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 5000</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 100 000</td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-700">
              <td className="px-4 py-2 md:px-6 md:py-4">Spouse</td>
              <td className="px-4 py-2 md:px-6 md:py-4">100%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 5000</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 100 000</td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-700">
              <td className="px-4 py-2 md:px-6 md:py-4">Children</td>
              <td className="px-4 py-2 md:px-6 md:py-4">25%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 1250</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 25 000</td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-700">
              <td className="px-4 py-2 md:px-6 md:py-4">
                Parents/ Parent in-law
              </td>
              <td className="px-4 py-2 md:px-6 md:py-4">50%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 2500</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 50 000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
