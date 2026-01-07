"use client";

import { EmptyBanner } from "@/global/components";
import { Product } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const [message, setMessage] = useState<string>("");

  const removeCart = (Id: string) => {
    const updatedCart = cart.filter((product) => product.id !== Id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClick = (product: Product) => {
    removeCart(product.id);
    setMessage("Product removed from cart");
    const timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      setMessage("");
    }, 3000);
  };

  return (
    <main className=" min-h-screen w-screen sm:p-8 p-6 bg-gray-950">
      <title>Cart</title>

      <div className="flex items-center justify-center gap-2">
        <TiShoppingCart className="text-[3rem]" />
        <h1 className="text-4xl">Your Products</h1>
      </div>

      <div className="flex w-full justify-end items-center">
        <div className="h-full w-full flex flex-col items-center bg-gray-950">
          {cart.length === 0 ? (
            <EmptyBanner
              title="Your cart is empty"
              subtitle="Select a product on the home page"
              className="my-10"
            />
          ) : (
            cart.map((product: Product) => (
              <div
                className=" relative flex max-sm:flex-col gap-4 h-auto w-full max-w-5xl mt-6 rounded-lg bg-gray-900 p-4"
                key={product.id}
              >
                <div className="flex gap-4 sm:gap-10">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.src}
                      alt={product.name}
                      className="h-40 w-40 object-cover rounded-md hover:scale-105"
                      width={160}
                      height={160}
                    />
                  </Link>

                  <div className="flex flex-col gap-2">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-white text-lg sm:text-xl hover:underline">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-blue-500 text-lg sm:text-xl">
                      {product.price}
                    </p>
                    <p className="text-blue-500 text-lg sm:text-xl">
                      {product.discount}
                    </p>
                  </div>
                  <button
                    className="absolute right-0 top-0 py-2 px-2"
                    onClick={() => handleClick(product)}
                  >
                    <MdOutlineRemoveShoppingCart className="hover:bg-gray-700" />
                  </button>
                </div>
              </div>
            ))
          )}
          {message && <div className="text-red-500 mt-4">{message}</div>}
        </div>
      </div>
    </main>
  );
}
