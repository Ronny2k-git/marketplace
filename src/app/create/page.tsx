"use client";

import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

import { useRouter } from "next/navigation";
import { useState } from "react";

//Fazer a verificação dos itens do produto.
// UUID ele gera um id aleatório e único.

const ProductSchema = z.object({
  src: z.string().min(5, { message: "Insira uma foto válida" }),
  id: z.string().uuid(),
  name: z.string().min(5),
  old: z.string().min(1),
  price: z.string().min(1),
  discount: z.string().min(1),
  offer: z.string().min(1),
  description: z.string().min(1),
});

export default function AddProduct() {
  const [imageURL, setImageURL] = useState("");
  const [productName, setProductName] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const createProduct = () => {
    if (
      !imageURL ||
      !productName ||
      !oldPrice ||
      !price ||
      !discount ||
      !paymentMethod ||
      !description
    ) {
      setErrorMessage("Todos os campos devem ser preenchidos.");
      return;
    } else {
      setErrorMessage("");
    }

    const newProducts = {
      src: imageURL,
      id: uuidv4(), // Nesse caso também poderia usar o "Date.now"
      name: productName, // O "UUID" cria um id aleatório.
      old: oldPrice,
      price,
      discount,
      offer: paymentMethod,
      description,
    };

    const parse = ProductSchema.safeParse(newProducts);
    if (parse.success == false) {
      console.log("ERROR 404", parse.error);
      return;
    }

    const localProducts = JSON.parse(
      localStorage.getItem("local-products") || "[]"
    );

    localProducts.push(parse.data); //newProducts
    localStorage.setItem("local-products", JSON.stringify(localProducts)); //The local storage only stores strings.
    router.push("/marketplace");
  };

  return (
    <main className="min-h-screen min-w-screen bg-gray-950">
      <title>Create Product</title>
      <div className="h-full w-full">
        <div className="flex h-full w-full justify-center items-center">
          <div className="min-h-screen w-full mx-4 gap-4 max-w-xl flex flex-col justify-center items-center rounded-3xl px-6 my-10 bg-gray-900">
            <p className="text-3xl text-gray-500 mb-6 font-bold">
              ADD YOUR PRODUCT
            </p>
            <p className="text-gray-400 text-start">Add Image(URL):</p>
            <input
              className="h-9 w-full text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={imageURL}
              onChange={(event) => setImageURL(event.target.value)}
            />
            <p className="text-gray-400 text-start">Product Name:</p>
            <input
              className="h-9 px-2 w-full text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
            <p className="text-gray-400 text-start">Old Price:</p>
            <input
              className="h-9 w-full text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={oldPrice}
              onChange={(event) => setOldPrice(event.target.value)}
            />
            <p className="text-gray-400 text-start">Price:</p>
            <input
              className="h-9 w-full text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <p className="text-gray-400 text-start">Payment Method:</p>
            <input
              className="h-9 w-full text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={paymentMethod}
              onChange={(event) => setPaymentMethod(event.target.value)}
            />
            <p className="text-gray-400 text-start">Discount:</p>
            <input
              className="h-9 w-full text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
            />
            <p className="text-gray-400 text-start">Product Description:</p>
            <input
              className="h-16 w-full text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            {errorMessage && (
              <div className="text-red-500 absolute bottom-1">
                {errorMessage}
              </div>
            )}
            <button
              className="h-9 w-full bg-blue-700 mt-4 rounded-lg hover:bg-blue-600"
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
