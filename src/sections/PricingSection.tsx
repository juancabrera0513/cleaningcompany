import React, { useMemo, useState } from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { PriceCard } from "../components/PriceCard";
import { PLANS, priceForCommercial } from "../lib/constants";
import type { Plan } from "../lib/constants";
import { Switch } from "../components/ui/switch";


export const PricingSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
const [isCommercial, setIsCommercial] = useState(false);


const displayPlans: Plan[] = useMemo(() =>
PLANS.map((p) => ({ ...p, price: isCommercial ? priceForCommercial(p.price) : p.price })),
[isCommercial]);


return (
<section id="pricing" className="py-16 bg-white">
<Container>
<SectionTitle kicker="Pricing" sub="Transparent rates. Final quotes depend on size, condition, and frequency.">Simple, upfront rates</SectionTitle>
<div className="flex items-center justify-center gap-3 mb-6 text-sm">
<span className={!isCommercial ? "font-semibold" : "text-muted-foreground"}>Residential</span>
<Switch checked={isCommercial} onCheckedChange={setIsCommercial} />
<span className={isCommercial ? "font-semibold" : "text-muted-foreground"}>Commercial</span>
</div>
<div className="grid md:grid-cols-3 gap-6">
{displayPlans.map((plan) => (
<PriceCard key={plan.name} plan={plan} onOpenBooking={onOpenBooking} />
))}
</div>
<p className="text-center text-sm text-muted-foreground mt-4">Ask about discounts for weekly/bi-weekly service.</p>
</Container>
</section>
);
};