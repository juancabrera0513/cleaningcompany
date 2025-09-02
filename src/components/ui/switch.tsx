import React from "react";


const cx = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");


export const Switch: React.FC<{ checked: boolean; onCheckedChange: (v: boolean) => void; className?: string }>
= ({ checked, onCheckedChange, className }) => (
<button
type="button"
role="switch"
aria-checked={checked}
onClick={() => onCheckedChange(!checked)}
className={cx(
"relative inline-flex h-6 w-11 items-center rounded-full transition",
checked ? "bg-emerald-600" : "bg-gray-300",
className
)}
>
<span className={cx("inline-block h-5 w-5 transform rounded-full bg-white transition", checked ? "translate-x-5" : "translate-x-1")} />
</button>
);