"use client";

import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { Product } from "@/utils/utils";
import { useState } from "react";

export function ProductCard(product: Product) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const AddCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // setTimeout(() => {
  //   setMessage("");
  // }, 3000);

  return (
    <div>
      <div className="w-74 h-[533px] bg-gray-900 rounded-md">
        <div className="flex justify-center items-center">
          <Link href={`/products/${product.id}`}>
            <img
              className="Images h-48 w-48 mt-14 mb-8"
              src={product.src}
            ></img>
          </Link>
        </div>
        <Link href={`/products/${product.id}`}>
          <p className="Name mb-3 ml-2">{product.name}</p>
        </Link>
        <del className="ml-2">{product.old}</del>
        <div className="Preco ml-2 text-2xl text-blue-600 font-bold flex items-center">
          {product.price}
          <div className="Discount text-white ml-2 mt-1.5 h-5 w-10 bg-black font-light text-[15px] rounded-xl">
            <p className="-mt-1.5">{product.discount}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={AddCart}>
            <TiShoppingCart className="size-6 fill-white ml-64 -mt-8 mr-3" />
          </button>
        </div>
        <div className="mt-2 ml-2 whitespace-pre mb-12">{product.offer}</div>
        <Link href={`/products/${product.id}`}>
          <div className="Buy Button h-[9.5%] w-[95%] ml-2 hover:bg-blue-800 rounded-md bg-blue-700 flex justify-center items-center">
            <p className="text-white font-bold text-[15px]">BUY</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
