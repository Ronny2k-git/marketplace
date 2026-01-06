"use client";

import { ProductCard } from "@/components";
import { Product } from "@/utils";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

export default function MarketPlaceHome() {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("local-products") ?? "[]"));
  }, []);

  const searchFiltered = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  const finalFiltered = searchFiltered.filter((product) => {
    if (!select || select === "all") return true;
    return product.category === select;
  });

  const productsList = finalFiltered.map((product) => {
    return (
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
    );
  });

  return (
    <main className="view-port w-fulL py-16 bg-gray-950 h-[calc(screen-48px)]">
      <div className="w-full h-full max-w-screen-xl mx-auto">
        <title>Marketplace</title>
        <div className=" flex justify-center max-w-screen-xl mx-auto items-center relative">
          {/* Banner */}
          <img
            className="w-full h-[250px] px-5 z-10"
            src="blackfriday3.avif"
          ></img>

          <div className="flex z-20 h-full w-full absolute pl-8 max-sm:mr-5 items-center">
            <p className=" text-black font-medium text-xl max-md:text-lg">
              PCs & ACESSORIES
            </p>
            <p className="absolute text-black mt-20 max-sm:text-2xl md:text-4xl max-md:text-3xl">
              The quality is out of this world
            </p>
          </div>
        </div>
        <div className="Input relative max-w-screen-xl max-md:flex-col px-5 md:gap-8 my-4 flex justify-between items-center">
          <div className="relative w-full flex items-center">
            <IoSearchSharp className="absolute text-xl ml-1" />
            <input
              className="bg-gray-900 w-full md:max-w-[38rem] h-9 rounded-md text-white placeholder-white pl-8 max-w-screen hover:bg-gray-800"
              placeholder="Search Itens..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <RiArrowRightDoubleLine className="fill-blue-700 text-7xl" />
          </div>
          <div className="flex max-md:self-end md:items-center">
            <select
              className="bg-gray-900 w-ful h-9 px-2 flex justify-center items-center hover:bg-gray-800 rounded-md text-white"
              value={select}
              onChange={(event) => setSelect(event.target.value)}
            >
              <option value="" hidden>
                Filter
              </option>
              <option value="all">All Products</option>
              <option value="Peripherals">Peripherals</option>
              <option value="Acessories">Acessories</option>
              <option value="Portables">Portables</option>
              <option value="Complete-PC">Complete PC</option>
              <option value="Computer-parts">Computer parts</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 h-full max-w-screen-xl mx-auto gap-6 px-5 ">
          {productsList}
        </div>
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
      </div>
    </main>
  );
}
