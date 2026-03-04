"use client";

import { Card } from "@/ui/components";
import Link from "next/link";
import { useState } from "react";
import { FiLogOut, FiMenu, FiPackage } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { PROJECT_ROUTES } from "../constants";
import { useFetchLocalStorage } from "../hooks";

export function Drawer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const products = useFetchLocalStorage("local-products");

  return (
    <>
      {/* Menu Button */}
      {!menuOpen && (
        <button onClick={() => setMenuOpen(true)}>
          <FiMenu className="h-8 w-8 text-white transition-transform duration-300 hover:scale-110" />
        </button>
      )}

      {/* Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 transition-opacity duration-300">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Content */}

          <Card
            className="absolute right-0 top-0 h-screen max-w-[20rem] p-5
       
          "
            variant="basic"
            size="default"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <FiPackage className="h-9 w-9 text-blue-600" />
                  <span className="text-xl text-white font-semibold">
                    Product Manager
                  </span>
                </div>

                <button onClick={() => setMenuOpen(false)}>
                  <IoMdClose className="h-7 w-7 text-white" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 p-3 bg-blue-800/40 rounded-lg mb-6">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  R
                </div>

                <div>
                  <p className="text-white font-medium">Ronny</p>
                  <p className="text-xs text-gray-300">Admin</p>
                </div>
              </div>

              {/* Routes */}
              <div className="flex flex-col gap-3">
                {PROJECT_ROUTES.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    onClick={() => setMenuOpen(false)}
                    className="bg-blue-700/80 hover:bg-blue-800/85 h-11 rounded-lg flex justify-center items-center gap-2 text-white font-medium transition-colors"
                  >
                    {route.icon}
                    {route.label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <hr className="border-blue-500/40 my-6" />

              {/* Stats */}
              <div className="bg-blue-800/40 p-4 mb-6 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-300">Products Created</p>
                  <p className="text-2xl font-bold text-white">
                    {products.length ?? 0}
                  </p>
                </div>

                <FiPackage className="text-blue-400 h-6 w-6" />
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Footer */}
              <div className="flex flex-col gap-4">
                <button className="flex items-center justify-center gap-2 text-red-400 hover:text-red-500 transition-colors">
                  <FiLogOut />
                  Logout
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Version 1.0.0
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
