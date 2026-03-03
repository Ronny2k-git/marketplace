"use client";

import { SELECTOR_VALUES } from "@/global/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const ProductSchema = z.object({
  src: z.string().min(5),
  id: z.string().uuid(),
  name: z.string().min(5),
  createdAt: z.string(),
  updatedAt: z.string(),
  description: z.string().min(1),
  category: z.string().min(1),
});

const initialForm = {
  imageURL: "",
  productName: "",
  description: "",
  category: "",
};

export default function AddProduct() {
  const [form, setForm] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const createProduct = () => {
    const now = new Date().toISOString();

    const newProduct = {
      src: form.imageURL,
      id: uuidv4(),
      name: form.productName,
      createdAt: now,
      updatedAt: now,
      description: form.description,
      category: form.category,
    };

    const parse = ProductSchema.safeParse(newProduct);

    if (!parse.success) {
      setErrorMessage("Please fill all fields correctly.");
      return;
    }

    const localProducts = JSON.parse(
      localStorage.getItem("local-products") || "[]",
    );

    localProducts.push(parse.data);
    localStorage.setItem("local-products", JSON.stringify(localProducts));

    setSuccessMessage("Product created successfully!. Redirecting...");
    setTimeout(() => router.push("/"), 3000);
  };

  return (
    <main className="min-h-screen bg-gray-950 flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl flex flex-col gap-12">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="text-sm text-blue-500 hover:underline self-start"
        >
          ← Back to products
        </button>

        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Create New Product</h1>
          <p className="text-gray-500 mt-2">
            Fill the information below to register a new product.
          </p>
        </div>

        {/* Form Card */}
        <section className="bg-gray-900/30 p-10 rounded-2xl border border-gray-800 flex flex-col gap-8">
          {/* Image URL */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Image URL</label>
            <input
              className="h-11 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-600 outline-none transition"
              value={form.imageURL}
              onChange={(e) => setForm({ ...form, imageURL: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Product Name</label>
            <input
              className="h-11 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-600 outline-none transition"
              value={form.productName}
              onChange={(e) =>
                setForm({ ...form, productName: e.target.value })
              }
              placeholder="Enter product name"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Category</label>
            <select
              className="h-11 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-600 outline-none transition"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Select a category</option>
              {SELECTOR_VALUES.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Product Description</label>
            <textarea
              className="min-h-[120px] p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-600 outline-none transition resize-none"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Describe the product..."
            />
          </div>

          {/* Messages */}
          {errorMessage && (
            <div className="text-red-500 text-center">{errorMessage}</div>
          )}

          {successMessage && (
            <div className="text-green-500 text-center">{successMessage}</div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => {
                setForm(initialForm);
                setErrorMessage("");
              }}
              className="flex-1 h-11 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            >
              Clear
            </button>

            <button
              onClick={createProduct}
              className="flex-1 h-11 rounded-lg bg-blue-700 hover:bg-blue-600 font-semibold transition"
            >
              Create Product
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
