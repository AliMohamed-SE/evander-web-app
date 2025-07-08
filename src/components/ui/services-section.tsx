"use client";
import { serviceDetails } from "@/data/services";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";

// Type for serviceDetails item
interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  details: {
    overview: string;
    includes: string[];
    technologies: string[];
    timeline: string;
    addons?: string[];
  };
}

export function ServicesSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ServiceDetail | null>(null);

  const handleOpen = (service: ServiceDetail) => {
    setSelected(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl shadow-xl overflow-hidden">
        {serviceDetails.map((service: ServiceDetail, index: number) => (
          <ServiceCard
            key={service.title}
            {...service}
            index={index}
            onClick={() => handleOpen(service)}
          />
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">{selected.icon}</span>
                  <DialogTitle className="text-2xl">
                    {selected.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="mb-4 text-base text-gray-600 dark:text-gray-300">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-primary">
                    Overview
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    {selected.details.overview}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-primary">
                    What’s Included
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
                    {selected.details.includes.map(
                      (item: string, i: number) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-primary">
                      Technologies
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {selected.details.technologies.map(
                        (tech: string, i: number) => (
                          <li
                            key={i}
                            className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium"
                          >
                            {tech}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-primary">
                      Timeline
                    </h4>
                    <p className="text-gray-700 dark:text-gray-200">
                      {selected.details.timeline}
                    </p>
                  </div>
                </div>
                {selected.details.addons && (
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-primary">
                      Add-ons
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
                      {selected.details.addons.map(
                        (addon: string, i: number) => (
                          <li key={i}>{addon}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <DialogClose asChild>
                <a
                  href="/contact"
                  target="_blank"
                  className="mt-6 px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/80 transition-colors cursor-pointer w-full flex justify-center"
                >
                  Request Service
                </a>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

const ServiceCard = ({
  title,
  description,
  icon,
  category,
  index,
  onClick,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  index: number;
  onClick: () => void;
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development":
        return "from-blue-500 to-cyan-500";
      case "design":
        return "from-purple-500 to-pink-500";
      case "strategy":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col relative group/service hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer",
        "border-r border-b border-slate-200 dark:border-slate-600 last:border-r-0",
        index >= 4 && "border-b-0",
        (index + 1) % 4 === 0 && "lg:border-r-0"
      )}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-transparent dark:from-slate-700/50 opacity-0 group-hover/service:opacity-100 transition-opacity duration-300" />

      {/* Category indicator */}
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover/service:opacity-100 transition-opacity duration-300",
          getCategoryColor(category)
        )}
      />

      <div className="p-8 relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6 relative">
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg transform group-hover/service:scale-110 transition-transform duration-300",
              getCategoryColor(category)
            )}
          >
            <div className="w-6 h-6">{icon}</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3 group-hover/service:text-slate-900 dark:group-hover/service:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom accent */}
        <div
          className={cn(
            "mt-6 w-12 h-0.5 bg-gradient-to-r opacity-0 group-hover/service:opacity-100 transition-opacity duration-300",
            getCategoryColor(category)
          )}
        />
      </div>
    </div>
  );
};
