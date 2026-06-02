import * as React from 'react';
import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData | React.ElementType;
  darkModeLogo?: string | StaticImageData | React.ElementType;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData | React.ElementType;
  darkModeLogo?: string | StaticImageData | React.ElementType;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  githubUrl?: string;
  previewImage?: string | StaticImageData;
  images?: string[];
  technologies: string[];
};

export type CertificationDetails = {
  title: string;
  institutionDate: string;
};
