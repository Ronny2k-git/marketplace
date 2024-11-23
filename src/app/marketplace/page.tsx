"use client";

import "./market.css";
import { ProductCard } from "../../components/ProductCard";
import { useState } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { Product, Products } from "../../utils/utils";
import Link from "next/link";
import { useEffect } from "react";

// Products.map(e => e.price).map((b) =>)

export default function MarketPlace() {
  const [search, setSearch] = useState<string>("");
  // const [filteredProducts, setFilteredProducts] = useState<any[]>(Products);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log(localStorage.getItem("products-test"));
    setProducts(JSON.parse(localStorage.getItem("products-test") ?? "[]"));
  }, []);

  // useEffect(() => {
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.old.toLowerCase().includes(search.toLowerCase()) ||
      product.price.toLowerCase().includes(search.toLowerCase()) ||
      product.offer.toLowerCase().includes(search.toLowerCase()) ||
      product.discount.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  //   setFilteredProducts(filteredProducts);
  // }, [search]);

  const productsList = filteredProducts.map((product) => {
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
      />
    );
  });

  return (
    <main className="view-port w-full bg-gray-950 h-[calc(screen-48px)]">
      <div className=" flex justify-center items-center relative">
        <img className="w-[1240px] h-[250px]" src="blackfriday3.avif"></img>
        <div className="flex h-full w-full ml-[] absolute justify-center items-center mr-[650]">
          <p className=" text-black font-medium text-[21px] mr-[368]">
            PCs & ACESSORIES
          </p>
          <p className="absolute text-black mt-20 text-[40px]">
            Black Friday has already started
          </p>
        </div>
      </div>
      <div className="Input flex justify-center items-center">
        <div className="relative">
          <IoSearchSharp className="absolute text-xl ml-1 -translate-y-1/2" />
        </div>
        <input
          className="bg-gray-800 w-[735px] h-9 rounded-md text-white mt-8 mb-8 placeholder-white pl-8 max-w-screen hover:bg-blue-700"
          placeholder="Search Itens..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <RiArrowRightDoubleLine className="fill-blue-700 text-6xl mr-24 -ml-3" />
        Filter
        <button className="bg-gray-800 w-80 h-9 hover:bg-blue-700 rounded-md ml-2 text-white mt-8 mb-8"></button>
      </div>
      <div className="grid grid-cols-4 w-full h-full max-w-screen-xl mx-auto gap-6 px-4 ">
        {productsList}
      </div>
      <div className="h-full w-full flex mt-20 justify-center items-center text-xl ">
        <button> {" < 1 2 3 4 5 >"}</button>
      </div>
      <div className="mt-20 text-gray-950">.</div>
    </main>
  );
}
