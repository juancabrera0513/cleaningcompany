import React from "react";


export const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
<div className={["mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className].filter(Boolean).join(" ")}>{children}</div>
);