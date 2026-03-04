import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const inputStyle = cva("w-full rounded-md", {
  variants: {
    variant: {
      basic:
        "bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-700/80",
      basic2: "",
    },
    size: {
      default: "px-4 h-10",
      md: "px-4 h-11",
    },
  },
  defaultVariants: {
    variant: "basic",
    size: "default",
  },
});

type InputProps = Omit<ComponentPropsWithRef<"input">, "size"> & {
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
} & VariantProps<typeof inputStyle>;

export function Input({
  className,
  leftIcon,
  rightIcon,
  label,
  variant = "basic",
  size = "default",
  ...props
}: InputProps) {
  return (
    <div className={twMerge("flex flex-col gap-2 w-full", className)}>
      {label && <label className="text-gray-400 text-sm">{label}</label>}

      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            {leftIcon}
          </span>
        )}

        <input
          className={twMerge(
            inputStyle({ variant, size }),
            leftIcon && "pl-12",
            rightIcon && "pr-12",
          )}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}
