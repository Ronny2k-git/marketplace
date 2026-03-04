"use client";

import { PageHeader } from "@/global/components";
import Link from "next/link";

export default function Products() {
  // Delete product
  const handleDelete = () => {};

  // TO DO TOMORROW

  // 1 FINISH EDIT PAGE (Update and Delete Functionalities)
  // 2 FINISH PRODUCTS PAGE
  // 3 USE THE USEFETCHLOCALSTORAGE IN ALL FILES
  // 3 TEST ALL FEATURES IN THE CLOUD

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Page Header */}
          <PageHeader
            title="All Products"
            subtitle=" Manage your registered products"
          />

          <Link
            href="/create"
            className="bg-blue-700 max-w-[12rem] hover:bg-blue-600 px-6 py-3 rounded-md font-semibold"
          >
            + Create Product
          </Link>
        </div>
      </div>
    </main>
  );
}
