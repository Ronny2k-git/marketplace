"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdAddCircleOutline, IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

const PROJECT_DRAWER_ROUTES = [
  { label: "Explore", path: "/", icon: <IoMdSearch className="size-5" /> },
  {
    label: "Create Product",
    path: "/create",
    icon: <IoMdAddCircleOutline className="size-5" />,
  },
  { label: "Cart", path: "/cart", icon: <LuShoppingCart className="size-5" /> },
];

export function Drawer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-full w-full">
      {!menuOpen && (
        <button
          className="mr-4 flex items-center "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu className="h-9 w-9 " />
        </button>
      )}

      {menuOpen && (
        <div className="fixed top-0 h-auto z-50 right-0 rounded-b-2xl w-full flex bg-gray-900">
          <div className=" w-full flex flex-col justify-start px-8 pt-8">
            <div className="flex justify-between">
              {/* Title */}
              <h1 className="text-3xl text-blue-600 mx-4">AlienWare</h1>

              <button
                className="h-8 w-8 bg-blue-700 hover:bg-blue-800 rounded-full"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                x
              </button>
            </div>

            <hr className="border-blue-500 my-4"></hr>

            <div className="flex flex-col gap-2 mb-10">
              {PROJECT_DRAWER_ROUTES.map((route) => (
                <Link href={route.path}>
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="bg-blue-700 hover:bg-blue-800 gap-2 w-full h-11 rounded-full flex justify-center items-center"
                  >
                    {route.icon} {route.label}
                  </button>
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className=" hover:bg-gray-700 bg-gray-800 w-full h-8 rounded-b-full flex justify-center items-center"
            >
              <div className="h-1 w-[30%] bg-blue-700"></div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
