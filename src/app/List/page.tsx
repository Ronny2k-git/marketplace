"use client";

import { useState } from "react";

const automobiles = [
  { nome: " Gol", ano: "2000 " },
  { nome: " Ferrari", ano: " 2010" },
  { nome: " voyage", ano: " 2011" },
  { nome: " Tucson", ano: " 2013" },
  { nome: " S10", ano: " 2016" },
  { nome: " Empala", ano: " 1977" },
  { nome: " Lambo", ano: " 2018" },
  { nome: " CB 1000", ano: " 2021" },
  { nome: " BMW", ano: " 2022" },
  { nome: " Harley", ano: " 2024" },
];

export default function List() {
  const [search, setSearch] = useState<any>("");

  const filteredProducts = automobiles.filter((vehicles) => {
    return (
      vehicles.nome.toLowerCase().includes(search.toLowerCase()) ||
      vehicles.ano.toLowerCase().includes(search.toLowerCase())
    );
  });

  const vehiclesList = filteredProducts.map((vehicles, index) => {
    return (
      <div key={index}>
        <li>
          nome={vehicles.nome} ano={vehicles.ano}
        </li>
      </div>
    );
  });

  return (
    <main className="h-screen w-screen bg-black">
      <div className="flex flex-col h-full w-full justify-center items-center">
        <input
          className="h-10 rounded-lg w-96 text-black text-xl mb-10"
          placeholder="Buscar..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <div className=" flex flex-col items-center mr-48">{vehiclesList}</div>
      </div>
    </main>
  );
}
