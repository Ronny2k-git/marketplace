"use client";

import {
  PageHeader,
  ProductCardPreview,
  ProductForm,
} from "@/global/components";
import { useLocalStorageFetch } from "@/global/hooks";
import { Card } from "@/ui/components";
import { Button } from "@/ui/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { categories } from "./const";

const ProductSchema = z.object({
  src: z.string().min(5),
  id: z.string().uuid(),
  name: z.string().min(5),
  createdAt: z.string(),
  updatedAt: z.string(),
  description: z.string().min(1),
  category: z.enum(categories),
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
  const products = useLocalStorageFetch("local-products");

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
      <div className="w-full max-w-6xl flex flex-col gap-12">
        {/* Page Header */}
        <PageHeader
          title="Create New Product"
          subtitle="Fill the information below to register a new product."
        />

        {/* Form and Preview Sections*/}
        <div className="flex max-[900px]:flex-col max-sm:items-center w-full gap-8">
          {/* Form Card */}
          <section className="flex w-full">
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
                <Button
                  className="font-semibold"
                  variant={"basic"}
                  onClick={() => {
                    setForm(initialForm);
                    setErrorMessage("");
                  }}
                >
                  Clear
                </Button>
                <Button
                  className="font-semibold"
                  variant={"basic2"}
                  onClick={createProduct}
                >
                  Create Product
                </Button>
              </div>
            </Card>
          </section>

          {/*Card Preview */}
          <section className="flex max-sm:w-full max-sm:justify-center">
            <ProductCardPreview
              src={form.imageURL}
              name={form.productName}
              description={form.description}
              category={form.category}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
