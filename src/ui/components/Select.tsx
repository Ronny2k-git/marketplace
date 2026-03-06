import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const SelectStyle = cva("flex w-full outline-none", {
  variants: {
    variant: {
      basic:
        "bg-gray-800 hover:bg-gray-800 text-white focus:outline-1 focus:outline-blue-700/80",
      basic2: "",
    },
    size: {
      default: "px-4 h-10 rounded-md",
      md: "",
    },
  },
  defaultVariants: {
    variant: "basic",
    size: "default",
  },
});

type SelectProps = Omit<ComponentPropsWithRef<"select">, "size"> & {
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
} & VariantProps<typeof SelectStyle>;

export function Select({
  className,
  leftIcon,
  rightIcon,
  variant = "basic",
  size = "default",
  label,
  children,
  ...props
}: SelectProps) {
  return (
    <div className={twMerge("flex flex-col gap-2 w-full", className)}>
      {label && <label className="text-gray-400 text-sm">{label}</label>}

      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            {leftIcon}
          </span>
        )}

        <select
          className={twMerge(
            SelectStyle({ variant, size }),
            leftIcon && "pl-12",
            rightIcon && "pr-12",
          )}
          {...props}
        >
          {children}
        </select>

        {rightIcon && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}
