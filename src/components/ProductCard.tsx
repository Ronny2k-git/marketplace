"use client";

import { Product } from "@/utils/utils";
import Link from "next/link";

export function ProductCard({
  id,
  src,
  name,
  price,
  payment,
  description,
}: Product) {
  const handleDelete = () => {
    const savedProducts = JSON.parse(
      localStorage.getItem("local-products") ?? "[]",
    );

    const updatedProducts = savedProducts.filter(
      (product: Product) => product.id !== id,
    );

    localStorage.setItem("local-products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="w-full p-4 flex flex-col border border-gray-700 bg-gray-900 rounded-lg gap-4">
      {/* Image */}
      <div className="flex items-center justify-center">
        <img
          alt="product-image"
          className="aspect-video min-h-48 object-cover rounded-md"
          src={src}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">{name}</h3>

        <div className="text-gray-400 font-bold">
          Product description:{" "}
          <span className="text-blue-600">{description}</span>
        </div>

        <div className="text-white font-bold">
          Product Price: <span className="text-blue-600">{price}</span>
        </div>
        <p className="text-sm text-gray-400">{`Payment method: ${payment}`}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-2">
        <Link
          href={`/edit-product/${id}`}
          className="flex-1 h-10 flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 rounded-md font-semibold"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="flex-1 h-10 bg-red-600 hover:bg-red-500 rounded-md font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
