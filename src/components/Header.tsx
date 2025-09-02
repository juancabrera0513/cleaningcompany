import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import { Sparkles, Phone } from "./icons";
import { Button } from "./ui/button";
import { COMPANY } from "../lib/constants";


export const Header: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 12);
onScroll();
window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, []);


const nav = [
{ label: "Services", href: "#services" },
{ label: "Pricing", href: "#pricing" },
{ label: "Reviews", href: "#reviews" },
{ label: "FAQ", href: "#faq" },
{ label: "Contact", href: "#contact" },
];


return (
<header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/90 backdrop-blur shadow" : "bg-transparent"}`}>
<Container className="flex items-center justify-between py-3">
<a href="#home" className="flex items-center gap-2">
<div className="h-9 w-9 rounded-2xl bg-emerald-600 grid place-items-center text-white">
<Sparkles className="h-5 w-5" />
</div>
<span className="font-bold text-lg tracking-tight">{COMPANY.name}</span>
</a>
<nav className="hidden md:flex items-center gap-6">
{nav.map((n) => (
<a key={n.label} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
{n.label}
</a>
))}
</nav>
<div className="hidden md:flex items-center gap-3">
<a href={`tel:${COMPANY.phoneHref}`} className="inline-flex items-center gap-2 text-sm font-semibold">
<Phone className="h-4 w-4" /> {COMPANY.phone}
</a>
<Button onClick={onOpenBooking}>Book now</Button>
</div>
<a href={`tel:${COMPANY.phoneHref}`} className="md:hidden inline-flex items-center gap-2 text-sm font-semibold">
<Phone className="h-4 w-4" /> Call
</a>
</Container>
</header>
);
};