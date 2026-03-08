"use client";

import { EmptyBanner, PageHeader } from "@/global/components";
import {
  formattedCategory,
  SELECTOR_CATEGORY_VALUES,
} from "@/global/constants";
import {
  useLocalStorageFetch,
  useProductsByCategory,
  useSearchProduct,
  useSortProduct,
} from "@/global/hooks";
import { formatDate } from "@/global/utils";
import { Card, Input, Select } from "@/ui/components";
import { Button } from "@/ui/components/Button";
import Link from "next/link";

export default function Products() {
  const products = useLocalStorageFetch("local-products");
  const now = new Date();

  // Filter products by name, category and creation date
  const { search, searchFilteredProduct, setSearch } = useSearchProduct({
    product: products,
  });

  const { select, selectedProduct, setSelect } = useProductsByCategory({
    product: searchFilteredProduct,
  });

  const { sortDirection, sortedProduct, setSortDirection } = useSortProduct({
    product: selectedProduct,
  });

  // Total products
  const totalProducts = products.length ?? 0;

  // Total categories
  const totalCategories = new Set(products.map((p) => p.category ?? 0)).size;

  // Products updated this week
  const updatedThisWeek =
    products.filter((p) => {
      const updated = new Date(p.updatedAt);
      const diff = now.getTime() - updated.getTime();

      return diff <= 7 * 24 * 60 * 60 * 1000;
    }).length ?? 0;

  // Products created this month
  const newThisMonth =
    products.filter((p) => {
      const created = new Date(p.createdAt);

      return (
        created.getMonth() === now.getMonth() &&
        created.getFullYear() === now.getFullYear()
      );
    }).length ?? 0;

  // Stats
  const productStats = [
    { label: "Total Products", value: totalProducts },
    { label: "Categories", value: totalCategories },
    { label: "Updated This Week", value: updatedThisWeek },
    { label: "New This Month", value: newThisMonth },
  ];

  // TO DO LATER

  // 1 TEST ALL FEATURES IN THE CLOUD.
  // 2 CREATE A PAGINATION COMPONENT

  return (
    <main className="w-full overflow-hidden min-h-screen flex flex-col items-center bg-gray-950 px-4 py-10">
      <div className="flex flex-col gap-10 max-w-6xl w-full">
        {/* Header */}
        <section className="flex justify-between items-center flex-wrap gap-6">
          <PageHeader
            title="All Products"
            subtitle="Manage and analyze your products"
          />

          <Link href="/create">
            <Button
              className="font-semibold w-[11rem]"
              variant={"basic2"}
              size="md"
            >
              + Create Product
            </Button>
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
                value={search}
                className="w-full md:max-w-md"
                placeholder="Search product by name..."
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="flex max-md:flex-wrap justify-center gap-4">
                <Select
                  className="w-40 "
                  value={select}
                  onChange={(event) => setSelect(event.target.value)}
                >
                  <option value={""}>All</option>

                  {SELECTOR_CATEGORY_VALUES.map((product, index) => (
                    <option
                      value={product.value}
                      key={index}
                      className={`${product.class}`}
                    >
                      {product.label}
                    </option>
                  ))}
                </Select>

                <Select
                  className="w-40"
                  value={sortDirection}
                  onChange={(e) =>
                    setSortDirection(e.target.value as "asc" | "desc")
                  }
                >
                  <option value={"asc"}>Ascending</option>
                  <option value={"desc"}>Descending</option>
                </Select>

                {/* Clean filters */}
                <Button
                  className="max-w-[5rem]"
                  variant={"ghost"}
                  size={"md"}
                  onClick={() => {
                    setSearch("");
                    setSelect("");
                    setSortDirection("desc");
                  }}
                >
                  Clear
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Products Table */}
        <section className="w-full">
          {sortedProduct.length === 0 ? (
            <EmptyBanner
              title="No Products Found"
              subtitle="Please check your filters or create a new one"
            />
          ) : (
            <Card
              variant="basic2"
              size="default"
              className="rounded-2xl overflow-y-auto p-0"
            >
              <table className="w-full text-left text-md min-w-[55rem] ">
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
                  {sortedProduct.map((p, index) => (
                    <tr
                      className="w-full border-b border-gray-800 hover:bg-gray-800/40 transition"
                      key={index}
                    >
                      <td className="px-4 py-3 font-medium">
                        <img
                          src={p.src}
                          alt="Product"
                          className="w-10 h-10 object-cover rounded-md"
                        />
                      </td>
                      <td className="px-4 py-4 font-medium max-w-[16rem]">
                        {p.name}
                      </td>
                      <td className="px-4 py-4 text-gray-400">
                        {formattedCategory[p.category]}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs
                       bg-green-500/20 text-green-400"
                        >
                          {formatDate(p.createdAt)}
                        </span>
                      </td>
                      <td className="px-4 py-4 ">
                        <span
                          className="px-3 py-1 rounded-full text-xs
                       bg-yellow-500/20 text-yellow-400"
                        >
                          {formatDate(p.updatedAt)}
                        </span>
                      </td>
                      <td className="px-5 py-4 ">
                        <div className="flex justify-end gap-3 text-sm">
                          <Link href={`edit-product/${p.id}`}>
                            <Button
                              className="max-w-[5rem]"
                              variant={"ghost2"}
                              size={"xs"}
                            >
                              Manage
                            </Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )}
        </section>

        <div className="w-full flex items-center justify-between gap-4">
          <span>{`Showing ${"1-10"} of ${totalProducts} products`}</span>

          {/* Mock */}
          {totalProducts > 10 && (
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
          )}
        </div>
      </div>
    </main>
  );
}
