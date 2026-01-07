import { EmptyBanner } from "@/global/components";
import { Products } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { MdDescription } from "react-icons/md";

type infoProducts = {
  params: Promise<{ productid: string }>;
};

export default async function ProductPage({ params }: infoProducts) {
  const productid = (await params).productid;
  const product = Products.find((product) => product.id == productid);

  if (product == undefined) {
    return (
      <div className="h-[calc(100vh-88px)] w-full flex items-center justify-center">
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
          className="flex flex-col bg-gray-900/20 border rounded-2xl max-w-5xl border-gray-800/70
          py-12 w-full items-center gap-8"
        >
          {/* Product Name */}
          <div className="flex justify-center mb-8">
            <h1 className="text-3xl text-center text-gray-400">
              {product.name}
            </h1>
          </div>

          <div className="flex max-md:flex-col max-md:items-center justify-center gap-8">
            {/* Secondary Images */}
            <div className="flex md:flex-col gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <Image
                  key={index}
                  alt="secondary-image"
                  className="object-contain"
                  src={product.src}
                  width={56}
                  height={56}
                />
              ))}
            </div>

            {/* Product Infos */}
            <div className="flex flex-col justify-center items-center gap-12">
              <Image
                alt="main-image"
                className=" object-contain transition-transform duration-500 hover:scale-110"
                src={product.src}
                width={340}
                height={340}
              />

              <div>
                <del className="text-[14px] text-gray-500">{product.old}</del>
                <p className="text-blue-700 text-[40px] font-bold">
                  {product.price}
                  <span className="text-[18px] text-blue-500">
                    {product.discount}
                  </span>
                </p>
                <p className="text-[13px] text-gray-500">{product.offer}</p>
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
