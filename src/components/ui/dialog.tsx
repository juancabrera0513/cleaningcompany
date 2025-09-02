import React from "react";


const cx = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");


export const Dialog: React.FC<{ open: boolean; onOpenChange: (o: boolean) => void; children: React.ReactNode }>
= ({ open, onOpenChange, children }) => (
open ? (
<div className="fixed inset-0 z-50 grid place-items-center bg-black/40" onClick={() => onOpenChange(false)}>
<div className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>{children}</div>
</div>
) : null
);


export const DialogContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
<div className={cx("rounded-2xl bg-white p-6", className)} {...p} />
);
export const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
<div className={cx("mb-2", className)} {...p} />
);
export const DialogTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className = "", ...p }) => (
<h3 className={cx("text-xl font-bold", className)} {...p} />
);