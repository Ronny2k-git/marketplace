import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { SiAlienware } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import { Drawer } from "./Drawer";

export function TopBar() {
  return (
    <div className="TopBar flex h-20 w-full bg-black justify-between">
      <div className="flex items-center">
        <Link href="/">
          <SiAlienware className="size-10 fill-white justify-center items-center text-xs hover:bg-gray-900" />
        </Link>
        <a href={"https://www.dell.com/pt-br/gaming/alienware"}>
          <p className="text-3xl text-blue-600  hover:underline">AlienWare</p>
        </a>
      </div>
      <div className="gap-2 items-center hidden md:flex mr-4">
        <Link href="/" className="flex gap-2">
          <MdOutlineExplore className="size-6 fill-white gap-4 hover:bg-gray-900" />
          <h2 className="mr-4 text-blue-600 hover:underline">Explore</h2>
        </Link>
        <Link className="flex gap-2" href={`/products/create`}>
          <IoMdAddCircleOutline className="size-6 fill-white hover:bg-gray-900" />
          <h3 className="mr-4 text-blue-600 hover:underline">AddProduct</h3>
        </Link>
        <Link className="flex gap-2" href={`/cart`}>
          <TiShoppingCart className="size-6 fill-white hover:bg-gray-900" />
          <h4 className="mr-4 text-blue-600 hover:underline">Cart</h4>
        </Link>
        {/*Drawer component used on the Top Bar */}
      </div>
      <div className="flex items-center right-0 top-7 absolute">
        <Drawer />
      </div>
    </div>
  );
}
