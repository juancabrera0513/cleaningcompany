import React from "react";

export type IconProps = { className?: string };
export type IconType = React.ComponentType<IconProps>;

const makeEmoji = (aria: string, char: string): IconType =>
  ({ className = "" }: IconProps) =>
    <span className={className} role="img" aria-label={aria}>{char}</span>;

export const Phone: IconType = makeEmoji("phone", "📞");
export const Sparkles: IconType = makeEmoji("sparkles", "✨");
export const CheckCircle2: IconType = makeEmoji("check", "✅");
export const Clock: IconType = makeEmoji("clock", "⏰");
export const ShieldCheck: IconType = makeEmoji("shield", "🛡️");
export const BadgeCheck: IconType = makeEmoji("badge", "🏅");
export const MapPin: IconType = makeEmoji("pin", "📍");
export const Mail: IconType = makeEmoji("mail", "✉️");
export const Star: IconType = makeEmoji("star", "⭐");
export const Home: IconType = makeEmoji("home", "🏠");
export const Building2: IconType = makeEmoji("building", "🏢");
export const Leaf: IconType = makeEmoji("leaf", "🍃");
export const Broom: IconType = makeEmoji("broom", "🧹");
export const SprayCan: IconType = makeEmoji("spray", "🧴");
export const CalendarDays: IconType = makeEmoji("calendar", "📅");
export const ArrowRight: IconType = makeEmoji("arrow right", "➡️");
