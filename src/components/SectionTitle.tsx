import React from "react";


export const SectionTitle: React.FC<React.PropsWithChildren<{ kicker?: string; sub?: string }>> = ({ kicker, children, sub }) => (
<div className="text-center max-w-2xl mx-auto mb-10">
{kicker && <div className="text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-2">{kicker}</div>}
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{children}</h2>
{sub && <p className="text-muted-foreground mt-3">{sub}</p>}
</div>
);