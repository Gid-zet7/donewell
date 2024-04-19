import { ProductDetails } from "@/constant";
import React from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {ProductDetails.map((product) => {
          return (
            <ProductCard
              src={product.src}
              productName={product.productName}
              summary={product.summary}
            />
          );
        })}
      </div>
    </>
  );
}
