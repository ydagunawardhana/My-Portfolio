import Image from "next/image";
import { ExternalLink, Github, LayoutDashboard } from "lucide-react";

import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import Tag from "@/components/data-display/tag";
import Card from "@/components/layout/card";
import ProjectSlider from "@/components/data-display/project-slider";

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: "default" | "reverse";
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  githubUrl,
  adminUrl,
  images,
  layoutType = "default",
}: ProjectDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          "flex flex-col overflow-hidden border-gray-100 bg-gray-50 dark:bg-gray-200 md:w-1/2",
          layoutType === "default"
            ? "max-md:rounded-t-xl md:rounded-l-xl md:border-r"
            : "max-md:rounded-t-xl md:order-last md:rounded-r-xl md:border-l",
        )}
      >
        <Link
          noCustomization
          href={url}
          externalLink
          className="relative block h-64 w-full transition-transform duration-500 md:h-full md:hover:scale-105"
        >
          <ProjectSlider images={images} name={name} />
        </Link>
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          "flex flex-col gap-6 p-8 md:w-1/2 lg:p-12",
          layoutType === "default" ? "" : "md:order-first",
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography className="text-justify">{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        <div className="flex gap-4 self-start">
          <Link
            href={url}
            noCustomization
            className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
            externalLink
            title="Live User App"
          >
            <ExternalLink />
          </Link>
          {adminUrl && (
            <Link
              href={adminUrl}
              noCustomization
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
              externalLink
              title="Admin Dashboard"
            >
              <LayoutDashboard size={24} />
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              noCustomization
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
              externalLink
              title="Source Code"
            >
              <Github size={24} />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;
