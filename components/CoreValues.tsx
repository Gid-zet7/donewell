import React from "react";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import { Constants } from "@/constant";

export default function CoreValues() {
  return (
    <>
      <div className="flex flex-wrap justify-center text-center gap-1">
        {Constants.map((constant) => (
          <div key={constant.key}>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={constant.src}
                alt="analysis"
                width={50}
                height={30}
                className="items-center "
              />
              <p className=" mb-1 text-2xl font-semibold text-blue-400">
                {constant.title}
              </p>
              <div className="p-4 w-72">
                <p className="mb-4 text-lg font-normal dark:text-gray-400">
                  {constant.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
