"use client";

import { useMemo, useState } from "react";
import { Product } from "../types";

export type useSortProductProps = {
  product: Product[];
};

export function useSortProduct({ product }: useSortProductProps) {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const sortedProduct = useMemo(() => {
    return [...product].sort((a, b) => {
      const aDate = new Date(a.createdAt).getTime();
      const bDate = new Date(b.createdAt).getTime();

      return sortDirection === "asc" ? aDate - bDate : bDate - aDate;
    });
  }, [product, sortDirection]);

  return { sortDirection, sortedProduct, setSortDirection };
}
