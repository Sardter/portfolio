import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bilcant from "@/public/Bilcant.png";
import togather from "@/public/ToGather_home.png";
import vr from "@/public/VR_Circuit_Sim.png";
import yolla from "@/public/yolla_pic.png"
import campus_connect from "@/public/campus_connect.jpeg"
import bilart from "@/public/bilart.jpeg"
import nlp from "@/public/nlp_paper.png"
import nobodies from "@/public/nobodies.jpeg"
import { StaticImageData } from "next/image";

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
    title: "Freelance Developer",
    location: "Ankara, Turkey",
    description:
      "Working as a full-stack freelance developer, focusing on modern web and mobile applications. My primary stack includes React, Next.js, TypeScript, Flutter, Django, FastAPI, and PostgreSQL. I am currently open to part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "7/2025 – PRESENT",
  },
  {
    title: "Software Engineer – TÜBİTAK UZAY",
    location: "Ankara, Turkey",
    description:
      "Worked on FPGA development for real-time VGA and HDMI output systems. Developed realistic star image generation pipelines for star tracker systems using Python, Gaia, and Astrometry, achieving arc-second level accuracy. Optimized performance through parallel processing and caching, and worked with embedded platforms such as Raspberry Pi and Nvidia Jetson Orin Nano.",
    icon: React.createElement(CgWorkAlt),
    date: "11/2024 – 6/2025",
  },
  {
    title: "Software Engineer Intern – Datateam",
    location: "Ankara, Turkey",
    description:
      "Contributed to the development of a full-stack e-commerce platform using Node.js and Vue.js. Dockerized the application for deployment pipelines, worked extensively with MongoDB, and implemented a recommender system from scratch.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2024 – 08/2024",
  },
  {
    title: "Embedded Engineer Intern – Büyütech",
    location: "Ankara, Turkey",
    description:
      "Worked on driver distraction detection systems using OpenCV and Cipia DriverSense. Implemented a low-level XML parser in C++, calculated gaze-based geometric areas of interest, added optimized encryption and decryption to logging systems, and developed a GUI interface.",
    icon: React.createElement(CgWorkAlt),
    date: "06/2024 – 07/2024",
  },
  {
    title: "Private Tutor",
    location: "Ankara, Turkey",
    description:
      "Provided one-on-one tutoring to multiple students in computer science and software engineering topics, tailoring explanations to individual learning styles and academic needs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Co-founder – Togather",
    location: "Ankara, Turkey",
    description:
      "Co-founded an event-based social application featuring dynamic maps and geolocation, built with Flutter. The platform reached approximately 500 beta users and was presented at conferences alongside companies such as Microsoft and Roketsan. I developed the backend using Django, PostgreSQL, WebSockets, and Firebase, secured $50,000 in digital aid through an Ideathon, and designed a crypto token with a custom Solidity-based mining mechanism.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2022 – 08/2023",
  },
  {
    title: "Bilkent University – BSc Computer Engineering",
    location: "Ankara, Turkey",
    description:
      "Completed a Bachelor’s degree in Computer Engineering with a merit scholarship. Actively participated in programming contests and hackathons, and was involved in student organizations such as IEEE, GDSC, and ACM. I also co-founded the Bilkent Marketing Club.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 – 2025",
  },
] as const;


export type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  url?: string | undefined;
};


export const projectsData: ProjectProps[] = [
  {
    title: "NLP Term Paper",
    description:
      "This paper examines the diachronic path of the Persian loanwords in Turkish following their persistence through language reforms and semantic shift away from their etymological opposites.",
    tags: ["Word Embeddings", "FastText", "Optuna"],
    imageUrl: nlp,
    url: undefined,
  },
  {
    title: "Nobodies",
    description:
      "My passion project. A deep CRPG set in an arcane-punk setting. Ongoing.",
    tags: ["Unreal", "C++"],
    imageUrl: nobodies,
    url: undefined,
  },
  {
    title: "Yolla",
    description:
      "Worked fullstack on our capstone project that sugested the optimal cargo firm for any package to be sent from location A to B in Turkey.",
    tags: ["Python", "FastAPI", "React", "Google Maps API", "PostgreSQL"],
    imageUrl: yolla,
    url: "https://github.com/yolla-tech/yolla-backend",
  },
  {
    title: "Campus Connect",
    description:
      "CampusConnect is a social media platform for Bilkent University students. It enables effective management of lost & found items, borrowings, secondhand sales, and donations across the campus.",
    tags: ["Flutter", "Dart"],
    imageUrl: campus_connect,
    url: "https://github.com/Sardter/campus_connect_frontend",
  },
  {
    title: "Bilart",
    description:
      "Developed a semi-ORM like backend architecture that took api requests and translated it direclty to raw SQL for our Database course for fun.",
    tags: ["Python", "FastAPI", "Postgres", "SQL"],
    imageUrl: bilart,
    url: "https://github.com/Sardter/campus_connect_frontend",
  },
  {
    title: "VR Circuit Simulator",
    description:
      "Worked on a unity based virtual reality game that simulated the breadboard circuitry dynamicly.",
    tags: ["Unity", "C#"],
    imageUrl: vr,
    url: undefined,
  },
  {
    title: "ToGather",
    description:
      "Co-Founded an event based app that utilizes geolocation for dynamic showcase of nearby events. Developed the mobile app.",
    tags: ["Flutter", "Firebase", "Dart", "Python", "FastAPI", "React", "Google Maps API", "PostgreSQL"],
    imageUrl: togather,
    url: "https://github.com/Sardter/ToGather",
  },
  {
    title: "Bilcant",
    description:
      "I lead a team to develop a RPG game simulating the Campus Life of Bilkent University for a course project",
    tags: ["Java", "LibGDX"],
    imageUrl: bilcant,
    url: "https://github.com/Sardter/Bilcan-t",
  },
];

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "PostgreSQL",
  "Python",
  "Django",
  "FastAPI",
  "Java",
  "C#",
  "Unity",
  "Unreal",
  "C++",
  "Flutter",
  "Dart",
  "Deep Learning",
  "NLP",
  "Rainforcement Learning",
  "OpenCV",
  "LangChain"
] as const;
