"use client";

import { Fruits } from "../lista/utils/page";

import { useState } from "react";

export default function List() {
  const [search, setSearch] = useState<string>("");

  const filteredProducts = Fruits.filter((list) => {
    return (
      list.name.toLowerCase().includes(search.toLowerCase()) ||
      list.price.toLowerCase().includes(search.toLowerCase())
    );
  });

  const setFilteredProducts = filteredProducts.map((list) => {
    return (
      <div
        className="mt-2 text-black"
        key={list.name}
        name={list.name}
        price={list.price}
      />
    );
  });

  return (
    <div className="h-screen w-screen bg-red-500">
      <div className="h-screen w-screen flex justify-center flex-col items-center">
        <input
          className="w-96 h-9 bg-purple-500 rounded-lg mr-1 mb-8 text-white placeholder-white"
          placeholder="Buscar..."
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <div>{setFilteredProducts}</div>
      </div>
    </div>
  );
}
