"use client";

import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { Product } from "@/utils/utils";
import { useEffect, useState } from "react";

function getProducts(): Product[] {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

export function ProductCard(product: Product) {
  const [cart, setCart] = useState(() => getProducts());

  //   const savedCart = localStorage.getItem("cart");
  //   return savedCart ? JSON.parse(savedCart) : [];

  const [message, setMessage] = useState<string>("");
  const addCart = (product: Product) => {
    const savedCart = getProducts();
    const updatedCart = [...savedCart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  console.log(cart);

  const handleClick = (product: Product) => {
    addCart(product);
    setMessage("Product added to cart");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div>
      <div className="w-74 h-[533px] bg-gray-900 rounded-md">
        <div className="flex justify-center items-center">
          <Link href={`/products/${product.id}`}>
            <img
              className="Images h-48 w-48 mt-14 mb-8 hover:opacity-80"
              src={product.src}
            ></img>
          </Link>
        </div>
        <Link href={`/products/${product.id}`}>
          <p className="Name mb-3 ml-2 hover:underline">{product.name}</p>
        </Link>
        <del className="ml-2">{product.old}</del>
        <div className="Preco ml-2 text-2xl text-blue-600 font-bold flex items-center ">
          {product.price}
          <div className="Discount text-white ml-2 mt-1.5 h-5 w-10 bg-gray-700 font-light text-[15px] rounded-xl">
            <p className="-mt-1.5">{product.discount}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={() => handleClick(product)}>
            <TiShoppingCart className="size-6 fill-white ml-64 -mt-8 mr-3 hover:bg-gray-800" />
          </button>
        </div>
        <div className="mt-2 ml-2 whitespace-pre mb-12">{product.offer}</div>
        <Link href={`/products/${product.id}`}>
          <div className="Buy Button h-[9.5%] w-[95%] ml-2 hover:bg-blue-600 rounded-md bg-blue-700 flex justify-center items-center">
            <p className="text-white font-bold text-[15px]">BUY</p>
          </div>
        </Link>
        {message && (
          <div className="Mensagem text-green-500 ml-20">{message}</div>
        )}
      </div>
    </div>
  );
}
