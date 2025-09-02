import React from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";


const StepCard: React.FC<{ step: number; title: string; desc: string }> = ({ step, title, desc }) => (
<div className="relative p-6 rounded-2xl border bg-white">
<div className="absolute -top-3 left-6 h-6 px-2 rounded-md bg-emerald-600 text-white text-xs font-bold grid place-items-center">{step}</div>
<h3 className="font-semibold text-lg mb-1">{title}</h3>
<p className="text-muted-foreground text-sm">{desc}</p>
</div>
);


export const ProcessSection: React.FC = () => (
<section className="py-16 bg-emerald-50/60">
<Container>
<SectionTitle kicker="How it works">3 simple steps</SectionTitle>
<div className="grid md:grid-cols-3 gap-6">
<StepCard step={1} title="Book" desc="Tell us your space, preferences, and schedule." />
<StepCard step={2} title="We Clean" desc="A vetted pro arrives with supplies and a checklist." />
<StepCard step={3} title="Relax" desc="Enjoy a fresh, spotless space. Set recurring if you like." />
</div>
</Container>
</section>
);