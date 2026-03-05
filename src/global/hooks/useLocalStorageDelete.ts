import { useLocalStorageFetch } from "./useLocalStorageFetch";

type useLocalStorageDeleteProps = {
  key: string;
  productId: string;
  onSuccess?: VoidFunction;
};

export function useLocalStorageDelete({
  key,
  productId,
  onSuccess,
}: useLocalStorageDeleteProps) {
  const products = useLocalStorageFetch(key);

  const handleDelete = () => {
    // 1. Delete a specific product
    const filteredProducts = products.filter((p) => p.id !== productId);

    // 2. Save the products again
    localStorage.setItem(key, JSON.stringify(filteredProducts));

    // 3. Success
    onSuccess?.();
  };

  return { handleDelete };
}
