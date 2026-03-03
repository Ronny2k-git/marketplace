"use client";

import { PageHeader } from "@/global/components";
import { Product } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState("");

  // Fetch products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem("local-products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Delete product
  const handleDelete = (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    const updatedProducts = products.filter((p) => p.id !== id);

    setProducts(updatedProducts);
    localStorage.setItem("local-products", JSON.stringify(updatedProducts));

    setMessage("Product deleted successfully");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Page Header */}
          <PageHeader
            title="All Products"
            subtitle=" Manage your registered products"
          />

          <Link
            href="/add-product"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition"
          >
            + Create Product
          </Link>
        </div>

        {/* Message */}
        {message && (
          <div className="text-center text-red-500 font-medium">{message}</div>
        )}
      </div>
    </main>
  );
}
