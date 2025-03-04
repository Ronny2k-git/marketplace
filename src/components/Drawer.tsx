"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

export function Drawer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {!menuOpen && (
        <button
          className="mr-4 flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu className="size-6 md:hidden" />
        </button>
      )}

      {menuOpen && (
        <div className="fixed top-0 z-40 right-0 rounded-b-3xl w-full flex h-[40%] bg-gray-900">
          <div className="relative w-full flex flex-col justify-start mt-4 mx-4">
            <h1 className="text-3xl text-blue-600 mb-4 mx-4">AlienWare</h1>
            <button
              className="h-6 w-6 absolute top-1 right-1 bg-blue-700 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              x
            </button>
            <hr className="border-blue-500 mb-4"></hr>
            <Link href="/marketplace">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-blue-700 gap-2 w-full h-11 rounded-full flex justify-center items-center"
              >
                <IoMdSearch className="size-5" /> Explore
              </button>
            </Link>

            <Link href="/products/create">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-blue-700 gap-2 IoMdSearch w-full my-2 h-11 rounded-full flex justify-center items-center"
              >
                <IoMdAddCircleOutline className="size-5" /> Add Product
              </button>
            </Link>

            <Link href="/cart">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-blue-700 gap-2 IoMdSearch w-full h-11 rounded-full flex justify-center items-center"
              >
                <LuShoppingCart className="size-5" /> Cart
              </button>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-transparent hover:bg-gray-800 mt-[158px] w-full h-6 rounded-b-full flex justify-center items-center"
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}
