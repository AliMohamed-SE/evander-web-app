import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, SquarePen } from "lucide-react";
import { Project } from "@/data/projects";
import EvanderButton from "../shared/EvanderButton";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const ProjectCard = ({
  index,
  project,
  type,
}: {
  index: number;
  project: Project;
  type?: string;
}) => {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      passHref
      className={`shadow-primary shadow-[0_0_5px_2px] hover:scale-95 transition-all duration-300 w-full p-4 border ${
        type === "primary" ? "md:border-primary" : "md:border-secondary"
      } rounded-xl cursor-pointer`}
    >
      <Card className="flex flex-col gap-2 bg-transparent border-0 p-0">
        <CardHeader className={`flex gap-2 p-0 text-primary`}>
          <div className="relative w-full aspect-3/4 overflow-hidden rounded-2xl">
            <Image
              src={project.thumbnail}
              alt="ProjectImage"
              fill
              className="object-cover"
            />
          </div>
          <CardTitle className="text-[16px] text-white">
            {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent className={`p-0 flex justify-between items-center w-full`}>
          <div className="flex gap-2 flex-wrap">
            {project.services.map((service, index) => (
              <span
                key={index}
                className={`text-xs font-semibold ${
                  type === "primary" ? "bg-primary" : "bg-gray-600"
                } text-gray-200 px-3 py-2 rounded-full`}
              >
                {service}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
