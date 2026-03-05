"use client";

import {
  PageHeader,
  ProductCardPreview,
  ProductForm,
} from "@/global/components";
import {
  useLocalStorageDelete,
  useLocalStorageFetch,
  useLocalStorageUpdate,
} from "@/global/hooks";
import { Product } from "@/global/types";
import { Card } from "@/ui/components";
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
  const [originalForm, setOriginalForm] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const products = useLocalStorageFetch("local-products");

  const { productId } = useParams() as { productId: string };
  const isDirty = JSON.stringify(form) !== JSON.stringify(originalForm);
  const router = useRouter();

  // Update and delete functionalities
  const { handleUpdate } = useLocalStorageUpdate({
    form,
    key: "local-products",
    productId,
    onSuccess: () => {
      setSuccessMessage("Product updated successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  });

  const { handleDelete } = useLocalStorageDelete({
    key: "local-products",
    productId,
    onSuccess: () => router.push("/"),
  });

  const confirmDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product? There is no going back.",
    );

    if (confirmed) {
      handleDelete();
    }
  };

  // Fetch default data
  useEffect(() => {
    const foundProduct = products.find(
      (product: Product) => product.id === productId,
    );

    if (!foundProduct) return;

    const productData = {
      imageURL: foundProduct.src,
      productName: foundProduct.name,
      description: foundProduct.description,
      category: foundProduct.category,
    };

    setForm(productData);
    setOriginalForm(productData);
  }, [products, productId]);

  return (
    <main className="min-h-screen bg-gray-950 flex justify-center px-4 py-10">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        {/* Page Header */}
        <PageHeader
          title="Update Your Product"
          subtitle=" Update the product informations below."
        />

        {/* Form Card */}
        <div className="flex max-[900px]:flex-col w-full gap-8">
          <Card className=" rounded-2xl gap-12" variant={"basic2"} size={"md"}>
            <section className="flex flex-col gap-8">
              <div className="text-sm text-gray-400">
                Product ID: <span className="text-gray-300">{productId}</span>
              </div>

              {/* Form */}
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
                    setForm(originalForm);
                    setErrorMessage("");
                  }}
                  className="flex-1 h-11 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                >
                  Clear
                </button>

                <button
                  className={`flex-1 h-11 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold 
                    transition ${!isDirty && "cursor-not-allowed opacity-60 "}`}
                  onClick={handleUpdate}
                  disabled={!isDirty}
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

                <button
                  className="w-full max-w-[11rem] p-1.5 rounded-lg bg-red-700/90 hover:bg-red-700 
                font-semibold transition"
                  onClick={confirmDelete}
                >
                  Delete this product
                </button>
              </div>
            </section>
          </Card>

          {/*Card Preview */}
          <section className="flex">
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
