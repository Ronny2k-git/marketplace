"use client";

import { EmptyBanner } from "@/global/components";
import { Product } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);
  const [message, setMessage] = useState<string>("");

  // Fetch data
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

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
    <main className="min-h-screen w-screen flex flex-col sm:px-8 px-6 py-16 bg-gray-950">
      <title>Cart</title>

      {/* Content */}
      <div className="flex flex-col gap-8 sm:gap-14">
        <div className="flex items-center justify-center gap-2">
          <TiShoppingCart className="text-[3rem]" />
          <h1 className="text-3xl sm:text-4xl">Your Products</h1>
        </div>

        <div className="flex w-full justify-end items-center">
          <div className="h-full w-full flex flex-col gap-2 items-center bg-gray-950">
            {cart.length === 0 ? (
              <EmptyBanner
                title="Your cart is empty"
                subtitle="Select a product on the home page"
                className="my-10"
              />
            ) : (
              cart.map((product: Product) => (
                <div
                  className=" relative border border-gray-700 flex max-sm:flex-col gap-4 h-auto w-full max-w-5xl rounded-lg bg-gray-900 p-4"
                  key={product.id}
                >
                  <div className="flex gap-4 sm:gap-10">
                    <Link href={`/product/${product.id}`}>
                      <img
                        src={product.src}
                        alt={product.name}
                        className="min-h-20 min-w-20 max-w-20 max-h-20 sm:h-28 sm:w-28 object-cover rounded-md hover:scale-105"
                      />
                    </Link>

                    <div className="flex flex-col gap-1 min-w-0 mr-4">
                      <Link href={`/product/${product.id}`}>
                        <h3 className="text-white text-base sm:text-xl truncate max-w-full hover:underline">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="flex flex-col">
                        <span> {`$ ${product.old}`}</span>
                        <span className="text-blue-500 text-lg sm:text-xl">
                          {`$ ${product.price}`}
                        </span>
                      </div>

                      {/* <select className="w-20 h-5 rounded-md bg-gray-700"></select> */}
                    </div>

                    <button
                      className="absolute right-0 top-0 py-2 px-2"
                      onClick={() => handleClick(product)}
                    >
                      <FaRegTrashCan className="hover:bg-gray-700" />
                    </button>
                  </div>
                </div>
              ))
            )}
            {message && <div className="text-red-500 mt-4">{message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
}
