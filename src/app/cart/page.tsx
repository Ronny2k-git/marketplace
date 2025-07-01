"use client";

import { Product } from "@/utils/utils";
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
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
    <main className="viewPort min-h-screen w-screen bg-gray-950">
      <title>Cart</title>
      <div className="flex items-center justify-center">
        <TiShoppingCart className="mt-16 mr-2 text-[42px]" />
        <div className="mt-16 text-[40px]">Your Products</div>
      </div>
      <div className="flex justify-end items-center">
        <div className="h-full w-full flex flex-col justify-center items-center bg-gray-950">
          {cart.length === 0 ? (
            <div className="text-white mt-10 text-x1">Your cart ir empty</div>
          ) : (
            cart.map((product: Product) => (
              <div
                className="Square flex h-auto w-full max-w-5xl mb-2 mt-6 rounded-lg bg-gray-900 p-4"
                key={product.id}
              >
                <img
                  src={product.src}
                  alt={product.name}
                  className="h-40 w-40 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-white text-[18px]">{product.name}</h3>
                  <p className="text-blue-500 text-[18px] flex">
                    {product.price}
                  </p>
                  <p className="text-blue-500 text-[18px]">
                    {product.discount}
                  </p>
                </div>
                <button
                  className="flex h-full w-full justify-end"
                  onClick={() => handleClick(product)}
                >
                  <MdOutlineRemoveShoppingCart className="hover:bg-gray-700" />
                </button>
              </div>
            ))
          )}
          {message && <div className="text-red-500 mt-4">{message}</div>}
        </div>
      </div>
    </main>
  );
}
