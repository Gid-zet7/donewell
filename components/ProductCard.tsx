import Paper from "@mui/material/Paper";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  productName: string;
  summary: string;
};

export default function ProductCard({ src, productName, summary }: Props) {
  return (
    <>
      <Paper className=" w-72 border-t-4 border-red-500">
        <Image src={src} width={300} height={50} alt="product image" />
        <div className="p-3">
          <h1 className="text-md font-semibold">{productName}</h1>
          <p className="mt-2 max-w-md text-center">{summary} </p>
          <a
            href=""
            className="text-red-700 border border-red-600 py-2 px-6 gap-2 rounded inline-flex items-center mt-6 hover:bg-red-700 hover:text-white"
          >
            <span>Read More</span>
            <svg
              className=" w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </Paper>
    </>
  );
}
