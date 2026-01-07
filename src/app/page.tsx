"use client";

import { ProductCard } from "@/components";
import { Product } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

const SELECTOR_VALUES = [
  { value: "", label: "Filter", class: "hidden" },
  { value: "all", label: "All Products" },
  { value: "Peripherals", label: "Peripherals" },
  { value: "Acessories", label: "Acessories" },
  { value: "Portables", label: "Portables" },
  { value: "Complete-PC", label: "Complete PC" },
  { value: "Computer-parts", label: "Computer Parts" },
];

export default function MarketPlaceHome() {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("local-products") ?? "[]"));
  }, []);

  const searchFilteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  const selectFilteredProducts = searchFilteredProducts.filter((product) => {
    if (!select || select === "all") return true;
    return product.category === select;
  });

  return (
    <main className="flex w-full min-h-screen justify-center py-16 px-4 bg-gray-950 ">
      <div className="w-full h-full max-w-screen-xl">
        <title>Marketplace</title>

        {/* Main Card */}
        <div className="w-full h-auto p-4 flex max-sm:flex-col-reverse gap-4 items-center justify-between bg-white rounded-lg">
          <div>
            <h2 className="text-black max-sm:text-center font-medium text-xl">
              PCs & ACESSORIES
            </h2>
            <h3 className="text-black max-sm:text-center max-sm:text-3xl text-3xl md:text-4xl">
              The quality is out of this world
            </h3>
          </div>
          <Image alt="PC" src={"/home-banner.png"} width={300} height={300} />
        </div>

        {/* Input to filter the products by name */}
        <div className="relative max-md:flex-col md:gap-8 my-4 flex justify-between items-center">
          <div className="relative w-full flex items-center">
            <IoSearchSharp className="absolute text-xl ml-2" />
            <input
              className="bg-gray-900 w-full md:max-w-[38rem] h-10 rounded-md text-white placeholder-white pl-10 hover:bg-gray-800"
              placeholder="Search products ..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <RiArrowRightDoubleLine className="fill-blue-700 text-7xl" />
          </div>

          {/* Selector to filter the products by value */}
          <div className="flex max-md:self-end md:items-center">
            <select
              className="bg-gray-900 w-ful h-10 px-4 flex justify-center items-center hover:bg-gray-800 rounded-md text-white"
              value={select}
              onChange={(event) => setSelect(event.target.value)}
            >
              {SELECTOR_VALUES.map((product, index) => (
                <option
                  value={product.value}
                  key={index}
                  className={`${product.class}`}
                >
                  {product.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtered Products */}
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 h-full gap-6 ">
          {selectFilteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              src={product.src}
              name={product.name}
              old={product.old}
              price={product.price}
              offer={product.offer}
              discount={product.discount}
              description={product.description}
              category=""
            />
          ))}
        </div>

        {/* Pagination Mock */}
        {selectFilteredProducts.length >= 1 ? (
          <div className="h-full w-full flex justify-center mt-10 gap-1 items-center text-black font-bold">
            <button className="h-9 w-9 hover:bg-blue-600 flex items-center justify-center bg-blue-500 rounded-2xl text-sm">
              <RiArrowLeftDoubleLine className="fill-black text-3xl" />
            </button>
            <button className="h-9 w-9 hover:bg-blue-600 bg-blue-500 rounded-2xl text-base">
              {"1"}
            </button>
            <button className="h-9 w-9 hover:bg-blue-600 bg-blue-500 rounded-2xl text-base">
              {"2"}
            </button>
            <p className="-mt-2 text-xm text-blue-400">...</p>
            <button className="h-9 w-9 hover:bg-blue-600 bg-blue-500 rounded-2xl text-base">
              {"10"}
            </button>
            <button className="h-9 w-9 hover:bg-blue-600 flex items-center justify-center bg-blue-500 rounded-2xl text-sm">
              <RiArrowRightDoubleLine className="fill-black text-3xl" />
            </button>
          </div>
        ) : null}
      </div>
    </main>
  );
}
