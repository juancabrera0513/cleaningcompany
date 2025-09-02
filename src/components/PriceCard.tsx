import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "./icons";
import type { Plan } from "../lib/constants";


export const PriceCard: React.FC<{ plan: Plan; onOpenBooking: () => void }> = ({ plan, onOpenBooking }) => (
<Card className={plan.best ? "border-emerald-600" : undefined}>
<CardHeader className="space-y-1">
<div className="flex items-center justify-between">
<CardTitle>{plan.name}</CardTitle>
{plan.best && <Badge variant="default">Most popular</Badge>}
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
<span className="text-muted-foreground">/{plan.cadence}</span>
</div>
<p className="text-sm text-muted-foreground">{plan.tagline}</p>
</CardHeader>
<CardContent>
<ul className="space-y-2 text-sm">
{plan.features.map((f) => (
<li key={f} className="flex items-center gap-2">
<CheckCircle2 className="h-4 w-4" /> {f}
</li>
))}
</ul>
<Button className="w-full mt-4" onClick={onOpenBooking}>Book this</Button>
</CardContent>
</Card>
);