"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProjectShow from "./ShowProject";
import { showprojects } from "@/atoms";
import { useRecoilState } from "recoil";

type ReactCompo = {
  heading: string;
  description: string;
  frontend: string;
  backend: string;
  image: string;
};

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useRecoilState(showprojects);

  const projects = useMemo(() => {
    return [
      {
        id: "01",
        title: "MangaHaven",
        category: "Full Stack Web Development / Design / Next.js",
        heading: "MangaHaven Project",
        description:
          "A comprehensive manga reading platform with advanced features.",
        frontend: "Next.js, React, Tailwind CSS",
        backend: "Node.js, Express, MongoDB",
        image: "image1.png",
      },
      {
        id: "02",
        title: "Insight AI.",
        category: "Full Stack Web Development / Ai / React",
        heading: "Insight AI Project",
        description: "An AI-powered analytics and insights platform.",
        frontend: "React, Redux, Material UI",
        backend: "Python, Django, TensorFlow",
        image: "image2.png",
      },
      {
        id: "03",
        title: "Obsy Asency",
        category: "Frontend Development / Animation / GSAP",
        heading: "Obsy Asency Project",
        description: "A dynamic agency website with smooth animations.",
        frontend: "React, GSAP, Framer Motion",
        backend: "Node.js, Express",
        image: "image3.png",
      },
      {
        id: "04",
        title: "PrimeWallet",
        category: "Full Stack Development / Express Backend",
        heading: "PrimeWallet Project",
        description: "A secure digital wallet and financial management app.",
        frontend: "React, Chakra UI",
        backend: "Express.js, MongoDB, JWT",
        image: "image4.png",
      },
      {
        id: "05",
        title: "Apple Vision Pro",
        category: "Frontend Development / Clone",
        heading: "Apple Vision Pro Clone",
        description: "A responsive clone of the Apple Vision Pro landing page.",
        frontend: "Next.js, Tailwind CSS, GSAP",
        backend: "N/A",
        image: "image5.png",
      },
    ];
  }, []);

  useEffect(() => {
    const box = document.querySelector(".box");
    box?.addEventListener("mouseenter", () => {
      gsap.to(".img", { opacity: 1, scale: "1", ease: "power1.inOut" });
    });
    box?.addEventListener("mouseleave", () => {
      gsap.to(".img", { opacity: 0, scale: "0", ease: "power1.inOut" });
    });
    projects.forEach((project) => {
      const container = document.querySelector(`#project-${project.id}`);
      const imageOffset = (parseInt(project.id) - 1) * -200;

      container?.addEventListener("mouseenter", () => {
        gsap.to(".img1", {
          y: `${imageOffset}px`,
          duration: 0.5,
          ease: "linear",
        });
      });
    });
  }, [projects]);

  useGSAP(() => {
    // Mouse move animation
    window.addEventListener("mousemove", function (dets) {
      gsap.to(".img", {
        duration: 0.8,
        left: dets.x,
        top: dets.y,
      });
    });

    // Set up project animations
    projects.forEach((project) => {
      const container = document.querySelector(`#project-${project.id}`);
      if (container) {
        const title = container.querySelector("h2");
        const category = container.querySelector("h3");

        const tl = gsap.timeline({ paused: true });

        tl.to(title, {
          x: 15,
          color: "#6d6d6d",
          duration: 0.3,
          ease: "power2.out",
        }).to(
          category,
          {
            x: -15,
            color: "#6d6d6d",
            duration: 0.3,
            ease: "power2.out",
          },
          "<"
        );
        // Add a check to ensure the animation plays correctly
        // @ts-expect-error: This is a temporary workaround for type issues
        container.animation = tl;
      }
    });
  }, []);

  // @ts-expect-error: This is a temporary workaround for type issues
  const handleMouseEnter = (e) => {
    const container = e.currentTarget;
    if (container.animation) {
      container.animation.play();
    }
  };

  // @ts-expect-error: This is a temporary workaround for type issues
  const handleMouseLeave = (e) => {
    const container = e.currentTarget;
    if (container.animation) {
      container.animation.reverse();
    }
  };

  const handleProjectClick = (project: ReactCompo) => {
    gsap.to(".img", { opacity: 0, scale: "0", ease: "power1.inOut" });
    gsap.to(".boll", { opacity: 1, ease: "power1.inOut" });
    setSelectedProject(project);
  };

  return (
    <>
      <div className="w-full px-4 py-16 select-none">
        <div className="box h-full">
          {projects.map((project) => (
            <div
              onClick={() => handleProjectClick(project)}
              id={`project-${project.id}`}
              key={project.id}
              className="border-b-[1.5px] border-[#6b6b6bc5] py-8 group cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col md:flex-row items-center justify-between font-[Asap]">
                <div className="flex items-start gap-8">
                  <span className="text-[#202020] text-[24px] pt-3">
                    {project.id}
                  </span>
                  <h2 className="text-[40px] sm:text-[60px] text-[#000]">
                    {project.title}
                  </h2>
                </div>
                <h3 className="text-gray-500 text-[20px]">
                  {project.category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
