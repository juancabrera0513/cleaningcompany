import React from "react";


const cx = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");


export const Accordion: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
<div className={cx("divide-y rounded-xl border", className)} {...p} />
);
export const AccordionItem: React.FC<React.HTMLAttributes<HTMLDetailsElement> & { value: string }> = ({ className = "", children, ...p }) => (
<details className={cx("group", className)} {...p}>{children}</details>
);
export const AccordionTrigger: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = "", children, ...p }) => (
<summary className={cx("cursor-pointer list-none py-3 px-4 font-medium hover:bg-emerald-50", className)} {...p}>{children}</summary>
);
export const AccordionContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
<div className={cx("px-4 pb-4 text-sm text-muted-foreground", className)} {...p} />
);