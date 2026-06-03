import * as React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import Logopython from "/public/images/logos/python.svg";
import Logodart from "/public/images/logos/dart.svg";
import Logocsharp from "/public/images/logos/c-sharp.svg";
import Logomatlab from "/public/images/logos/matlab.svg";
import Logojava from "/public/images/logos/java.svg";
import Logoflutter from "/public/images/logos/flutter.svg";
import Logothreejs from "/public/images/logos/threejs.svg";
import Logofastapi from "/public/images/logos/fastapi.svg";
import Logofirebase from "../../public/images/logos/firebase.svg";
import Logosqlserver from "/public/images/logos/sqlserver.svg";
import LogoOpenCV from "../../public/images/logos/openCV.svg";
import Logodlib from "/public/images/logos/dlib.svg";
import LogoNvidia from "/public/images/logos/nvidia.svg";
import LogoPandas from "../../public/images/logos/pandas.svg";
import LogoPostman from "../../public/images/logos/postman.svg";
import Logogroq from "/public/images/logos/groq.svg";

import {
  TbBrain,
  TbCube,
  TbShoppingCart,
  TbMedicalCross,
} from "react-icons/tb";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  CertificationDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/ydagunawardhana",
  GITHUB_REPO: "https://github.com/ydagunawardhana/ydagunawardhana",
  TWITTER: "https://twitter.com",
  FIGMA: "https://www.figma.com",
  FIGMA_FILE: "https://www.figma.com",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Certifications",
    href: "#certifications",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/ydagunawardhana",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yashan-dinusha",
  },
  {
    icon: WhatsappIcon,
    url: "https://wa.me/94717321898",
  },
  {
    icon: Mail,
    url: "mailto:yashanydmdinusha@gmail.com?subject=Hello%20Yashan%20-%20Contact%20from%20Portfolio",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "JavaScript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "TypeScript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwind CSS",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Python",
    logo: Logopython,
    url: "https://www.python.org/",
  },
  {
    label: "Dart",
    logo: Logodart,
    url: "https://dart.dev/",
  },
  {
    label: "C#",
    logo: Logocsharp,
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    label: "MATLAB",
    logo: Logomatlab,
    url: "https://www.mathworks.com/products/matlab.html",
  },
  {
    label: "Java",
    logo: Logojava,
    url: "https://www.java.com/",
  },
  {
    label: "Flutter",
    logo: Logoflutter,
    url: "https://flutter.dev/",
  },
  {
    label: "Three.js",
    logo: Logothreejs,
    url: "https://threejs.org/",
  },
  {
    label: "FastAPI",
    logo: Logofastapi,
    url: "https://fastapi.tiangolo.com/",
  },
  {
    label: "Firebase",
    logo: Logofirebase,
    url: "https://firebase.google.com/",
  },
  {
    label: "SQL Server",
    logo: Logosqlserver,
    url: "https://www.microsoft.com/en-us/sql-server",
  },
  {
    label: "OpenCV",
    logo: LogoOpenCV,
    url: "https://opencv.org/",
  },
  {
    label: "Dlib",
    logo: Logodlib,
    url: "http://dlib.net/",
  },
  {
    label: "NVIDIA CUDA",
    logo: LogoNvidia,
    url: "https://developer.nvidia.com/cuda-zone",
  },
  {
    label: "Groq AI",
    logo: Logogroq,
    url: "https://groq.com/",
  },
  {
    label: "Pandas",
    logo: LogoPandas,
    url: "https://pandas.pydata.org/",
  },

  {
    label: "Postman",
    logo: LogoPostman,
    url: "https://www.postman.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: TbBrain,
    logoAlt: "UniPortal logo",
    position: "Advanced Face Recognition System (UniPortal)",
    startDate: new Date(2026, 3),
    currentlyWorkHere: true,
    summary: [
      "Engineered a high-precision biometric attendance pipeline achieving 90% accuracy using FaceNet, OpenCV, and Dlib.",
      "Developed a dual-stack architecture with React 18 and a FastAPI (Python) backend microservice.",
      "Accelerated facial recognition inference to under 20ms using NVIDIA CUDA and cuDNN.",
      "Integrated Groq API (Llama 3.1) to create a context-aware AI support assistant.",
    ],
  },
  {
    logo: TbCube,
    logoAlt: "Furnisy logo",
    position: "3D Furniture Room Designer (Furnisy)",
    startDate: new Date(2026, 2),
    endDate: new Date(2026, 4),
    summary: [
      "Built a modern, interactive e-commerce platform featuring a real-time 3D Room Designer.",
      "Utilized React.js, Vite, and React Three Fiber to render and manipulate 3D models seamlessly in the browser.",
      "Implemented secure user authentication and scalable database management using Firebase Auth and Firestore.",
      "Developed a dynamic administrative dashboard utilizing ApexCharts to track real-time revenue and orders.",
    ],
  },
  {
    logo: TbShoppingCart,
    logoAlt: "NexaMart logo",
    position: "E-Commerce Platform (NexaMart)",
    startDate: new Date(2026, 0),
    endDate: new Date(2026, 3),
    summary: [
      "Developed a comprehensive full-stack e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Integrated secure payment processing via Stripe and managed product media storage using Cloudinary.",
      "Implemented a robust dual-authentication system utilizing JSON Web Tokens (JWT) and Google Auth.",
      "Built a comprehensive admin dashboard for efficient inventory management, order tracking, and real-time sales monitoring.",
    ],
  },
  {
    logo: TbMedicalCross,
    logoAlt: "Medi Core logo",
    position: "Pharmacy Management System (Medi Core)",
    startDate: new Date(2025, 2),
    endDate: new Date(2025, 4),
    summary: [
      "Developed a complete pharmacy automation desktop application using C# Windows Forms and SQL Server.",
      "Streamlined core operations including real-time inventory management, prescription handling, and sales processing.",
      "Enhanced UI/UX by utilizing the Guna 2 UI Framework to create dashboards for Admin, Pharmacist, and Customer roles.",
      "Automated crucial tasks such as expiry date alerts and real-time billing calculations via ADO.NET database connectivity.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "UniPortal",
    description:
      "An advanced face recognition-based attendance system and student portal. It features a high-precision biometric pipeline and a context-aware AI support assistant for seamless student identification and interaction.",
    url: "#",
    githubUrl:
      "https://github.com/ydagunawardhana/Uni-Portal-Advanced-Face-Recognition-Attendance-System.git",
    images: [
      "/images/Landing Page.png",
      "/images/SignIn Page.png",
      "/images/Admin Dashboard.png",
      "/images/Lecturer Dashboard.png",
      "/images/Student Dashboard.png",
      "/images/Face Detection.png",
      "/images/Student Timetable Page.png",
      "/images/Student Profile.png",
    ],
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "OpenCV",
      "FaceNet",
      "Dlib",
      "NVIDIA CUDA",
      "Groq AI",
    ],
  },
  {
    name: "Furnisy",
    description:
      "A modern e-commerce platform integrated with a real-time 3D Room Designer. Users can interactively arrange furniture in a 3D space, supported by a scalable backend and a live admin dashboard.",
    url: "https://furnisy-room-designer-app.vercel.app/",
    githubUrl:
      "https://github.com/ydagunawardhana/Furnisy-Room-Designer-App.git",
    adminUrl: "https://furnisy-room-designer-app-admin.vercel.app/",
    images: [
      "/images/Homepage.png",
      "/images/Room_Designer.png",
      "/images/Product_popup.png",
      "/images/Admin_dashboard.png",
    ],
    technologies: [
      "React.js",
      "Vite",
      "React Three Fiber",
      "Three.js",
      "Firebase",
      "ApexCharts",
    ],
  },
  {
    name: "NexaMart",
    description:
      "A comprehensive full-stack e-commerce web application. It includes secure payment processing, efficient media storage, and a robust dual-authentication system to provide a premium shopping experience.",
    url: "#",
    githubUrl:
      "https://github.com/ydagunawardhana/E-Commerce-Full-Stack-MERN.git",
    images: [
      "/images/Home.png",
      "/images/Login Form.png",
      "/images/Product Listing Grid View.png",
      "/images/Popup.png",
      "/images/Details.png",
      "/images/Order Status Change.png",
      "/images/Admin Dashboard 2.png",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js (MERN)",
      "Stripe",
      "Cloudinary",
      "JWT",
    ],
  },
  {
    name: "Medi Core Pharmacy System",
    description:
      "A complete pharmacy automation desktop application designed to streamline inventory management, prescription handling, and sales processing. It features customized, intuitive dashboards for Admins, Pharmacists, and Customers.",
    url: "https://www.linkedin.com/posts/yashan-dinusha_dotnet-softwaredevelopment-windowsforms-ugcPost-7466137304814989312-m6xz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTUkYQBHly6ml9MBjMLYSdoTyPKo9HlyYo",
    githubUrl:
      "https://github.com/ydagunawardhana/Medi-Core-Pharmacy-Management-System.git",
    images: [
      "/images/UC_Dashboard.png",
      "/images/Login .png",
      "/images/UC_P_Dashboard.png",
      "/images/UC_C_ViewMedicines.png",
      "/images/UC_P_SellMedicine.png",
    ],
    technologies: ["C#", "Windows Forms", "SQL Server", "Guna 2 UI", "ADO.NET"],
  },
];

export const CERTIFICATIONS: CertificationDetails[] = [
  {
    title: "Intro to Programming / Intro to Machine Learning",
    institutionDate: "Kaggle | May 2026",
  },
  {
    title: "DYNALAB: The MATLAB Workshop",
    institutionDate:
      "Mathematics and Statistics Circle, NSBM Green University | Sept 2025",
  },
  {
    title: "Industry Preparation Training Programme 2025",
    institutionDate:
      "Faculty of Computing, NSBM Green University | July - Aug 2025",
  },
  {
    title: "Diploma in Microsoft Office (Distinction)",
    institutionDate: "IT House Computer Institute | Aug 2022",
  },
];
