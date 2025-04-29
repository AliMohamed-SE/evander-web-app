"use client";
import React, { useEffect, useState } from "react";
import Section from "../shared/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import categories from "@/data/categories";
import projects from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";
import services from "@/data/services";

const PortfolioPage = () => {
  const [selectedTab, setSelectedTab] = useState("All Projects");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  console.log(selectedTab);

  useEffect(() => {
    const selectedService = services.find(
      (service) => service.type === selectedTab
    );

    const filtered =
      selectedTab === "All Projects"
        ? projects
        : projects.filter((project) =>
            project.services.some((service) =>
              selectedService?.values.includes(service)
            )
          );

    setFilteredProjects(filtered);
  }, [selectedTab]);

  return (
    <Section>
      <div className="text-center flex flex-col gap-2 mb-8 xl:mb-16">
        <h1 className="text-primary font-semibold text-xs xl:text-[16px]">
          Our Portfolio
        </h1>
        <h2 className="text-2xl md:text-4xl xl:text-5xl">
          Our Work. Your Growth.
        </h2>
        <p className="text-xs md:text-[16px] xl:text-[20px]">
          We design brands and develop websites that make an impact. See what
          we’ve built.
        </p>
      </div>
      <Tabs
        defaultValue="All Projects"
        className="w-full flex flex-col items-center mx-auto gap-8"
      >
        <TabsList>
          {categories.map(({ label, icon }) => (
            <TabsTrigger
              key={label}
              value={label}
              onClick={() => setSelectedTab(label)}
            >
              {icon} <div className="hidden md:block">{label}</div>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map(({ label }) => (
          <TabsContent key={label} value={label}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 gap-10 p-4">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} type="primary" />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
};

export default PortfolioPage;
