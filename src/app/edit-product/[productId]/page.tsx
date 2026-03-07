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
import { Button } from "@/ui/components/Button";
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
  const [productData, setProductData] = useState<Product>();
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

  // Fetch product data
  useEffect(() => {
    const foundProduct = products.find(
      (product: Product) => product.id === productId,
    );

    setProductData(foundProduct);

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
        <div className="flex max-[900px]:flex-col-reverse max-sm:items-center w-full gap-8">
          <Card className=" rounded-2xl gap-12" variant={"basic2"} size={"md"}>
            <section className="flex flex-col gap-8 w-full">
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
                <Button
                  className="font-semibold"
                  size={"default"}
                  onClick={() => {
                    setForm(originalForm);
                    setErrorMessage("");
                  }}
                >
                  Clear
                </Button>

                <Button
                  className={`font-semibold ${!isDirty && "cursor-not-allowed opacity-60 "}`}
                  variant={"basic2"}
                  onClick={handleUpdate}
                  disabled={!isDirty}
                >
                  Update Product
                </Button>
              </div>
            </section>

            {/* Divider */}
            <div className="h-px bg-gray-400/15 " />

            {/* Delete Section */}
            <section className="flex flex-col gap-6 border border-red-500/30 p-8 rounded-xl">
              <span className="text-2xl border-b pb-6 border-gray-400/15">
                Danger Zone
              </span>

              <div className="flex w-full max-sm:flex-col items-center gap-4 justify-between">
                <p className="max-w-sm">
                  Once you delete a product, there is no going back. Please be
                  certain.
                </p>

                <Button
                  variant={"delete"}
                  size={"sm"}
                  className="font-semibold w-[11rem]"
                  onClick={confirmDelete}
                >
                  Delete this product
                </Button>
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
              createdAt={productData?.createdAt}
              updatedAt={productData?.updatedAt}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
