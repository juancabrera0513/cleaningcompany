import React from "react";
import { Sparkles, Phone } from "./icons";
import { Button } from "./ui/button";
import { COMPANY } from "../lib/constants";


export const StickyCTA: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => (
<div className="fixed bottom-4 inset-x-0 z-50 px-4">
<div className="mx-auto max-w-2xl rounded-2xl shadow-lg bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
<div className="text-sm font-medium flex items-center gap-2">
<Sparkles className="h-4 w-4"/> Free estimates. Satisfaction guaranteed.
</div>
<div className="flex items-center gap-2">
<a href={`tel:${COMPANY.phoneHref}`} className="text-white/90 text-sm font-semibold hidden sm:inline-flex items-center gap-2"><Phone className="h-4 w-4"/> Call</a>
<Button size="sm" variant="secondary" onClick={onOpenBooking}>Get Quote</Button>
</div>
</div>
</div>
);