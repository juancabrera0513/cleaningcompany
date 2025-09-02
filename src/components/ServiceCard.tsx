import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2 } from "./icons";
import type { IconType } from "./icons";

export type ServiceCardProps = {
  icon: IconType;
  title: string;
  desc: string;
  features: readonly string[];
  onOpenBooking: () => void;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon, title, desc, features, onOpenBooking,
}) => (
  <Card className="h-full">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-emerald-100 grid place-items-center text-emerald-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <CardTitle className="mb-1">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" /> {f}
          </li>
        ))}
      </ul>
      <Button variant="secondary" className="mt-4 w-full" onClick={onOpenBooking}>
        Get quote
      </Button>
    </CardContent>
  </Card>
);
