import { useEffect, useState } from "react";
import { Product } from "../types";

export function useLocalStorageFetch(key: string) {
  const [value, setValue] = useState<Product[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(key) ?? "[]");
    if (stored) {
      setValue(stored);
    }
  }, [key]);

  return value;
}
