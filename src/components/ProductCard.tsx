"use client";

import { Product } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

function getProducts(): Product[] {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

export function ProductCard(product: Product) {
  const [, setCart] = useState(() => getProducts());
  const [message, setMessage] = useState<string>("");

  const addCart = (product: Product) => {
    const savedCart = getProducts();
    const updatedCart = [...savedCart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClick = (product: Product) => {
    addCart(product);
    setMessage("Product added into cart");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <article className="w-full h-auto p-2 flex flex-col items-cente bg-gray-900 rounded-lg">
      {/* Image */}
      <div className="flex items-center justify-center p-8">
        <Link href={`/product/${product.id}`}>
          <Image
            alt="product-image"
            className=" h-40 w-40 hover:opacity-70 object-cover"
            src={product.src}
            width={192}
            height={192}
          />
        </Link>
      </div>

      <div className="flex flex-col justify-end h-full gap-3">
        {/* Product name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="hover:underline">{product.name}</h3>
        </Link>

        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <del>{product.old}</del>

            {/* Current price */}
            <div className=" text-2xl text-blue-600 font-bold flex items-center gap-2">
              {product.price}
              <span className="flex items-center justify-center text-white h-5 w-10 bg-gray-700 font-light text-[15px] rounded-xl">
                {product.discount}
              </span>
            </div>
          </div>

          {/* Add product to the cart */}
          <button onClick={() => handleClick(product)}>
            <TiShoppingCart className="size-6 fill-white hover:bg-gray-800" />
          </button>
        </div>

        {/* Product discount */}
        <p className="whitespace-pre">{product.offer}</p>
        <Link
          className="flex justify-center items-center h-12 w-full hover:bg-blue-600 rounded-md bg-blue-700"
          href={`/product/${product.id}`}
        >
          <span className="text-white font-bold text-[15px]">BUY</span>
        </Link>
      </div>

      {message && (
        <p role="status" className="mt-2 text-green-500 text-center">
          {message}
        </p>
      )}
    </article>
  );
}
