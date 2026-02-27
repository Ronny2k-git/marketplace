"use client";

import { EmptyBanner } from "@/global/components";
import { CalculatePct } from "@/global/utils";
import { Product } from "@/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDescription } from "react-icons/md";

export default function ProductPage() {
  const params = useParams();
  const productId = params.productid as string;

  const [product, setProduct] = useState<Product>();

  {
    /*Fetch Product */
    useEffect(() => {
      const localProducts = JSON.parse(
        localStorage.getItem("local-products") ?? "",
      );

      const foundProduct = localProducts.find(
        (product: Product) => product.id === productId,
      );

      setProduct(foundProduct);
    }, [productId]);
  }
  if (product == undefined) {
    return (
      <div className="h-[calc(100vh-88px)] p-4 bg-gray-950 w-full flex items-center justify-center">
        <EmptyBanner
          title="No products found"
          subtitle="Try again with different terms"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full flex justify-center px-4 py-16 bg-gray-950">
      <title>Product</title>

      <div className="w-full max-w-5xl flex flex-col gap-8">
        <section
          className="flex flex-col p-4 sm:py-16 bg-gray-900/20 border rounded-2xl max-w-5xl border-gray-800/70
          w-full items-center gap-8"
        >
          {/* Product Name */}
          <div className="flex justify-center mb-8">
            <h1 className="text-3xl text-center text-gray-400">
              {product.name}
            </h1>
          </div>

          <div className="flex max-md:flex-col max-md:items-center justify-center gap-8">
            {/* Secondary Images */}
            <div className="flex md:flex-col gap-4 sm:gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <img
                  key={index}
                  alt="secondary-image"
                  className="object-cover h-14 w-14"
                  src={product.src}
                />
              ))}
            </div>

            {/* Product Infos */}
            <div className="flex flex-col justify-center items-center gap-12">
              <img
                alt="main-image"
                className=" h-64 w-64 sm:h-80 sm:w-80 object-cover transition-transform duration-500 hover:scale-110"
                src={product.src}
              />

              <div className="">
                <span className="text-base line-through text-gray-500">{`$ ${product.old}`}</span>

                <div className="flex gap-4 items-center">
                  <span className="text-[40px] text-blue-700">
                    {`$${product.price}`}
                  </span>

                  <span className="text-base h-6 bg-gray-700 px-1 rounded-xl text-white">
                    {`- ${CalculatePct(Number(product.old), Number(product.price))}`}
                  </span>
                </div>
                <p className="text-[13px] text-gray-500">{product.payment}</p>
              </div>
            </div>
          </div>

          {/* Buy Button */}
          <Link className="w-full max-w-[21rem]" href="/cart">
            <div className=" flex justify-center md:ml-10 items-center h-14 w-full rounded-md bg-blue-700 hover:bg-blue-600">
              <p className="text-white font-bold text-[15px]">BUY</p>
            </div>
          </Link>
        </section>

        <div className="h-0.5 my-8 w-full bg-gray-900" />

        <section className="flex flex-col gap-8">
          <div className="flex items-start gap-2">
            <MdDescription className="size-8 fill-blue-500" />
            <h1 className=" font-bold text-[25px] text-gray-400">
              Product description
            </h1>
          </div>

          <h2 className="whitespace-pre-line break-words">
            {product.description}
          </h2>
        </section>
      </div>
    </main>
  );
}
