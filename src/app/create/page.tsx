"use client";

import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { SELECTOR_VALUES } from "@/global/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

//Fazer a verificação dos itens do produto.
// UUID: This is used to generate a unique and random ID
const ProductSchema = z.object({
  src: z.string().min(5, { message: "Insira uma foto válida" }),
  id: z.string().uuid(),
  name: z.string().min(5),
  old: z.string().min(1),
  price: z.string().min(1),
  payment: z.string().min(1),
  productType: z.string(),
  description: z.string().min(1),
});

const initialForm = {
  imageURL: "",
  productName: "",
  oldPrice: "",
  price: "",
  paymentMethod: "",
  productType: "",
  description: "",
};

export default function AddProduct() {
  const [form, setForm] = useState(initialForm);
  const [errorMessage, setErroMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  // Create a new Product
  const createProduct = () => {
    const newProducts = {
      src: form.imageURL,
      id: uuidv4(), // Used to create a unique id for each product
      name: form.productName,
      old: form.oldPrice,
      price: form.price,
      payment: form.paymentMethod,
      productType: form.productType,
      description: form.description,
    };

    // 1. Validation
    const parse = ProductSchema.safeParse(newProducts);

    if (!parse.success) {
      setErroMessage("All fields are required");
      return;
    }

    // 2. Fetch products stored in local storage
    const localProducts = JSON.parse(
      localStorage.getItem("local-products") || "[]",
    );

    // 3. Save the new product in local storage
    localProducts.push(parse.data); // New Products
    localStorage.setItem("local-products", JSON.stringify(localProducts)); //The local storage only stores strings.

    // 4. Final message
    setSuccessMessage("Product created successfully. Redirecting...");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  // 5. Clear the Formulary
  const clearForm = () => {
    setForm(initialForm);
    setErroMessage("");
  };

  return (
    <main className="flex flex-col h-full py-10 w-full px-4 justify-center items-center bg-gray-950">
      <h1 className="text-3xl font-bold text-center">Add Your Product</h1>

      {/* Creation Card */}
      <div
        className="h-full w-full my-10 border border-gray-700 gap-4 p-8 max-w-2xl grid sm:grid-cols-2 
      rounded-3xl bg-gray-900"
      >
        {/* Title */}
        <h2 className="text-3xl max-sm:text-[26px] col-span-full text-center text-gray-500 mb-6 font-bold">
          ADD YOUR PRODUCT
        </h2>

        {/* Image URL */}
        <div>
          <p className="text-gray-400 text-start">Add Image(URL):</p>
          <input
            className="h-10 px-2 outline-none w-full text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
            value={form.imageURL}
            onChange={(event) =>
              setForm({ ...form, imageURL: event.target.value })
            }
          />
        </div>

        {/* Product Name */}
        <div>
          <p className="text-gray-400 text-start">Product Name:</p>
          <input
            className="h-10 px-2 outline-none w-full text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
            value={form.productName}
            onChange={(event) =>
              setForm({ ...form, productName: event.target.value })
            }
          />
        </div>

        {/* Old Price */}
        <div>
          <p className="text-gray-400 text-start">Old Price:</p>
          <input
            className="h-10 px-2 outline-none w-full text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
            value={form.oldPrice}
            onChange={(event) =>
              setForm({ ...form, oldPrice: event.target.value })
            }
          />
        </div>

        {/* Price */}
        <div>
          <p className="text-gray-400 text-start">Price:</p>
          <input
            className="h-10 px-2 outline-none w-full text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
            value={form.price}
            onChange={(event) =>
              setForm({ ...form, price: event.target.value })
            }
          />
        </div>

        {/* Payment Method */}
        <div>
          <p className="text-gray-400 text-start">Payment Method:</p>
          <input
            className="h-10 px-2 outline-none w-full text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
            value={form.paymentMethod}
            onChange={(event) =>
              setForm({ ...form, paymentMethod: event.target.value })
            }
          />
        </div>

        {/* Product Type */}
        <div>
          <p className="text-gray-400 text-start">Product Type:</p>
          <select
            className="h-10 px-2 outline-none w-full text-lg rounded-lg hover:bg-gray-600 bg-gray-700"
            value={form.productType}
            onChange={(event) =>
              setForm({ ...form, productType: event.target.value })
            }
          >
            {SELECTOR_VALUES.map((product, index) => (
              <option
                value={product.value}
                key={index}
                className={`${product.class}`}
              >
                {product.label}
              </option>
            ))}
          </select>
        </div>

        {/* Product Description  */}
        <div className="col-span-full">
          <p className="text-gray-400 text-start">Product Description:</p>
          <textarea
            className="min-h-24 max-h-24 p-4 w-full outline-none text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
            value={form.description}
            onChange={(event) =>
              setForm({ ...form, description: event.target.value })
            }
          />
        </div>

        <div className="col-span-full flex flex-col gap-4">
          {errorMessage && (
            <div className="text-green-500 bottom-1 text-center">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 bottom-1 text-center">
              {successMessage}
            </div>
          )}
          <div className="flex max-sm:flex-col gap-2">
            <button
              className="h-10 px-2 outline-none w-full bg-gray-700 rounded-lg hover:bg-gray-600"
              onClick={clearForm}
            >
              CLEAR FORM
            </button>

            <button
              className="h-10 px-2 outline-none w-full bg-blue-700 rounded-lg hover:bg-blue-600"
              onClick={createProduct}
            >
              CREATE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
