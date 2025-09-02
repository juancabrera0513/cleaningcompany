import React from "react";
import { Container } from "../components/Container";
import { COMPANY } from "../lib/constants";


export const Footer: React.FC = () => (
<footer className="border-t bg-white">
<Container className="py-12 grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-3">
<img src="/images/brand/logo-shinepro.webp" alt={COMPANY.name} className="h-9 w-9 rounded-2xl" />
<span className="font-bold">{COMPANY.name}</span>
</div>
<p className="text-sm text-muted-foreground max-w-md">Friendly, insured cleaners delivering spotless homes and stress-free offices across St. Louis.</p>
</div>
<div>
<p className="font-semibold mb-2">Company</p>
<ul className="space-y-2 text-sm text-muted-foreground">
<li><a href="#services">Services</a></li>
<li><a href="#pricing">Pricing</a></li>
<li><a href="#reviews">Reviews</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</div>
<div>
<p className="font-semibold mb-2">Contact</p>
<ul className="space-y-2 text-sm text-muted-foreground">
<li>{COMPANY.phone}</li>
<li>{COMPANY.email}</li>
<li>{COMPANY.addressShort}</li>
</ul>
</div>
</Container>
<div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
</footer>
);