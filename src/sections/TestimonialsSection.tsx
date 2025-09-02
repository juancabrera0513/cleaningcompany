import React from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { StarRow } from "../components/StarRow";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { TESTIMONIALS } from "../lib/constants";


const TestimonialCard: React.FC<{ name: string; role: string; quote: string; stars: number; photo?: string }> = ({ name, role, quote, stars, photo }) => (
<Card className="h-full">
<CardHeader className="space-y-1">
<StarRow n={stars} />
<div className="flex items-center gap-3">
{photo && <img src={photo} alt={`${name} portrait`} className="h-8 w-8 rounded-full object-cover" />}
<div>
<CardTitle className="text-base">{name}</CardTitle>
<p className="text-xs text-muted-foreground">{role}</p>
</div>
</div>
</CardHeader>
<CardContent>
<p className="text-sm text-muted-foreground">“{quote}”</p>
</CardContent>
</Card>
);


export const TestimonialsSection: React.FC = () => (
<section id="reviews" className="py-16 bg-emerald-50/60">
<Container>
<SectionTitle kicker="Reviews">Clients love the shine</SectionTitle>
<div className="grid md:grid-cols-3 gap-6">
{TESTIMONIALS.map((t, i) => (
<div key={t.name} className="opacity-0 translate-y-2 animate-[fadeInUp_0.4s_ease_forwards] [animation-delay:var(--d)]" style={{ ['--d' as any]: `${i * 80}ms` }}>
<TestimonialCard {...t} />
</div>
))}
</div>
</Container>
</section>
);