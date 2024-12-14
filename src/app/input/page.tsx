"use client";

import { useState } from "react";

// type List = {
//   name: string;
//   price: string;
// };

const Fruits = [
  { name: "Apple", price: "1$" },
  { name: "Mango", price: "3$" },
  { name: "Banana", price: "2$" },
  { name: "Orange", price: "2.5$" },
  { name: "Papaya", price: "3$" },
  { name: "Strawberry", price: "4$" },
  { name: "Pineapple", price: "3.5$" },
  { name: "Lemon", price: "2$" },
  { name: "Kiwi", price: "2.5$" },
  { name: "Grape", price: "4.5$" },
];

export default function List() {
  const [search, setSearch] = useState("");

  const filteredList = Fruits.filter((list) => {
    return (
      list.name.toLowerCase().includes(search.toLowerCase()) ||
      list.price.toLowerCase().includes(search.toLowerCase())
    );
  });

  const setFilteredList = filteredList.map((list) => {
    return (
      <li className="text-black font-semibold" key={list.name}>
        * Name = {list.name} : Price = {list.price}
      </li>
    );
  });

  return (
    <div className="h-screen w-screen bg-red-500">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <input
            className="w-96 h-8 rounded-md bg-red-200 text-black hover:bg-red-100 mb-8"
            placeholder="Faça a sua busca..."
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          <div className="h-8 w-8 ml-1 rounded-md bg-red-200 mb-8" />
        </div>
        <div className="mr-[180px]">
          <ul className="text-black">{setFilteredList}</ul>
        </div>
      </div>
    </div>
  );
}
