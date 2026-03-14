"use client";

import { EmptyBanner } from "@/global/components";
import { formattedCategory } from "@/global/constants";
import { useLocalStorageFetch } from "@/global/hooks";
import { Product } from "@/global/types";
import { Card } from "@/ui/components";
import { Button } from "@/ui/components/Button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const { productId } = useParams();
  const products = useLocalStorageFetch("local-products");

  const [product, setProduct] = useState<Product | null>(null);

  // Format date
  function formattedDate(date: string) {
    return new Date(date).toLocaleDateString("en-US");
  }

  // Fetch Product
  useEffect(() => {
    const filteredProduct = products.find(
      (product: Product) => product.id === productId,
    );

    setProduct(filteredProduct ?? null);
  }, [products, productId]);

  if (!product) {
    return (
      <div className="h-full p-4 w-full flex items-center justify-center">
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
        {/* Return to home page */}
        <Link
          href={"/"}
          className="text-sm text-blue-500 hover:underline self-start"
        >
          ← Back to products
        </Link>

        {/* Top Section */}
        <Card
          className="grid md:grid-cols-2 gap-8 sm:gap-12 p-4 sm:p-8 rounded-2xl"
          variant={"basic2"}
        >
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.src}
              alt="product-image"
              className="max-sm:aspect-square rounded-xl object-cover w-full sm:h-[18rem]"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col h-full gap-6">
              <h1 className="text-xl sm:text-3xl font-bold text-white">
                {product.name}
              </h1>

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
            </div>

            {/* Action Button */}
            <Link href={`/edit-product/${product.id}`}>
              <Button className="font-semibold" variant={"edit"}>
                Edit Product
              </Button>
            </Link>
          </div>
        </Card>

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
