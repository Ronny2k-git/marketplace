"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiPackage } from "react-icons/fi";
import { PROJECT_ROUTES } from "../utils";

export function Drawer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      {!menuOpen && (
        <button onClick={() => setMenuOpen(true)}>
          <FiMenu className="h-8 w-8 text-white" />
        </button>
      )}

      {/* Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="absolute top-0 left-0 w-full h-auto pb-8 bg-gray-900 rounded-b-2xl shadow-xl">
            <div className="flex flex-col gap-8 pt-8 px-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FiPackage className="h-10 w-10 text-blue-600 fill-white/85" />

                  <span className="text-2xl text-white">Product Manager</span>
                </div>

                <button
                  className="h-8 w-8 bg-blue-700 hover:bg-blue-800 rounded-full text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  x
                </button>
              </div>

              <hr className="border-blue-500" />

              {/* Routes */}
              <div className="flex flex-col gap-3">
                {PROJECT_ROUTES.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    onClick={() => setMenuOpen(false)}
                    className="bg-blue-700 hover:bg-blue-800 gap-2 w-full h-11 rounded-full flex justify-center items-center text-white font-medium"
                  >
                    {route.icon}
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
