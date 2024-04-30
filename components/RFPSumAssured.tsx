import React from "react";

export default function RFPSumAssured() {
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
              <td className="px-4 py-2 md:px-6 md:py-4">Main Life</td>
              <td className="px-4 py-2 md:px-6 md:py-4">100%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 5000</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 30 000</td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-700">
              <td className="px-4 py-2 md:px-6 md:py-4">Spouse</td>
              <td className="px-4 py-2 md:px-6 md:py-4">100%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 5000</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 30 000</td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-700">
              <td className="px-4 py-2 md:px-6 md:py-4">
                Children less than 18
              </td>
              <td className="px-4 py-2 md:px-6 md:py-4">25%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 1000</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 7 500</td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-700">
              <td className="px-4 py-2 md:px-6 md:py-4">
                Children less more 18
              </td>
              <td className="px-4 py-2 md:px-6 md:py-4">50%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 2 500</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 15 000</td>
            </tr>
            <tr className="bg-white border-b  dark:border-gray-700">
              <td className="px-4 py-2 md:px-6 md:py-4">
                All other nominated lives
              </td>
              <td className="px-4 py-2 md:px-6 md:py-4">50%</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 2 500</td>
              <td className="px-4 py-2 md:px-6 md:py-4">GHC 15 000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
