import React from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { FAQS } from "../lib/constants";


export const FAQSection: React.FC = () => (
<section id="faq" className="py-16 bg-emerald-50/60">
<Container>
<SectionTitle kicker="FAQ">Questions, answered</SectionTitle>
<Accordion className="max-w-3xl mx-auto">
{FAQS.map((f, idx) => (
<AccordionItem key={idx} value={`item-${idx}`}>
<AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
<AccordionContent>{f.a}</AccordionContent>
</AccordionItem>
))}
</Accordion>
</Container>
</section>
);