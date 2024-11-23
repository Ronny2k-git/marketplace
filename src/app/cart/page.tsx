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

  // const [message, setMessage] = useState<string>("");

  const removeCart = (Id: string) => {
    const updatedCart = cart.filter((product) => product.id !== Id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // setMessage("Produto Removido do Carrinho");
  };

  return (
    <main className="viewPort min-h-screen w-screen bg-gray-950">
      <div className="flex items-center justify-center">
        <TiShoppingCart className="mt-16 mr-2 text-[42px]" />
        <div className="mt-16 text-[40px]">Your Products</div>
      </div>
      <div className="flex justify-end items-center">
        <div className="h-full w-full flex flex-col justify-center items-center bg-gray-950">
          {cart.length === 0 ? (
            <div className="text-white mt-10 text-x1">Your cart ir empty</div>
          ) : (
            cart.map((product: Product, index: number) => (
              <div
                className="Square flex h-[200px] w-[50%] mb-2 mt-6 rounded-lg bg-gray-900 p-4"
                key={product.id}
              >
                <img
                  src={product.src}
                  alt={product.name}
                  className="h-40 w-40 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-white text-[18px]">{product.name}</h3>
                  <p className="text-blue-500 text-[18px]">{product.price}</p>
                  <p className="text-blue-500 text-[18px]">
                    {product.discount}
                  </p>
                </div>
                <button
                  className="flex h-full w-full justify-end"
                  onClick={() => removeCart(product.id)}
                >
                  <MdOutlineRemoveShoppingCart />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
