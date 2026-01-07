import { IoMdSad } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export type EmptyBannerProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function EmptyBanner({ title, subtitle, className }: EmptyBannerProps) {
  return (
    <div
      className={twMerge(
        `relative bg-[url('/banners/empty-banner.jpg')] bg-center bg-cover w-full h-auto max-sm:p-8 p-20 
         gap-2 border border-blue-950 flex flex-col justify-center-center items-center max-w-4xl rounded-2xl`,
        className
      )}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-2xl" />

      <div className="flex flex-col items-center gap-2 z-10">
        <IoMdSad className="z-10 max-sm:text-7xl text-8xl text-gray-400" />

        <h2 className="text-2xl sm:text-3xl text-center text-gray-300">
          {title}
        </h2>

        <p className="text-gray-300/90 text-center">{subtitle}</p>
      </div>
    </div>
  );
}
