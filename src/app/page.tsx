"use client";

import { ProductCard } from "@/components";
import { EmptyBanner } from "@/global/components";
import { SELECTOR_VALUES } from "@/global/constants";
import { useFetchLocalStorage } from "@/global/hooks";
import { Input } from "@/ui/components";
import Link from "next/link";
import { useState } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";

export default function MarketPlaceHome() {
  const [search, setSearch] = useState<string>("");
  const [select, setSelect] = useState("");
  const products = useFetchLocalStorage("local-products");

  // Search filter
  const searchFilteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  // Filter product by category
  const selectFilteredProducts = searchFilteredProducts.filter((product) => {
    if (!select || select === "all") return true;
    return product.category === select;
  });

  return (
    <main className="flex w-full min-h-screen justify-center py-10 px-4 bg-gray-950 ">
      <div className="w-full h-full max-w-7xl">
        {/* Main Title */}
        <div className="flex max-[670px]:flex-col justify-between items-center gap-6 mb-12">
          <h1 className="text-3xl font-bold text-center">
            Product Management System
          </h1>

          <Link
            href="/create"
            className="bg-blue-700 max-w-[12rem] hover:bg-blue-600 px-6 py-3 rounded-md font-semibold"
          >
            + Create Product
          </Link>
        </div>

        {/* Filter products by name */}
        <section className="max-md:flex-col md:gap-8 my-10 flex justify-between items-center">
          <div
            className="flex w-full max-sm:flex-col gap-4 rounded-2xl p-6 justify-between border 
            border-gray-700 bg-gray-900"
          >
            <div className="flex w-full max-sm:justify-center">
              <Input
                className="max-w-md"
                size={"default"}
                rightIcon={
                  <RiArrowRightDoubleLine className="fill-blue-700 text-4xl" />
                }
                placeholder="Search by name ..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            {/* Selector to filter the products by value */}
            <div className="flex gap-4 justify-center">
              <select
                className="bg-gray-800 h-10 px-4 flex justify-center items-center hover:bg-gray-800 rounded-md text-white"
                value={select}
                onChange={(event) => setSelect(event.target.value)}
              >
                <option value={""}>All</option>

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

              {/* Clear Filters*/}
              <button
                className="px-4 py-2 rounded-lg border border-gray-700
               hover:bg-gray-800 transition"
                onClick={() => {
                  setSearch("");
                  setSelect("");
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </section>

        {/* Filtered Products */}
        <div className="w-full h-full gap-6 grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
          {selectFilteredProducts.length > 0 ? (
            selectFilteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                src={product.src}
                category={product.category}
                name={product.name}
                createdAt={product.createdAt}
                updatedAt={product.updatedAt}
                description={product.description}
              />
            ))
          ) : (
            <div className="flex w-full col-span-full justify-center my-10">
              <EmptyBanner
                className=" col-span-full"
                title="No Products Found"
                subtitle="Please check your filters or Create a new one"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
