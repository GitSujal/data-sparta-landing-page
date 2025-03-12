import React from "react";
import { packageSelectionGuide } from "../../../data/trainingPackages";

export function PackageSelection() {
  return (
    <div className="bg-content2 rounded-lg p-6">
      <h3 className="text-xl font-bold text-foreground mb-4">Package Selection Guide</h3>
      <div className="space-y-4">
        {packageSelectionGuide.map((guide, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-1">
              <p className="font-medium text-foreground">{guide.condition}</p>
              <p className="text-foreground/60">{guide.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-foreground/60">
        Contact us to customize any package for your organization's specific needs.
      </p>
    </div>
  );
}