import React from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { CalendarDays, ArrowRight, Star } from "../components/icons";
import { Button } from "../components/ui/button";


export const Hero: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => (
<section id="home" className="relative overflow-hidden pt-28 sm:pt-36 pb-16 bg-gradient-to-b from-emerald-50 to-white">
<Container className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl font-extrabold tracking-tight">
Come home to <span className="text-emerald-600">sparkling clean</span>
</motion.h1>
<p className="mt-4 text-lg text-muted-foreground max-w-xl">
Reliable residential & commercial cleaning in St. Louis. Eco-friendly options, flexible scheduling, and vetted pros you can trust.
</p>
<ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
{["Background-checked cleaners", "On-time guarantee", "Insured & bonded", "Satisfaction guaranteed"].map((text) => (
<li key={text} className="flex items-center gap-2">
<Star className="h-5 w-5" />
<span className="text-sm font-medium">{text}</span>
</li>
))}
</ul>
<div className="mt-7 flex flex-wrap items-center gap-3">
<Button size="lg" onClick={onOpenBooking} className="inline-flex items-center gap-2">
<CalendarDays className="h-5 w-5" /> Get free quote
</Button>
<a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold">
See services <ArrowRight className="h-4 w-4" />
</a>
</div>
<div className="mt-6 flex items-center gap-6 text-sm">
<div className="flex items-center gap-1">
{Array.from({ length: 5 }).map((_, i) => (
<Star key={i} className="h-4 w-4" />
))}
</div>
<span className="text-muted-foreground">Rated 5.0 from 120+ local clients</span>
</div>
</div>
<motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="relative">
<div className="aspect-[4/3] w-full rounded-3xl shadow-inner overflow-hidden bg-emerald-100/60">
<img src="/images/hero/hero-clean-living-room.webp" alt="Freshly cleaned modern living room" className="h-full w-full object-cover" />
</div>
<img src="/images/team/crew-smiling.jpg" alt="ShinePro Cleaning team" className="absolute -bottom-6 -left-6 h-24 w-24 object-cover rounded-xl shadow-lg" />
</motion.div>
</Container>
</section>
);