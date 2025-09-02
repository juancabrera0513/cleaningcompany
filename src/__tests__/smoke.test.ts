import { describe, it, expect } from "vitest";
import { SERVICES, PLANS, priceForCommercial, COMMERCIAL_MULTIPLIER } from "../lib/constants";


// No DOM required


describe("constants", () => {
it("has at least 3 services", () => {
expect(Array.isArray(SERVICES)).toBe(true);
expect(SERVICES.length).toBeGreaterThanOrEqual(3);
});
it("has at least 3 plans", () => {
expect(Array.isArray(PLANS)).toBe(true);
expect(PLANS.length).toBeGreaterThanOrEqual(3);
});
it("commercial multiplier helper works", () => {
expect(priceForCommercial(100)).toBe(Math.round(100 * COMMERCIAL_MULTIPLIER));
});
it("mapped commercial prices are finite numbers", () => {
const commercial = PLANS.map(p => priceForCommercial(p.price));
expect(commercial.every(Number.isFinite)).toBe(true);
});
});