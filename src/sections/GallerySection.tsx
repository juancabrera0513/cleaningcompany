import React, { Fragment } from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";


export const GallerySection: React.FC = () => (
<section className="py-16 bg-white">
<Container>
<SectionTitle kicker="Results">Before & after</SectionTitle>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
{[1,2,3,4].map((n) => (
<Fragment key={n}>
<img src={`/images/gallery/before-0${n}.jpg`} alt={`Before ${n}`} className="aspect-[4/3] w-full rounded-xl object-cover" />
<img src={`/images/gallery/after-0${n}.jpg`} alt={`After ${n}`} className="aspect-[4/3] w-full rounded-xl object-cover" />
</Fragment>
))}
</div>
<p className="text-center text-xs text-muted-foreground mt-3">Replace placeholders with your own photos.</p>
</Container>
</section>
);