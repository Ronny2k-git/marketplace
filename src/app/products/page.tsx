"use client";

import { PageHeader } from "@/global/components";
import { useFetchLocalStorage } from "@/global/hooks";
import { Card } from "@/ui/components";
import Link from "next/link";

export default function Products() {
  const products = useFetchLocalStorage("local-products");

  console.log(products);

  // Delete product
  const handleDelete = () => {};

  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-gray-950 px-4 py-10">
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
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Total Products", "Categories", "Low Stock", "Draft"].map(
            (label, index) => (
              <Card
                className="p-6 rounded-2xl"
                key={index}
                variant={"basic"}
                size={"default"}
              >
                <p className="text-sm text-gray-400">{label}</p>
                <h3 className="text-2xl font-bold">10</h3>
              </Card>
            ),
          )}
        </section>

        {/* Filters */}
        <section>
          <Card className="p-6 rounded-2xl" variant={"basic"} size={"default"}>
            <div className="flex max-md:flex-col gap-4 justify-between">
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full md:max-w-md px-4 py-2 rounded-lg bg-gray-800 border border-gray-700
               focus:outline-none focus:ring-1 focus:ring-blue-700/80"
              />

              <div className="flex max-md:flex-wrap justify-center gap-4">
                <select className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
                  <option>All categories</option>
                </select>

                <select className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>

                <button
                  className="px-4 py-2 rounded-lg border border-gray-700
               hover:bg-gray-800 transition"
                >
                  Clear
                </button>
              </div>
            </div>
          </Card>
        </section>

        <section className="w-full"></section>
      </div>
    </main>
  );
}

// "use client";

// import { PageHeader } from "@/global/components";
// import { Card } from "@/ui/components";
// import Link from "next/link";

// export default function Products() {
//   return (
//     <main className="w-full min-h-screen bg-gray-950 px-4 py-10 flex flex-col items-center gap-8">
//       {/* HEADER */}
//       <section className="w-full max-w-6xl">
//         <div className="flex justify-between items-center flex-wrap gap-6">
//           <PageHeader
//             title="All Products"
//             subtitle="Manage and analyze your products"
//           />

//           <Link
//             href="/create"
//             className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600
//             hover:opacity-90 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
//           >
//             + Create Product
//           </Link>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {["128 Products", "23 Categories", "12 Low Stock", "8 Draft"].map(
//           (item, i) => (
//             <Card
//               key={i}
//               variant="basic2"
//               size="default"
//               className="p-6 rounded-2xl bg-gray-900/70 backdrop-blur-md
//               border border-gray-800 hover:border-gray-700 transition"
//             >
//               <p className="text-sm text-gray-400">Overview</p>
//               <h3 className="text-2xl font-bold mt-2">{item}</h3>
//             </Card>
//           ),
//         )}
//       </section>

//       {/* FILTERS */}
//       <section className="w-full max-w-6xl">
//         <Card
//           variant="basic2"
//           size="default"
//           className="p-6 rounded-2xl bg-gray-900/70 backdrop-blur-md border border-gray-800"
//         >
//           <div className="flex flex-col lg:flex-row gap-4 justify-between">
//             <input
//               type="text"
//               placeholder="Search by name..."
//               className="w-full lg:max-w-xs px-4 py-2 rounded-lg bg-gray-800 border border-gray-700
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />

//             <div className="flex flex-wrap gap-4">
//               <select className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
//                 <option>All categories</option>
//               </select>

//               <select className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
//                 <option>All status</option>
//               </select>

//               <select className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
//                 <option>Ascending</option>
//                 <option>Descending</option>
//               </select>

//               <button
//                 className="px-4 py-2 rounded-lg border border-gray-700
//               hover:bg-gray-800 transition"
//               >
//                 Clear
//               </button>
//             </div>
//           </div>
//         </Card>
//       </section>

//       {/* PRODUCTS TABLE */}
//       <section className="w-full max-w-6xl">
//         <Card
//           variant="basic2"
//           size="default"
//           className="rounded-2xl bg-gray-900/70 backdrop-blur-md
//           border border-gray-800 overflow-hidden"
//         >
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-gray-900 border-b border-gray-800">
//                 <tr>
//                   <th className="px-6 py-4">Name</th>
//                   <th className="px-6 py-4">Category</th>
//                   <th className="px-6 py-4">Price</th>
//                   <th className="px-6 py-4">Stock</th>
//                   <th className="px-6 py-4">Status</th>
//                   <th className="px-6 py-4 text-right">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {[1, 2, 3, 4, 5].map((_, i) => (
//                   <tr
//                     key={i}
//                     className="border-b border-gray-800 hover:bg-gray-800/40 transition"
//                   >
//                     <td className="px-6 py-4 font-medium">MacBook Pro {i}</td>
//                     <td className="px-6 py-4 text-gray-400">Tech</td>
//                     <td className="px-6 py-4">$1,299</td>
//                     <td className="px-6 py-4">42</td>
//                     <td className="px-6 py-4">
//                       <span
//                         className="px-3 py-1 rounded-full text-xs
//                       bg-green-500/20 text-green-400"
//                       >
//                         Active
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       <div className="flex justify-end gap-3">
//                         <button className="text-blue-400 hover:underline">
//                           Edit
//                         </button>
//                         <button className="text-red-400 hover:underline">
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </Card>

//         {/* PAGINATION */}
//         <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
//           <span>Showing 1–5 of 128 products</span>

//           <div className="flex gap-2">
//             <button className="px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800">
//               Prev
//             </button>
//             <button className="px-3 py-1 bg-blue-600 rounded-md">1</button>
//             <button className="px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800">
//               2
//             </button>
//             <button className="px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800">
//               3
//             </button>
//             <button className="px-3 py-1 border border-gray-700 rounded-md hover:bg-gray-800">
//               Next
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* EMPTY STATE EXAMPLE (use if needed) */}

//       <Card className="p-20 text-center rounded-2xl bg-gray-900 border border-gray-800">
//         <p className="text-4xl mb-4">📦</p>
//         <h3 className="text-xl font-semibold">No products found</h3>
//         <p className="text-gray-400 mt-2">
//           Create your first product to get started.
//         </p>
//       </Card>
//     </main>
//   );
// }
