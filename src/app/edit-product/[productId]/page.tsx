"use client";

import { PageHeader, ProductForm } from "@/global/components";
import { Product } from "@/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const initialForm = {
  imageURL: "",
  productName: "",
  description: "",
  category: "",
};

export default function EditProduct() {
  const [form, setForm] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();
  const { productId } = useParams();

  console.log(productId);

  // Fetch Product
  useEffect(() => {
    const localProducts = JSON.parse(
      localStorage.getItem("local-products") ?? "[]",
    );

    const foundProduct = localProducts.find(
      (product: Product) => product.id === productId,
    );

    if (!foundProduct) return;

    setForm({
      imageURL: foundProduct.src,
      productName: foundProduct.name,
      description: foundProduct.description,
      category: foundProduct.category,
    });
  }, [productId]);

  // Delete Project
  const handleDelete = () => {};

  return (
    <main className="min-h-screen bg-gray-950 flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl flex flex-col gap-12">
        {/* Page Header */}
        <PageHeader
          title="Update Your Product"
          subtitle=" Update the product informations below."
        />

        {/* Form Card */}
        <div className="flex flex-col bg-gray-900/30 gap-14 px-4 py-6 sm:p-10 rounded-2xl border border-gray-800 ">
          <section>
            <ProductForm form={form} setForm={setForm} />

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
                  setForm(form);
                  setErrorMessage("");
                }}
                className="flex-1 h-11 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                Clear
              </button>

              <button
                // onClick={createProduct}
                className="flex-1 h-11 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition"
              >
                Update Product
              </button>
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-gray-400/15 " />

          {/* Delete Section */}
          <section className="flex flex-col gap-6 border border-red-500/30 p-8 rounded-xl">
            <span className="text-2xl border-b pb-6 border-gray-400/15">
              Danger Zone
            </span>

            <div className="flex max-sm:flex-col items-center gap-4 justify-between">
              <p>
                Once you delete a product, there is no going back. Please be
                certain.
              </p>

              <button className="w-full max-w-[11rem] p-1.5 rounded-lg bg-red-700/90 hover:bg-red-700 font-semibold transition">
                Delete this product
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
