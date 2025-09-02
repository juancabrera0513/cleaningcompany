import React from "react";


const cx = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");


export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
<div className={cx("rounded-2xl border bg-white shadow-sm", className)} {...p} />
);
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
<div className={cx("p-6", className)} {...p} />
);
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
<div className={cx("p-6 pt-0", className)} {...p} />
);
export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className = "", ...p }) => (
<h3 className={cx("font-semibold text-lg", className)} {...p} />
);