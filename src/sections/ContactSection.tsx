import React from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ContactForm } from "../components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Phone, Mail, MapPin, Clock } from "../components/icons";
import { COMPANY } from "../lib/constants";


export const ContactSection: React.FC = () => (
<section id="contact" className="py-16 bg-white">
<Container>
<SectionTitle kicker="Contact" sub="Prefer a quick call or WhatsApp? We’re happy to help.">Get a free quote</SectionTitle>
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<Card>
<CardHeader>
<CardTitle>Tell us about your space</CardTitle>
</CardHeader>
<CardContent>
<ContactForm />
</CardContent>
</Card>
</div>
<div className="space-y-4">
<Card>
<CardContent className="p-6 space-y-3 text-sm">
<a href={`tel:${COMPANY.phoneHref}`} className="flex items-center gap-2 font-medium"><Phone className="h-4 w-4"/> {COMPANY.phone}</a>
<a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2"><Mail className="h-4 w-4"/> {COMPANY.email}</a>
<div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {COMPANY.addressShort}</div>
<div className="flex items-center gap-2"><Clock className="h-4 w-4"/> {COMPANY.hours}</div>
</CardContent>
</Card>
<Card>
<CardContent className="p-6 text-sm text-muted-foreground">
<p className="mb-2 font-medium text-foreground">Insurance & Guarantee</p>
We’re insured and bonded. If something’s not right, we’ll make it right—just let us know within 24 hours.
</CardContent>
</Card>
</div>
</div>
</Container>
</section>
);