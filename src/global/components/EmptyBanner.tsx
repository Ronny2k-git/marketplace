import { twMerge } from "tailwind-merge";

export type EmptyBannerProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function EmptyBanner({ title, subtitle, className }: EmptyBannerProps) {
  return (
    <div className="relative w-full flex justify-center">
      <div
        className={twMerge(
          `
          relative
          bg-[url('/banners/not-found.png')] 
          bg-contain bg-center bg-no-repeat
          w-full 
          h-auto
          py-24
          max-w-4xl
          rounded-2xl
          overflow-hidden
          shadow-2xl
          border border-blue-700/60
          flex items-center justify-center
          `,
          className,
        )}
      >
        {/* Overlay com gradiente */}
        <div className="absolute bg-blue-700/60 inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Conteúdo */}
        <div className="relative z-10 text-center flex flex-col gap-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-gray-200">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
