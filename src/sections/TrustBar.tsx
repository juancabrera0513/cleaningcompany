import React from "react";
import { Container } from "../components/Container";


export const TrustBar: React.FC = () => (
<section className="py-8 border-y bg-white">
<Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground text-sm">
<img src="/images/badges/badge-google-5star.png" alt="Google 5-Star Rated" className="h-6"/>
<img src="/images/badges/badge-bbb-accredited.png" alt="BBB Accredited" className="h-6"/>
<img src="/images/badges/badge-licensed-insured.jpg" alt="Licensed & Insured" className="h-6"/>
</Container>
</section>
);