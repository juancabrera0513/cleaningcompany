import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";


export const BookingDialog: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void }> = ({ open, onOpenChange }) => {
const [submitted, setSubmitted] = useState(false);
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true); };


return (
<Dialog open={open} onOpenChange={onOpenChange}>
<DialogContent>
<DialogHeader>
<DialogTitle>Book your cleaning</DialogTitle>
</DialogHeader>
{!submitted ? (
<form onSubmit={handleSubmit} className="space-y-3">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<Input placeholder="Full name" required />
<Input placeholder="Email" type="email" required />
<Input placeholder="Phone" required />
<Input placeholder="City" />
<Input placeholder="Date" type="date" />
<Input placeholder="Time" type="time" />
</div>
<Input placeholder="Service (e.g., Deep Clean)" />
<Textarea placeholder="Notes (pets, parking, preferences)…" rows={4} />
<div className="flex items-center justify-end gap-3">
<Button variant="ghost" type="button" onClick={() => onOpenChange(false)}>Cancel</Button>
<Button type="submit">Request booking</Button>
</div>
</form>
) : (
<div className="space-y-2">
<h4 className="font-semibold">Thanks!</h4>
<p className="text-sm text-muted-foreground">We’ll confirm the details by email/text shortly.</p>
<div className="flex justify-end">
<Button onClick={() => onOpenChange(false)}>Done</Button>
</div>
</div>
)}
</DialogContent>
</Dialog>
);
};