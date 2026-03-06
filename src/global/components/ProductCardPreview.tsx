import { Card } from "@/ui/components";
import { formatDate } from "../utils";

type ProductCardPreviewProps = {
  src: string;
  name: string;
  description: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
};

export function ProductCardPreview({
  src,
  name,
  description,
  category,
  createdAt,
  updatedAt,
}: ProductCardPreviewProps) {
  return (
    <Card
      className="max-sm:w-full max-w-[22rem] px-0 w-[22rem] h-[20rem] rounded-2xl"
      variant={"basic"}
      size={"default"}
    >
      {/* Image */}
      <div className="w-full aspect-video max-h-36 bg-gray-800/40 overflow-hidden rounded-lg">
        {src ? (
          <img
            src={src}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "banners/no-image.png";
              e.currentTarget.classList.remove("object-cover");
              e.currentTarget.classList.add("object-contain");
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm">
            No image available
          </div>
        )}
      </div>

      {/*Divider */}
      <div className="border-b mb-4 border-gray-700/80" />

      {/* Content */}
      <div className="flex flex-col gap-2 px-4">
        {/* Name */}
        <h3 className="text-lg font-semibold line-clamp-1">
          {name || "Product Name"}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-3 break-words">
          {description || "Product description will appear here"}
        </p>

        {/* Category */}
        <div className="flex justify-between items-center gap-4">
          <span className="text-xs px-2 h-6 flex items-center rounded-md bg-zinc-800 text-zinc-300 capitalize">
            {category || "Category"}
          </span>

          {/* Dates */}
          {createdAt && updatedAt && (
            <div className="flex gap-2 items-center text-xs text-gray-400">
              <div className="flex flex-col items-center">
                Created:
                <span className="px-2 p-0.5 rounded-full bg-green-500/20 text-green-400">
                  {formatDate(createdAt)}
                </span>
              </div>

              <div className="flex flex-col items-center">
                Updated:
                <span className="px-2 p-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
                  {formatDate(updatedAt)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
