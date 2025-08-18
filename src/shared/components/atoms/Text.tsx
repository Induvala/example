import React from "react";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return <span className={className}>{children}</span>;
}
