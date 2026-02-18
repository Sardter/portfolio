"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a recent graduate of Bilkent University’s{" "}
        <span className="font-medium">Computer Engineering</span> department,
        driven by a strong passion for programming and problem-solving. I have
        completed and contributed to a wide range of projects, including web
        development, Flutter applications, game development, and
        research-oriented work involving various artificial intelligence
        techniques. Some of these projects were carried out in professional
        settings, while others were developed independently in my spare time.
      </p>

      <p className="mb-3">
        I am most proficient in{" "}
        <span className="font-medium">C++, Python, FastAPI</span>, and their
        surrounding ecosystems. In addition, I have hands-on experience with
        JavaScript, React, C#, and Dart, which I have actively used across
        different projects.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I enjoy making
        music, mountain climbing, gaming, and traveling. I also enjoy{" "}
        <span className="font-medium">
          nerding out about history, philosophy, and role-playing games
        </span>
        .
      </p>
    </motion.section>
  );
}
