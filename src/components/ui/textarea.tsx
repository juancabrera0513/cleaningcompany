import React from "react";


const cx = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");


export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className = "", ...p }) => (
<textarea className={cx("w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500", className)} {...p} />
);