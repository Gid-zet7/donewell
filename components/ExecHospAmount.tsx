import React from "react";

export default function ExecHospAmount() {
  return (
    <div className="relative overflow-x-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-black overflow-x-auto">
        <thead className="text-xs text-white uppercase bg-red-600">
          <tr>
            <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
              Option
            </th>
            <th scope="col" className="px-3 py-1 md:px-6 md:py-3">
              Daily Hospitalisation amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Option 1</td>
            <td className="px-4 py-2 md:px-6 md:py-4">Ghc 30</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Option 2</td>
            <td className="px-4 py-2 md:px-6 md:py-4">Ghc 60</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Option 3</td>
            <td className="px-4 py-2 md:px-6 md:py-4">Ghc 90</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Option 4</td>
            <td className="px-4 py-2 md:px-6 md:py-4">Ghc 120</td>
          </tr>
          <tr className="bg-white border-b  dark:border-gray-700">
            <td className="px-4 py-2 md:px-6 md:py-4">Option 5</td>
            <td className="px-4 py-2 md:px-6 md:py-4">Ghc 150</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
