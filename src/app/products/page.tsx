"use client";

import { PageHeader } from "@/global/components";
import { useFetchLocalStorage } from "@/global/hooks";
import { Card, Input } from "@/ui/components";
import Link from "next/link";

export default function Products() {
  const products = useFetchLocalStorage("local-products");

  const now = new Date();

  // Products Infos
  const totalProducts = products.length ?? 0;
  const totalCategories = new Set(products.map((p) => p.category ?? 0)).size;

  const updatedThisWeek =
    products.filter((p) => {
      const updated = new Date(p.updatedAt);
      const diff = now.getTime() - updated.getTime();

      return diff <= 7 * 24 * 60 * 60 * 1000;
    }).length ?? 0;

  const newThisMonth =
    products.filter((p) => {
      const created = new Date(p.createdAt);

      return (
        created.getMonth() === now.getMonth() &&
        created.getFullYear() === now.getFullYear()
      );
    }).length ?? 0;

  const productStats = [
    { label: "Total Products", value: totalProducts },
    { label: "Categories", value: totalCategories },
    { label: "Updated This Week", value: updatedThisWeek },
    { label: "New This Month", value: newThisMonth },
  ];

  return (
    <main className="w-full overflow-hidden min-h-screen flex flex-col items-center bg-gray-950 px-4 py-10">
      <div className="flex flex-col gap-10 max-w-6xl w-full">
        {/* Header */}
        <section className="flex justify-between items-center flex-wrap gap-6">
          <PageHeader
            title="All Products"
            subtitle="Manage and analyze your products"
          />

          <Link
            href="/create"
            className="bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-md font-semibold"
          >
            + Create Product
          </Link>
        </section>

        {/* Stats Overview */}
        <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {productStats.map((product, index) => (
            <Card
              className="p-6 items-center rounded-2xl hover:border-gray-500/80"
              key={index}
              variant={"basic"}
              size={"default"}
            >
              <p className="text-sm text-gray-400">{product.label}</p>
              <h3 className="text-2xl font-bold">{product.value}</h3>
            </Card>
          ))}
        </section>

        {/* Filters */}
        <section>
          <Card className="p-6 rounded-2xl" variant={"basic"} size={"default"}>
            <div className="flex max-md:flex-col gap-4 justify-between">
              <Input
                className="w-full md:max-w-md"
                placeholder="Search by name..."
              />

              <div className="flex max-md:flex-wrap justify-center gap-4">
                <select className="px-4 h-10 rounded-lg bg-gray-800 border border-gray-700">
                  <option>All categories</option>
                </select>

                <select className="px-4 h-10 rounded-lg bg-gray-800 border border-gray-700">
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>

                <button
                  className="px-4 h-10 rounded-lg border border-gray-700
               hover:bg-gray-800 transition"
                >
                  Clear
                </button>
              </div>
            </div>
          </Card>
        </section>

        {/* Products Table */}
        <section className="w-full">
          <Card
            variant="basic2"
            size="default"
            className="rounded-2xl overflow-y-auto p-0"
          >
            <table className="w-full text-left text-md min-w-[55rem]">
              <thead className="bg-gray-900 border-b border-gray-800">
                <tr>
                  <th className="px-4 py-4">Product</th>

                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Created</th>
                  <th className="px-4 py-4">Updated</th>
                  <th className="px-4 py-4 text-right">Edit | Delete</th>
                </tr>
              </thead>

              <tbody className="">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => (
                  <tr
                    className="w-full border-b border-gray-800 hover:bg-gray-800/40 transition"
                    key={index}
                  >
                    <td className="px-4 py-3 font-medium">
                      <img
                        src="/logo.webp"
                        alt="Product"
                        className="w-10 h-10 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-4 py-4 font-medium">
                      MacBook Prossssssss {i}
                    </td>
                    <td className="px-4 py-4 text-gray-400">Electronics</td>
                    <td className="px-4 py-4">
                      {" "}
                      <span
                        className="px-3 py-1 rounded-full text-xs
                       bg-green-500/20 text-green-400"
                      >
                        3/3/2026
                      </span>
                    </td>
                    <td className="px-4 py-4 ">
                      <span
                        className="px-3 py-1 rounded-full text-xs
                       bg-yellow-500/20 text-yellow-400"
                      >
                        3/4/2026
                      </span>
                    </td>
                    <td className="px-5 py-4 ">
                      <div className="flex justify-end gap-3 text-sm">
                        <Link
                          href={`edit-product/${"productId"}`}
                          className="px-4 py-1 text-blue-400 border border-blue-500/40 rounded-lg
                          hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
                        >
                          Manage
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </section>

        <div className="w-full flex items-center justify-between gap-4">
          <span>{`Showing ${"1-10"} of ${128} products`}</span>

          {/* Mock */}
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800">
              Prev
            </button>
            <button className="px-3 py-1 bg-blue-600 rounded-md">1</button>
            <button className="px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800">
              2
            </button>
            <button className="px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800">
              3
            </button>
            <button className="px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
