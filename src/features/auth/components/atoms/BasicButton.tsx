import React from "react";
import classNameMerge from "../../../../shared/utils/classNameMerge";

type BasicButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

export default function BasicButton({
  children,
  variant = "primary",
  disabled = false,
  fullWidth = false,
  onClick,
}: BasicButtonProps) {
  const base = "rounded-lg font-medium transition-colors px-4 py-3 text-sm";
  const variants = {
    primary: "bg-gray-200 text-gray-500 cursor-not-allowed", // default for demo
    outline: "border border-gray-300 bg-white text-black hover:bg-gray-50",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNameMerge(base, variants[variant], fullWidth && "w-full")}
    >
      {children}
    </button>
  );
}
