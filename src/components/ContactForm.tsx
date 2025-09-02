import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MapPin } from "./icons";
import { COMPANY } from "../lib/constants";


export const ContactForm: React.FC = () => {
const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setStatus("sending");
setTimeout(() => setStatus("sent"), 800);
};


return (
<form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
<Input placeholder="Full name" required />
<Input placeholder="Email" type="email" required />
<Input placeholder="Phone" required />
<Input placeholder="Address (optional)" className="md:col-span-2" />
<Input placeholder="Preferred date (optional)" type="date" />
<Input placeholder="Service type (e.g., Deep Clean)" />
<Textarea placeholder="Tell us about your space…" className="md:col-span-2" rows={5} />
<div className="md:col-span-2 flex items-center justify-between">
<div className="text-xs text-muted-foreground flex items-center gap-2">
<MapPin className="h-4 w-4" /> {COMPANY.cityService}
</div>
<Button type="submit" disabled={status !== "idle"}>
{status === "idle" && "Send message"}
{status === "sending" && "Sending…"}
{status === "sent" && "Sent!"}
</Button>
</div>
{status === "sent" && (
<p className="md:col-span-2 text-sm text-emerald-700">Thanks! We’ll get back to you shortly.</p>
)}
</form>
);
};