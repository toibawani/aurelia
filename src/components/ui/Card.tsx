import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({
  title,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        bg-white
        p-6
        shadow-sm
        border
        border-stone-200
        ${className}
      `}
    >
      {title && (
        <h2 className="text-lg font-semibold text-stone-900 mb-4">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}