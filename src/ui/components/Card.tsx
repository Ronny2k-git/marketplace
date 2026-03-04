import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export const cardStyle = cva("w-full flex flex-col h-auto", {
  variants: {
    variant: {
      basic: "border border-gray-700 bg-gray-900",
      basic2: "bg-gray-900/30 border border-gray-700/80",
      ghost: "border border-blue-700/40",
    },
    size: {
      default: "px-2",
      md: "px-4 py-6 sm:p-10 rounded-2xl",
    },
  },
  defaultVariants: {
    variant: "basic",
    size: "default",
  },
});

type CardProps = ComponentPropsWithRef<"div"> & {
  className?: string;
} & VariantProps<typeof cardStyle>;

export function Card({
  variant = "basic",
  size = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={twMerge(cardStyle({ variant, size }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
