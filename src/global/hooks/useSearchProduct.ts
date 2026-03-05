"use client";

import { useState } from "react";
import { Product } from "../types";

export type useSearchProduct = {
  product: Product[];
};

export function useSearchProduct({ product }: useSearchProduct) {
  const [search, setSearch] = useState<string>("");

  const searchFilteredProduct = product.filter((p) => {
    return p.name.toLowerCase().includes(search.toLowerCase());
  });

  return { search, searchFilteredProduct, setSearch };
}
