"use client";

import { formattedCategory } from "@/global/constants";
import { Product } from "@/global/types";
import { formatDate } from "@/global/utils";
import { Card } from "@/ui/components";
import { Button } from "@/ui/components/Button";

import Link from "next/link";

export function ProductCard({
  id,
  src,
  name,
  createdAt,
  updatedAt,
  description,
  category,
}: Product) {
  return (
    <Card
      className="w-full p-4 rounded-lg gap-6"
      variant={"basic"}
      size={"default"}
    >
      {/* Image */}
      <img
        alt="product-image"
        className="aspect-video min-h-52 object-cover rounded-md"
        src={src}
      />

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <span className="px-2 py-1 text-xs text-center bg-blue-600/40 text-blue-300 rounded-full">
          {formattedCategory[category]}
        </span>

        <h3 className="text-lg font-semibold line-clamp-1">{name}</h3>

        <div className="text-white font-semibold line-clamp-4">
          Product description:{" "}
          <span className="text-gray-400 font-normal">{description}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col justify-end h-full gap-2">
        <div className="flex flex-row justify-between gap- text-sm">
          <div className="text-white font-semibold">
            Created:{" "}
            <span className="text-blue-400 font-normal">
              {formatDate(createdAt)}
            </span>
          </div>

          <div className="text-white font-semibold">
            Updated:{" "}
            <span className="text-yellow-500 font-normal">
              {formatDate(updatedAt)}
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-6">
          <Link href={`/edit-product/${id}`} className="w-full">
            <Button className="font-semibold" variant={"edit"}>
              Edit
            </Button>
          </Link>

          <Link href={`/product/${id}`} className="w-full">
            <Button className="font-semibold" variant={"basic2"}>
              View More
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
