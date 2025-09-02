import React from "react";


const cx = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
variant?: "default" | "secondary" | "ghost";
size?: "sm" | "lg";
};


export const Button: React.FC<ButtonProps> = ({ className = "", variant = "default", size, ...props }) => (
<button
className={cx(
"inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500",
variant === "default" && "bg-emerald-600 text-white hover:bg-emerald-700",
variant === "secondary" && "bg-white text-emerald-700 border hover:bg-emerald-50",
variant === "ghost" && "bg-transparent text-foreground hover:bg-emerald-50",
size === "sm" && "text-sm px-3 py-1.5",
size === "lg" && "text-base px-5 py-3",
!size && "px-4 py-2",
className
)}
{...props}
/>
);