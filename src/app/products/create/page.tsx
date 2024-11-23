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
  const [imageURL, setImageURL] = useState(["", ""]);
  const [productName, setProductName] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  // Método "Manual" de verificação dos "INPUTS"

  // const handleCreateProduct = () => {
  //   if (!imageURL || !productName || !oldPrice || !price || !paymentMethod || !discount || !description) {
  //     alert("Please fill all the fields!");
  //     return;
  //   }

  const createProduct = () => {
    const newProducts = {
      src: imageURL,
      id: uuidv4(), // Nesse caso também poderia usar o "Date.now"
      name: productName, // O "UUID" cria um id aleatório.
      old: oldPrice,
      price: price,
      discount: discount,
      offer: paymentMethod,
      description: description,
    };

    const parse = ProductSchema.safeParse(newProducts);
    if (parse.success == false) {
      console.log("ERROR 404", parse.error);
      return;
    }

    const localProducts = JSON.parse(
      localStorage.getItem("products-test") || "[]"
    );
    localProducts.push(parse.data); //newProducts
    localStorage.setItem("products-test", JSON.stringify(localProducts)); //O local storage só armazena "strings".
    router.push("/marketplace");
  };

  function updateImage(newValue: string, index: number) {
    const newArray = Array.from(imageURL);
    newArray[index] = newValue;
    setImageURL(newArray);
  }

  return (
    <main className="h-screen w-screen bg-gray-950">
      <div className="h-full w-full">
        <div className="flex h-full w-full justify-center items-center">
          <div className="h-[900] w-[620px] flex flex-col justify-start items-center rounded-3xl bg-gray-900">
            <p className=" text-3xl  text-gray-500 mb-16 mt-2 font-bold">
              ADD YOUR PRODUCT
            </p>
            <p className="text-gray-400 text-start">Add Image(URL):</p>
            {imageURL.map((value, index) => (
              <input
                className="h-10 w-[585px] text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
                value={value}
                onChange={(event) => updateImage(event.target.value, index)}
              />
            ))}
            <p className="text-gray-400 text-start mt-8">Product Name:</p>
            <input
              className="h-10 w-[585px] text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
            <p className="text-gray-400 text-start mt-8">Old Price:</p>
            <input
              className="h-10 w-[585px] text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={oldPrice}
              onChange={(event) => setOldPrice(event.target.value)}
            />
            <p className="text-gray-400 text-start mt-8">Price:</p>
            <input
              className="h-10 w-[585px] text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <p className="text-gray-400 text-start mt-8">Payment Method:</p>
            <input
              className="h-10 w-[585px] text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={paymentMethod}
              onChange={(event) => setPaymentMethod(event.target.value)}
            />
            <p className="text-gray-400 text-start mt-8">Discount:</p>
            <input
              className="h-10 w-[585px] text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
            />
            <p className="text-gray-400 text-start mt-8">
              Product Description:
            </p>
            <input
              className="h-16 w-[585px] text-black text-xl rounded-lg hover:bg-gray-600 bg-gray-700"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <button
              className="h-10 w-[585px] bg-blue-700 mt-14 rounded-lg hover:bg-blue-600"
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
