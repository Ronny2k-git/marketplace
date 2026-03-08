"use client";

import { ProductCard } from "@/components";
import { EmptyBanner } from "@/global/components";
import { SELECTOR_CATEGORY_VALUES } from "@/global/constants";
import {
  useLocalStorageFetch,
  useProductsByCategory,
  useSearchProduct,
} from "@/global/hooks";
import { Input, Select } from "@/ui/components";
import { Button } from "@/ui/components/Button";
import Link from "next/link";
import { RiArrowRightDoubleLine } from "react-icons/ri";

export default function MarketPlaceHome() {
  const products = useLocalStorageFetch("local-products");

  // Filter products by name and category
  const { search, searchFilteredProduct, setSearch } = useSearchProduct({
    product: products,
  });

  const { select, selectedProduct, setSelect } = useProductsByCategory({
    product: searchFilteredProduct,
  });

  return (
    <main className="flex w-full min-h-screen justify-center py-10 px-4 bg-gray-950 ">
      <div className="w-full h-full max-w-7xl">
        {/* Main Title */}
        <div className="flex max-[670px]:flex-col justify-between items-center gap-6 mb-4">
          <div className="flex flex-col gap-4 max-[670px]:items-center">
            <h1 className="text-3xl font-bold max-[670px]:text-center">
              Product Management System
            </h1>

            <p className="text-gray-400 max-w-xl max-[670px]:text-center">
              Create, manage, and organize your products locally. Add new items,
              edit details, and filter them easily. All data is stored in your
              browser.
            </p>
          </div>

          <Link href="/create">
            <Button
              className="font-semibold w-[11rem]"
              variant={"basic2"}
              size="md"
            >
              + Create Product
            </Button>
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
                placeholder="Search product by name ..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            {/* Selector to filter the products by value */}
            <div className="flex gap-4 justify-center">
              <Select
                className="min-w-44"
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

              {/* Clean search filter*/}
              <Button
                variant={"ghost"}
                size={"md"}
                onClick={() => {
                  setSearch("");
                  setSelect("");
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        </section>
        {/* Filtered Products */}
        <div className="w-full h-full gap-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {selectedProduct.length > 0 ? (
            selectedProduct.map((product) => (
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
