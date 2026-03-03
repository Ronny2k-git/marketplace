"use client";

import { Product } from "@/utils/utils";
import Link from "next/link";

export function ProductCard({
  id,
  src,
  name,
  data,
  description,
  category,
}: Product) {
  // const handleDelete = () => {
  //   const savedProducts = JSON.parse(
  //     localStorage.getItem("local-products") ?? "[]",
  //   );

  //   const updatedProducts = savedProducts.filter(
  //     (product: Product) => product.id !== id,
  //   );

  //   localStorage.setItem("local-products", JSON.stringify(updatedProducts));
  // };

  return (
    <div className="w-full p-4 flex flex-col border border-gray-700 bg-gray-900 rounded-lg gap-6">
      {/* Image */}
      <img
        alt="product-image"
        className="aspect-video min-h-52 object-cover rounded-md"
        src={src}
      />

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <span className="px-2 py-1 text-xs text-center bg-blue-600/40 text-blue-400 rounded-full">
          {category}
        </span>

        <h3 className="text-lg font-semibold line-clamp-1">{name}</h3>

        <div className="text-white font-semibold line-clamp-4">
          Product description:{" "}
          <span className="text-gray-400 font-normal">{description}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col justify-end h-full gap-2">
        <div className="text-white font-semibold">
          Created at: <span className="text-blue-600 font-normal">{data}</span>
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-6">
          <Link
            href={`/edit-product/${id}`}
            className="flex-1 h-10 flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 rounded-md font-semibold"
          >
            Edit
          </Link>

          <Link
            href={`/product/${id}`}
            className="flex-1 h-10 flex items-center justify-center bg-blue-700 hover:bg-blue-600 rounded-md font-semibold"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
