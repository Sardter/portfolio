import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bilcant from "@/public/Bilcant.png";
import sylvest from "@/public/Sylvest_home.jpeg";
import togather from "@/public/ToGather_home.png";
import vr from "@/public/VR_Circuit_Sim.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Enrolled in Bilkent University",
    location: "Ankara, Turkey",
    description:
      "I am currently in my third year, while acting in multiple leadership positions in clubs such as IEEE, ACM, and GDSC.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - PRESENT",
  },
  {
    title: "Founder",
    location: "Ankara, Turkey",
    description:
      "I founded two apps and a crypto token, honing my full-stack and leadership abilities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Private Tutor",
    location: "Ankara, Turkey",
    description: "I tutored multiple students in various CS related subjects.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Freelance Developer",
    location: "Ankara, Turkey",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Flutter, Django, and Postgres. I'm open to part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - PRESENT",
  },
] as const;

export const projectsData = [
  {
    title: "Bilcant",
    description:
      "I lead a team to develop a RPG game simulating the Campus Life of Bilkent University for a course project",
    tags: ["Java", "LibGDX"],
    imageUrl: bilcant,
  },
  {
    title: "Sylvest",
    description:
      "Founded a social app that utilized Sylvest Coin to reward the users for app engagement. It had Posts, Fundable Projects, Chat, Communities, and many more features.",
    tags: ["Flutter", "Django", "Solidity", "Postgres", "Firebase"],
    imageUrl: sylvest,
  },
  {
    title: "ToGather",
    description:
      "Co-Founded an event based app that utilizes geolocation for dynamic showcase of nearby events. Developed the mobile app.",
    tags: ["Flutter", "Firebase"],
    imageUrl: togather,
  },
  {
    title: "VR Circuit Simulator",
    description:
      "Worked on a unity based virtual reality game that simulated the breadboard circuitry dynamicly.",
    tags: ["Unity"],
    imageUrl: vr,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nest.js",
  "Git",
  "Tailwind",
  "Prisma",
  ,
  "PostgreSQL",
  "Python",
  "Django",
  "Solidity",
  "FastAPI",
  "Java",
  "C#",
  "Unity",
  "C++",
  "Flutter",
  "Dart",
] as const;
