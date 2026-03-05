"use client";

import { useState } from "react";
import { Product } from "../types";

export type useProductsByCategoryProps = {
  product: Product[];
};

export function useProductsByCategory({ product }: useProductsByCategoryProps) {
  const [select, setSelect] = useState<string>("");

  const selectedProduct = product.filter((p) => {
    if (!select || select === "all") return true;
    return p.category === select;
  });

  return { select, selectedProduct, setSelect };
}
