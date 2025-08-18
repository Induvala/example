import React from "react";
import classNameMerge from "../../../../shared/utils/classNameMerge";

type BasicCheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;

};

export default function BasicCheckbox({ label, checked, onChange,className }: BasicCheckboxProps) {
  return (
    <label className="flex items-center space-x-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={classNameMerge(
       "h-4 w-4 rounded border-gray-300 text-white focus:ring-yellow-400",
       className
      )}
      />
      <span>{label}</span>
    </label>
  );
}
