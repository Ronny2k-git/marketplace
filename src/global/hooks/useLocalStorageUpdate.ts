import { Product } from "../types";
import { useLocalStorageFetch } from "./useLocalStorageFetch";

type useLocalStorageUpdateProps = {
  key: string;
  productId: string;
  form: {
    imageURL: string;
    productName: string;
    description: string;
    category: string;
  };
  onSuccess: VoidFunction;
};

export function useLocalStorageUpdate({
  key,
  productId,
  form,
  onSuccess,
}: useLocalStorageUpdateProps) {
  const savedProducts = useLocalStorageFetch(key);

  // 1. Update product
  const handleUpdate = () => {
    const updateProduct = savedProducts.map((p: Product) => {
      if (p.id === productId) {
        return {
          ...p,
          src: form.imageURL,
          name: form.productName,
          description: form.description,
          category: form.category,
          updatedAt: new Date().toISOString(),
        };
      }
      return p;
    });

    // 2. Save again in local storage
    localStorage.setItem(key, JSON.stringify(updateProduct));

    // 3.Message
    onSuccess?.();
  };

  return { handleUpdate };
}
