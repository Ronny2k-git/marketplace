import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const buttonStyle = cva(
  "flex w-full items-center justify-center text-white",
  {
    variants: {
      variant: {
        basic: "bg-gray-800 hover:bg-gray-700",
        basic2: "bg-blue-700 hover:bg-blue-600",
        ghost: "border border-gray-700 hover:bg-gray-800",
        ghost2:
          "text-blue-400 border border-blue-500/40 hover:border-blue-400 transition-all duration-200",
        edit: "bg-yellow-600 hover:bg-yellow-500",
        delete: "bg-red-700/90 hover:bg-red-700",
      },
      size: {
        default: "h-10 rounded-lg",
        xs: "px-4 py-1 rounded-lg",
        sm: "p-1.5 rounded-lg",
        md: "px-4 py-2 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "basic",
      size: "default",
    },
  },
);

type ButtonProps = ComponentPropsWithRef<"button"> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
} & VariantProps<typeof buttonStyle>;

export function Button({
  leftIcon,
  rightIcon,
  variant,
  size,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "relative flex items-center justify-center gap-2",
        buttonStyle({ variant, size }),
        className,
      )}
      {...props}
    >
      {leftIcon && <span className="text-gray-400 text-lg">{leftIcon}</span>}

      {children}

      {rightIcon && <span className="text-gray-400 text-lg">{rightIcon}</span>}
    </button>
  );
}
