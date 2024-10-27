import React from "react";
import { Card, CardBody, CardHeader, Divider, Chip } from "@nextui-org/react";
import { LucideIcon } from "lucide-react";

interface CaseStudyCardProps {
  id: string;
  industry: string;
  companySize: string;
  location: string;
  title: string;
  description: string;
  image: string;
  challenges: string[];
  solution: string[];
  results: string[];
  icon: LucideIcon;
}

export function CaseStudyCard({
  title,
  industry,
  companySize,
  location,
  description,
  image,
  challenges,
  solution,
  results,
  icon: Icon,
}: CaseStudyCardProps) {
  return (
    <Card className="bg-card">
      <CardHeader className="relative p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Icon className="h-12 w-12 text-white" />
        </div>
      </CardHeader>
      <CardBody className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip size="sm" className="bg-primary/10 text-primary">
            {industry}
          </Chip>
          <Chip size="sm" variant="flat" className="text-secondary-content">
            {location}
          </Chip>
        </div>
        
        <h3 className="text-xl font-bold text-primary-content mb-2">{title}</h3>
        <p className="text-secondary-content text-sm mb-4">{description}</p>
        
        <Divider className="my-4" />
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-primary-content mb-2">Challenges</h4>
            <ul className="list-disc list-inside text-sm text-secondary-content space-y-1">
              {challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary-content mb-2">Solution</h4>
            <ul className="list-disc list-inside text-sm text-secondary-content space-y-1">
              {solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary-content mb-2">Results</h4>
            <ul className="list-disc list-inside text-sm text-secondary-content space-y-1">
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}