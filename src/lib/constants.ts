import type { IconType } from "../components/icons";
import { Broom, SprayCan, Home, Building2, Leaf } from "../components/icons";

export type Plan = {
  name: string;
  price: number;
  cadence: string;
  tagline: string;
  features: readonly string[];
  best: boolean;
};

export type ServiceItem = {
  icon: IconType;
  title: string;
  desc: string;
  features: readonly string[];
};

export const COMMERCIAL_MULTIPLIER = 1.25;
export const priceForCommercial = (price: number) =>
  Math.round(price * COMMERCIAL_MULTIPLIER);

export const COMPANY = {
  name: "ShinePro Cleaning",
  phone: "+1 (123) 456-7890",
  phoneHref: "+13142827888",
  email: "hello@shinepro.com",
  addressShort: "Clean place., St. Louis, MO",
  hours: "Mon–Sat 8am–6pm",
  cityService: "St. Louis & nearby areas",
};

export const SERVICES = [
  {
    icon: Broom,
    title: "Standard Home Cleaning",
    desc: "Recurring maintenance for sparkling kitchens, bathrooms, and living spaces.",
    features: ["Kitchen & bathrooms", "Dusting & surfaces", "Floors vacuum & mop", "Trash removal"],
  },
  {
    icon: SprayCan,
    title: "Deep Cleaning",
    desc: "Top-to-bottom detail clean ideal for first-time or seasonal resets.",
    features: ["Baseboards & detail", "Inside cabinets (as needed)", "Grout & fixtures", "Appliance exteriors"],
  },
  {
    icon: Home,
    title: "Move-In / Move-Out",
    desc: "Prepare properties for their next chapter with a thorough turnover clean.",
    features: ["Inside/Outside cabinets", "Inside fridge/oven (add-on)", "Walls spot-clean", "Closets & shelves"],
  },
  {
    icon: Building2,
    title: "Office & Commercial",
    desc: "Flexible schedules for offices, studios, and retail spaces.",
    features: ["Desks & common areas", "Bathrooms & breakrooms", "Floors & entryways", "Trash & recycling"],
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    desc: "Green products by request—great for homes with kids & pets.",
    features: ["Plant-based cleaners", "Fragrance-free on request", "HEPA vacuuming", "Microfiber system"],
  },
] satisfies readonly ServiceItem[];

export const PLANS = [
  {
    name: "Basic Sparkle",
    price: 99,
    cadence: "per visit",
    tagline: "Studio/1BR (up to ~700 sq ft)",
    features: ["Kitchen & bath", "Dusting", "Floors", "Surfaces", "Trash removal"],
    best: false,
  },
  {
    name: "Deep Refresh",
    price: 219,
    cadence: "per visit",
    tagline: "Detailed top-to-bottom",
    features: ["Baseboards", "Fixtures & grout", "Inside cabinets (select)", "Appliance exteriors", "Detail dusting"],
    best: true,
  },
  {
    name: "Move In/Out",
    price: 299,
    cadence: "per visit",
    tagline: "Turnover-ready finish",
    features: ["Cabinets in/out", "Closets & shelves", "Spot walls", "Kitchen + bath detail", "Floors & windowsills"],
    best: false,
  },
] satisfies readonly Plan[];

export const TESTIMONIALS = [
  { name: "Alex P.", role: "Homeowner in St. Louis", quote: "They were on time, friendly, and left our place immaculate. Booking was super easy!", stars: 5, photo: "/images/testimonials/alex-p.jpg" },
  { name: "Gina R.", role: "Property Manager", quote: "Our move-out turnovers have never been smoother. Reliable and thorough every single time.", stars: 5, photo: "/images/testimonials/gina-r.jpg" },
  { name: "Marcus D.", role: "Studio Owner", quote: "Great commercial service—our clients always walk into a fresh, clean space.", stars: 5, photo: "/images/testimonials/marcus-d.jpg" },
] as const;

export const FAQS = [
  { q: "Do you bring supplies and equipment?", a: "Yes. We bring all standard supplies and equipment. If you prefer eco-only products or have special requests, let us know at booking." },
  { q: "Are you insured and background-checked?", a: "Absolutely. Our cleaners are background-checked, and we maintain active insurance for your peace of mind." },
  { q: "What’s your cancellation policy?", a: "You can cancel or reschedule up to 24 hours in advance with no fee. Same-day cancellations may incur a small fee." },
  { q: "Do I need to be home?", a: "Not necessarily. Many clients provide access instructions. Your home is locked and secured after service." },
] as const;
