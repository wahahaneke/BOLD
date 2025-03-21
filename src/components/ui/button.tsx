import React from "react";
import { cn } from "@/lib/utils";

/**
 * 按钮组件属性接口
 * @interface ButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按钮变体样式
   */
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  /**
   * 按钮尺寸
   */
  size?: "default" | "sm" | "lg" | "icon";
  /**
   * 按钮是否处于加载状态
   */
  isLoading?: boolean;
}

/**
 * 按钮组件
 * 提供多种样式变体和尺寸的按钮
 * @param {ButtonProps} props - 按钮属性
 * @returns {JSX.Element} 按钮组件
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          // 基础样式
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-toby-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          
          // 变体样式
          {
            "bg-toby-green-500 text-white hover:bg-toby-green-600 active:bg-toby-green-700": variant === "default",
            "border border-white/70 bg-transparent text-white hover:bg-white/10 active:bg-white/20": variant === "outline",
            "bg-toby-yellow-500 text-toby-black hover:bg-toby-yellow-600 active:bg-toby-yellow-700": variant === "secondary",
            "bg-red-500 text-white hover:bg-red-600 active:bg-red-700": variant === "destructive",
            "bg-transparent text-white hover:bg-white/10 active:bg-white/20": variant === "ghost",
            "text-toby-green-500 underline-offset-4 hover:underline": variant === "link",
          },
          
          // 尺寸样式
          {
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-9 px-3 text-xs": size === "sm",
            "h-12 px-6 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon",
          },
          
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button }; 
 