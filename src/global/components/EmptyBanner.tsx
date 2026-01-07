import Image from "next/image";
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
        "bg-[url('/')] w-full h-auto p-8 gap-2 flex flex-col justify-center-center items-center max-w-2xl  rounded-xl",
        className
      )}
    >
      <Image alt="banner-image" src="/" width={80} height={80} />

      <h2 className="text-3xl text-gray-300">{title}</h2>

      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
}
