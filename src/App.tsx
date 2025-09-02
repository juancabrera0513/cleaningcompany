import { useState } from "react";
import { Header } from "./components/Header";
import { StickyCTA } from "./components/StickyCTA";
import { Hero } from "./sections/Hero";
import { TrustBar } from "./sections/TrustBar";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { PricingSection } from "./sections/PricingSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { GallerySection } from "./sections/GallerySection";
import { FAQSection } from "./sections/FAQSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";
import { BookingDialog } from "./modules/BookingDialog";


export default function App() {
const [bookingOpen, setBookingOpen] = useState(false);
const openBooking = () => setBookingOpen(true);


return (
<div className="min-h-screen bg-white text-foreground">
<Header onOpenBooking={openBooking} />
<main>
<Hero onOpenBooking={openBooking} />
<TrustBar />
<ServicesSection onOpenBooking={openBooking} />
<ProcessSection />
<PricingSection onOpenBooking={openBooking} />
<TestimonialsSection />
<GallerySection />
<FAQSection />
<ContactSection />
</main>
<Footer />
<StickyCTA onOpenBooking={openBooking} />
<BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
</div>
);
}