import React from "react";


const cx = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");


export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "secondary" }> = ({ className = "", variant = "secondary", ...p }) => (
<span className={cx(
"inline-flex items-center rounded-md text-xs font-semibold px-2 py-1",
variant === "default" ? "bg-emerald-600 text-white" : "bg-emerald-100 text-emerald-700",
className
)} {...p} />
);