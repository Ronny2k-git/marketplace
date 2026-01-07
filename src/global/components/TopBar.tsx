import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { SiAlienware } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import { Drawer } from "./Drawer";

const PROJECT_ROUTES = [
  {
    label: "Explore",
    path: "/",
    icon: <MdOutlineExplore className="size-7" />,
  },
  {
    label: "Create Product",
    path: "/create",
    icon: <IoMdAddCircleOutline className="size-7" />,
  },
  { label: "Cart", path: "/cart", icon: <TiShoppingCart className="size-7" /> },
];

export function TopBar() {
  return (
    <div className="w-full bg-black px-5">
      <div className="flex max-w-7xl mx-auto h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <SiAlienware className="h-12 w-12 fill-white justify-center items-center text-xs" />
          </Link>
          <a href={"https://www.dell.com/pt-br/gaming/alienware"}>
            <p className="text-3xl text-blue-600  hover:underline">AlienWare</p>
          </a>
        </div>

        <div className="md:flex gap-2 items-cente hidden">
          {PROJECT_ROUTES.map((route, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Link
                href={route.path}
                className="flex items-center justify-center gap-2"
              >
                {route.icon}

                <h2 className="mr-4 text-lg text-blue-600 hover:underline">
                  {route.label}
                </h2>
              </Link>
            </div>
          ))}
        </div>

        {/*Drawer component */}
        <div className="flex items-center md:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
}
