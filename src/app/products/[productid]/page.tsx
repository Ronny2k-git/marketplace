import { Products } from "@/utils/utils";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

type infoProducts = {
  params: Promise<{ productid: string }>;
};

async function testPromise() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("test");
    }, 5_000);
  });
}

export default async function Info({ params }: infoProducts) {
  console.log(await params);

  const productid = (await params).productid;
  const product = Products.find((product) => product.id == productid);

  testPromise().then((result) => {
    console.log("Promise resolve", result);
  });

  if (product == undefined) {
    return (
      <div className="h-screen w-screen">
        <div className="h-full w-full">
          <h1 className="flex justify-center items-center mt-[450px] text-2xl">
            Lamentamos, nenhum produto foi encontrado com o termo pesquisado
          </h1>
          <h2 className="flex justify-center items-center text-xl">
            Tente novamente com outros termos...
          </h2>
        </div>
      </div>
    );
  }
  return (
    <main className="h-[calc(screen - 48px)] w-screen bg-gray-950">
      <title>Product</title>
      <div className="h-full w-full bg-gray-950 pt-">
        <div className="flex justify-center items-center ">
          <h1 className="text-3xl mb-28 pr-[300] text-gray-400 mt-16">
            {product.name}
          </h1>
        </div>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col gap-8">
            <div className="h-14 w-14 rounded-md bg-white">
              <img className="h-14 w-14 object-contain" src={product.src}></img>
            </div>
            <div className="h-14 w-14 rounded-md bg-white">
              <img className="h-14 w-14 object-contain" src={product.src}></img>
            </div>
            <div className="h-14 w-14 rounded-md bg-white">
              <img className="h-14 w-14 object-contain" src={product.src}></img>
            </div>
            <div className="h-14 w-14 rounded-md bg-white">
              <img className="h-14 w-14 object-contain" src={product.src}></img>
            </div>
          </div>
          <div className="flex justify-center items-center gap-12">
            <div className="h-[340px] w-[340px] rounded-md bg-white flex flex-shrink-0 justify-center ml-auto items-center">
              <img
                className="h-[340] w-[340] object-contain transition-transform duration-500 hover:scale-150"
                src={product.src}
              />
            </div>
            <div>
              <del className="text-[14px] text-gray-500">{product.old}</del>
              <p className="text-blue-700 text-[40px] font-bold">
                {product.price}
                <span className="text-[18px] text-blue-500">
                  {product.discount}
                </span>
              </p>
              <p className="ml-auto text-[13px] text-gray-500">
                {product.offer}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mr-[270] mt-8">
          <Link href="/Buy/cart">
            <div className="Button flex justify-center items-center h-14 w-[345px] ml-2 rounded-md bg-blue-700 hover:bg-blue-600 mb-20">
              <p className="text-white font-bold text-[15px]">BUY</p>
            </div>
          </Link>
        </div>
        <div className="Division h-7 w-full bg-gray-900"></div>
        <div className="flex">
          <MdDescription className="size-6 fill-blue-500 mt-[9]  ml-8" />
          <h1 className=" font-bold text-[25px] ml-1 mt-1 text-gray-400 mb-1">
            Especificações do Produto:
          </h1>
        </div>
        <div className="flex ">
          <h2 className="ml-4 whitespace-pre">{product.description}</h2>
          <div className=" flex h-full w-full justify-end items-center">
            <img className="h-[500] w-[900] -mt-10" src="/alien1.png"></img>
          </div>
        </div>
      </div>
    </main>
  );
}
