import Link from "next/link";
import { FiPackage } from "react-icons/fi";
import { PROJECT_ROUTES } from "../utils";
import { Drawer } from "./Drawer";

export function TopBar() {
  return (
    <header className="w-full fixed pt-6 flex items-center justify-center bg-gray-950/80 backdrop-blur-[1px] px-3 ">
      <div className="w-full px-2 rounded-full border border-blue-700/40 max-w-7xl">
        {/* Nav */}
        <nav className="flex max-w-7xl mx-auto p-2 items-center justify-between">
          <Link className="flex items-center gap-3" href="/">
            <FiPackage className="h-10 w-10 text-blue-600 fill-white/85" />

            <span className="text-2xl text-white">Product Manager</span>
          </Link>

          <div className="md:flex gap-2 items-cente hidden">
            {PROJECT_ROUTES.map((route, index) => (
              <div className="flex items-center justify-center" key={index}>
                <Link
                  href={route.path}
                  className="flex items-center text-blue-600 justify-center gap-2"
                >
                  {route.icon}

                  <h2 className="mr-4 text-lg text-white hover:underline">
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
        </nav>
      </div>
    </header>
  );
}
