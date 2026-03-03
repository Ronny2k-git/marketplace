import Link from "next/link";
import { FiPackage } from "react-icons/fi";
import { GithubIcon } from "../icons/Github";

export function Footer() {
  return (
    <footer className="w-full flex justify-center bg-gray-950 px-3 pt-20">
      <div className="w-full max-w-7xl border bg-gray-900/30 border-blue-700/40 rounded-2xl p-4">
        <div className="flex max-md:flex-col items-center justify-between gap-10">
          {/* Logo + descrição */}
          <div className="flex flex-col max-md:items-center gap-4">
            <div className="flex items-center gap-3">
              <FiPackage className="h-8 w-8 text-blue-600 fill-white/85" />
              <span className="text-xl text-white font-semibold">
                Product Manager
              </span>
            </div>

            <p className="text-gray-400 max-md:text-center max-w-sm text-sm">
              A simple and modern system to manage and control your products
              locally.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-white font-semibold text-lg">Social</h3>

            <Link
              className="flex items-center gap-2 hover:underline"
              href={"https://github.com/Ronny2k-git"}
              target="_blank"
            >
              <GithubIcon className="size-6" />
              Github
            </Link>
          </div>

          {/* Extra Info */}
          <div className="flex flex-col max-md:items-center gap-3">
            <h3 className="text-white font-semibold text-lg">About</h3>

            <p className="text-gray-400 max-md:text-center text-sm max-w-xs">
              Built for learning purposes using Next.js, React and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700/30 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Product Manager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
