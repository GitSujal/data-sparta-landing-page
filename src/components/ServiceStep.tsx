import React from "react";
import { Card, CardBody, CardHeader, Divider, Chip } from "@nextui-org/react";
import { LucideIcon } from "lucide-react";

interface ServiceStepProps {
  step: {
    title: string;
    icon: LucideIcon;
    description: string;
    details: string[];
  };
  index: number;
}

export function ServiceStep({ step, index }: ServiceStepProps) {
  return (
    <Card className="w-full bg-content1">
      <CardHeader className="flex gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
          <step.icon className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <p className="text-md font-semibold text-foreground/80">Step {index + 1}</p>
          <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
        </div>
      </CardHeader>
      <Divider className="bg-divider" />
      <CardBody>
        <p className="text-foreground/80 mb-4">{step.description}</p>
        <div className="flex flex-wrap gap-2">
          {step.details.map((detail, i) => (
            <Chip
              key={i}
              variant="flat"
              className="bg-primary/10 text-primary"
            >
              {detail}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}