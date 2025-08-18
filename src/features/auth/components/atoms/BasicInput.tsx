import React from "react";
import classNameMerge from "../../../../shared/utils/classNameMerge";

type BasicInputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function BasicInput({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}: BasicInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classNameMerge(
        "w-full rounded-lg bg-gray-50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400",
        className
      )}
    />
  );
}
