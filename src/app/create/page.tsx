"use client";

import { PageHeader, ProductForm } from "@/global/components";
import { useFetchLocalStorage } from "@/global/hooks";
import { Card } from "@/ui/components";
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
  category: z.enum([
    "electronics",
    "clothing",
    "home",
    "books",
    "sports",
    "beauty",
    "beauty",
    "toys",
  ]),
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
  const products = useFetchLocalStorage("local-products");

  const router = useRouter();

  // Add a new product to local storage
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
    } else {
      setErrorMessage("");
    }

    const localProducts = products;

    localProducts.push(parse.data);
    localStorage.setItem("local-products", JSON.stringify(localProducts));

    setSuccessMessage("Product created successfully!. Redirecting...");
    setTimeout(() => router.push("/"), 3000);
  };

  return (
    <main className="min-h-screen flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl flex flex-col gap-12">
        {/* Page Header */}
        <PageHeader
          title="Create New Product"
          subtitle="Fill the information below to register a new product."
        />

        {/* Form Card */}
        <section>
          <Card className="gap-8" variant={"basic2"} size={"md"}>
            {/* Creation Form */}
            <ProductForm form={form} setForm={setForm} />

            {/* Messages */}
            {errorMessage && (
              <div className="text-red-500 p-2 border rounded-md border-red-500/35 text-center">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="text-green-500 p-2 border rounded-md border-green-500 text-center">
                {successMessage}
              </div>
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
          </Card>
        </section>
      </div>
    </main>
  );
}
