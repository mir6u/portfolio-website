"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React JS</li>
        <li>Next JS</li>
        <li>TailWind CSS</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Official Documentations</li>
        <li>Self-learner</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    )
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id: any) => {
    isPending(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl-gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/Visual_Studio_Code_1.35_icon.svg.png"
          width={500}
          height={500}
          alt="abt img"
          draggable="false"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            hic, voluptas deleniti ullam voluptate minus harum vero aspernatur
            ea vel culpa repudiandae, cum inventore natus obcaecati, debitis
            aperiam nemo. Error. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique impedit expedita ipsam at aspernatur
            molestias, rem aliquid dignissimos ab. Fugiat distinctio ut commodi
            aperiam repellendus impedit amet facere fuga saepe.
          </p>
          <div className="flex justify-start flex-row mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
