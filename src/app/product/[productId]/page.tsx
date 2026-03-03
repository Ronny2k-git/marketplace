"use client";

import { EmptyBanner } from "@/global/components";
import { Product, category } from "@/utils";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Category = (typeof category)[number];

const formattedCategory: Record<Category, string> = {
  electronics: "Electronics",
  clothing: "Clothing",
  home: "Home & Kitchen",
  books: "Books",
  sports: "Sports",
  beauty: "Beauty",
  toys: "Toys",
};

export default function ProductPage() {
  const { productId } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);

  // Format date
  function formattedDate(date: string) {
    return new Date(date).toLocaleDateString("en-US");
  }

  // Fetch Product
  useEffect(() => {
    const localProducts = JSON.parse(
      localStorage.getItem("local-products") ?? "[]",
    );

    const foundProduct = localProducts.find(
      (product: Product) => product.id === productId,
    );

    setProduct(foundProduct ?? null);
  }, [productId]);

  if (!product) {
    return (
      <div className="h-[calc(100vh-88px)] p-4 bg-gray-950 w-full flex items-center justify-center">
        <EmptyBanner
          title="No products found"
          subtitle="Try again with different terms"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full flex justify-center px-4 py-10 bg-gray-950">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="text-sm text-blue-500 hover:underline self-start"
        >
          ← Back to products
        </button>

        {/* Top Section */}
        <section className="grid md:grid-cols-2 gap-8 sm:gap-12 bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.src}
              alt="product-image"
              className="rounded-xl object-cover w-full max-h-[18rem]"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-white">{product.name}</h1>

            <span className="px-3 py-1 w-fit text-sm bg-blue-600/20 text-blue-400 rounded-full">
              {formattedCategory[product.category]}
            </span>

            <div className="text-sm text-gray-400">
              Product ID: <span className="text-gray-300">{product.id}</span>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              <span>
                Created:{" "}
                <span className="text-blue-400">
                  {formattedDate(product.createdAt)}
                </span>
              </span>

              <span>
                Updated:{" "}
                <span className="text-yellow-400">
                  {formattedDate(product.updatedAt)}
                </span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <Link
                href={`/edit-product/${product.id}`}
                className="flex-1 h-10 flex items-center justify-center bg-yellow-600 hover:bg-yellow-500 rounded-md font-semibold"
              >
                Edit Product
              </Link>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold text-gray-300 mb-6">
            Product Description
          </h2>

          <p className="text-gray-400 whitespace-pre-line leading-relaxed">
            {product.description}
          </p>
        </section>
      </div>
    </main>
  );
}
