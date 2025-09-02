import React from "react";
import { Star } from "./icons";


export const StarRow: React.FC<{ n?: number }> = ({ n = 5 }) => (
<div className="flex items-center gap-1">
{Array.from({ length: n }).map((_, i) => (
<Star key={i} className="h-4 w-4" />
))}
</div>
);