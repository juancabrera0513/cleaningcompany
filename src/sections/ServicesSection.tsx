import React from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ServiceCard } from "../components/ServiceCard";
import { SERVICES } from "../lib/constants";


export const ServicesSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => (
<section id="services" className="py-16 bg-white">
<Container>
<SectionTitle kicker="Services" sub="Pick a service or ask for a tailored plan.">What we clean</SectionTitle>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{SERVICES.map((s) => (
<ServiceCard key={s.title} {...s} onOpenBooking={onOpenBooking} />
))}
</div>
</Container>
</section>
);