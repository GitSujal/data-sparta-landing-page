import React, { useState } from "react";
import { LucideIcon } from "lucide-react";
import { Dialog } from "@headlessui/react";

interface TimelineStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  position: "left" | "right";
  isLast?: boolean;
}

export function TimelineStep({ title, description, icon: Icon, position, isLast }: TimelineStepProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute top-1/2 w-full h-0.5 bg-gray-200 transform -translate-y-1/2" />
        )}
        
        {/* Content */}
        <div 
          className={`relative flex ${position === "left" ? "justify-start" : "justify-end"} group cursor-pointer`}
          onClick={() => setIsOpen(true)}
        >
          <div className="w-80 transition-all transform group-hover:-translate-y-1">
            <div className="bg-white p-6 rounded-lg shadow-lg group-hover:shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded-lg bg-white p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <Icon className="h-6 w-6" />
              </div>
              <Dialog.Title className="text-xl font-semibold text-gray-900">
                {title}
              </Dialog.Title>
            </div>
            
            <Dialog.Description className="text-gray-500">
              {description}
            </Dialog.Description>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}