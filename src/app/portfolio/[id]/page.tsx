import EvanderButton from "@/components/shared/EvanderButton";
import Section from "@/components/shared/Section";
import { getProjectById } from "@/data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProjectPageProps = Promise<{ id: string }>;

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const { id } = await params;
//   const project = await getProjectById(Number(id));

//   if (!project) {
//     return {
//       title: "Project Not Found",
//     };
//   }

//   return {
//     title: project.name,
//     description: project.description,
//   };
// }

const ProjectPage = async ({ params }: { params: ProjectPageProps }) => {
  const { id } = await params;

  try {
    const project = await getProjectById(Number(id));

    if (!project) {
      notFound();
    }

    return (
      <div className="space-y-8">
        <Section className="mb-0 pb-0">
          <div className="mb-8">
            <div className="flex gap-8 mb-8 xl:flex-row xl:items-center flex-col">
              <h1 className="font-semibold text-5xl">{project.name}</h1>
              {project.site && (
                <EvanderButton
                  variant="primary"
                  label="View Live"
                  iconAfter={<ArrowUpRight size={20} />}
                  className="bg-gradient-to-r from-[#131531] to-primary border border-primary rounded-lg text-white py-2 px-4 flex justify-center items-center"
                  link={project.site}
                  target="_blank"
                />
              )}
            </div>
            <div className="xl:grid xl:grid-cols-[2fr_1fr] gap-[110px] mb-8">
              <div className="mb-8 xl:mb-0">
                <p className="text-xl leading-[32px]">{project.description}</p>
                {project.audience && (
                  <div className="flex gap-8 flex-col xl:flex-row mt-5">
                    <h3 className="text-xl font-bold text-nowrap">
                      Target Audience
                    </h3>
                    <p className="text-xl">{project.audience}</p>
                  </div>
                )}
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-[32px] font-semibold leading-[40px]">
                    Services
                  </h3>
                  <div
                    className="flex flex-wrap items-center
                  "
                  >
                    {project.services.map((service, index) => (
                      <span key={service + index} className="text-md">
                        {service}
                        {index !== project.services.length - 1 && (
                          <span className="mx-2 text-secondary text-xl">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[32px] font-semibold leading-[40px]">
                    Date
                  </h3>
                  <span className="text-xl">{project.date}</span>
                </div>
              </div>
            </div>
            <EvanderButton
              variant="primary"
              label="Back to Projects"
              iconAfter={<ArrowRight size={20} />}
              className="bg-primary rounded-lg text-white py-4 px-5 flex justify-center items-center"
              link="/portfolio"
            />
          </div>
          {project.sections.map((section, index) => (
            <div key={index} className="space-y-8 mb-8">
              <div
                className={`${
                  (section.images?.length ?? 0) > 1
                    ? "xl:grid xl:grid-cols-2 xl:space-y-0 space-y-8"
                    : ""
                } gap-[40px]`}
              >
                {section.images?.map((image, index) => (
                  <div
                    key={image + index}
                    className={`${
                      (section.images?.length ?? 0) > 1
                        ? "aspect-[3/2]"
                        : "aspect-[32/10]"
                    } rounded-2xl overflow-hidden relative`}
                  >
                    <Image
                      src={image}
                      alt="Brand Image"
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>
                ))}
              </div>
              <div className="xl:grid xl:grid-cols-[1fr_6fr] xl:space-y-0 space-y-8">
                <h2 className="text-[32px] font-semibold leading-[40px]">
                  {section.subTitle}
                </h2>
                <p className="text-xl leading-[32px]">{section.title}</p>
              </div>
            </div>
          ))}
        </Section>
      </div>
    );
  } catch {
    notFound();
  }
};

export default ProjectPage;
