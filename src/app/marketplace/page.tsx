"use client";

import { ProductCard } from "../../components/ProductCard";
import { useState } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { Product } from "../../utils/utils";
import { useEffect } from "react";

export default function MarketPlace() {
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
    <main className="view-port w-full mx-auto bg-gray-950 h-[calc(screen-48px)]">
      <title>Marketplace</title>
      <div className=" flex justify-center max-w-screen-xl mx-auto items-center relative">
        <img className="w-full h-[250px] px-5" src="blackfriday3.avif"></img>
        <div className="flex h-full w-full absolute pl-8 max-sm:mr-5 items-center">
          <p className=" text-black font-medium text-xl max-md:text-lg">
            PCs & ACESSORIES
          </p>
          <p className="absolute text-black mt-20 max-sm:text-2xl md:text-4xl max-md:text-3xl">
            The quality is out of this world
          </p>
        </div>
      </div>
      <div className="Input max-w-screen-xl mx-auto px-5 flex justify-center items-center">
        <div className="relative">
          <IoSearchSharp className="absolute text-xl ml-1 -translate-y-1/2" />
        </div>
        <input
          className="bg-gray-900 w-full h-9 rounded-md text-white mt-8 mb-8 placeholder-white pl-8 max-w-screen hover:bg-gray-800"
          placeholder="Search Itens..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <RiArrowRightDoubleLine className="fill-blue-700 text-6xl mr-24 -ml-3" />
        <p className="text-blue-600">Select</p>
        <select
          className="bg-gray-900 w-full h-9 flex justify-center items-center hover:bg-gray-800 rounded-md ml-2 text-white mt-8 mb-8"
          value={select}
          onChange={(event) => setSelect(event.target.value)}
        >
          <option value="all">All Products</option>
          <option value="Peripherals">Peripherals</option>
          <option value="Acessories">Acessories</option>
          <option value="Portables">Portables</option>
          <option value="Complete-PC">Complete PC</option>
          <option value="Computer-parts">Computer parts</option>
        </select>
      </div>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 h-full max-w-screen-xl mx-auto gap-6 px-5 ">
        {productsList}
      </div>
      <div className="h-full w-full flex mt-20 justify-center items-center text-xl ">
        <button> {" < 1 2 3 4 5 >"}</button>
      </div>
      <div className="mt-20 text-gray-950">.</div>
    </main>
  );
}
