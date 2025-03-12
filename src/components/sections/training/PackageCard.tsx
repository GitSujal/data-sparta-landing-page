import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { CheckCircle, DivideIcon as LucideIcon } from "lucide-react";

interface Format {
  type: string;
  icon: LucideIcon;
}

interface PackageCardProps {
  name: string;
  tagline: string;
  icon: LucideIcon;
  formats: Format[];
  includes: string[];
  perfectFor: string[];
  learningOutcomes: string[];
  deliverables: string[];
}

export function PackageCard({
  name,
  tagline,
  icon: Icon,
  formats,
  includes,
  perfectFor,
  learningOutcomes,
  deliverables
}: PackageCardProps) {
  return (
    <Card className="bg-content1">
      <CardHeader className="flex gap-3 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-foreground/60">{tagline}</p>
        </div>
      </CardHeader>
      <CardBody className="px-6 py-4">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Available Formats:</h4>
            <div className="flex gap-4">
              {formats.map((format, index) => {
                const FormatIcon = format.icon;
                return (
                  <div key={index} className="flex items-center gap-1 text-foreground/60">
                    <FormatIcon className="h-4 w-4" />
                    <span>{format.type}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
            <ul className="space-y-2">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-foreground/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Perfect for:</h4>
            <ul className="space-y-2">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-foreground/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Learning Outcomes:</h4>
            <ul className="space-y-2">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-foreground/60">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Deliverables:</h4>
            <ul className="space-y-2">
              {deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-foreground/60">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}