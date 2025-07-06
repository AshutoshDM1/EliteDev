"use client";
import React, { useEffect, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { showprojects } from "@/atoms";
import { useRecoilState } from "recoil";

type ReactCompo = {
  heading: string;
  description: string;
  href: string;
  frontend: string;
  backend: string;
  devops: string;
  image: string;
  github: string;
};

const ProjectList = () => {
  const [, setSelectedProject] = useRecoilState(showprojects);

  const projects = useMemo(() => {
    return [
      {
        id: "01",
        title: "CodeGen",
        category: "Full Stack Web Development / GenAI",
        heading: "CodeGen",
        description:
          "A AI Code Generator Site, Create Landing pages, components, etc using AI in seconds",
        frontend: "Next.js, Tailwind CSS , Framer Motion, Zustand",
        backend:
          "Express.js, PostgreSQL , Gemmini API , Realtime Streaming",
        devops: "AWS, Github Actions, Vercel",
        image: "image6.png",
        href: "https://codegen.elitedev.tech",
        github: "https://github.com/AshutoshDM1/CodeGen",
      },
      {
        id: "02",
        title: "MangaHaven",
        category: "Full Stack Web Development / Design / Next.js",
        heading: "MangaHaven",
        description:
          "A comprehensive manga reading platform with advanced features and a clean design. Here you can read manga online for free.",
        frontend: "Next.js, Tailwind CSS ,Shadcn UI ,Recoil , Framer Motion",
        backend: "Nextjs Backend, NextAuth, Prisma, PostgreSQL , Cloudinary",
        devops: "Docker, AWS, Github Actions",
        image: "image1.png",
        href: "https://mangahaven.elitedev.tech",
        github: "https://github.com/AshutoshDM1/MangaHaven",
      },
      {
        id: "03",
        title: "Insight AI.",
        category: "Full Stack Web Development / Ai / React",
        heading: "Insight AI",
        description:
          "An AI-powered ChatGpt Like Website , Ask your any Question and it Will Answer.",
        frontend: "React, TypeScript, Recoil, Tailwind CSS, FireBase",
        backend: "Hono, TypeScript, Gemmini API ",
        image: "image2.png",
        href: "https://insightai.pages.dev/",
        devops: "Docker , Cloudflare Workers",
        github: "https://github.com/AshutoshDM1/InsightAI",
      },
      {
        id: "04",
        title: "Obsy Asency",
        category: "Frontend Development / Animation / GSAP",
        heading: "Obsy Asency",
        description: "A dynamic agency website with smooth animations.",
        frontend: "HTML, CSS, GSAP, ScrollTrigger , Locomotive Scroll",
        backend: "Not involved",
        image: "image3.png",
        href: "https://obsy-agency.vercel.app/",
        devops: "Not involved",
        github: "https://github.com/AshutoshDM1/Obsy-Agency",
      },
      {
        id: "05",
        title: "PrimeWallet",
        category: "Full Stack Development / Express Backend",
        heading: "PrimeWallet",
        description: "A secure digital wallet and financial management app.",
        frontend: "React, Material UI , Recoil , GSAP ",
        backend: "Express.js, MongoDB,Mongooes , JWT , Bcrypt",
        image: "image4.png",
        href: "https://prime-wallet-beta.vercel.app/",
        devops: "Not involved",
        github: "https://github.com/AshutoshDM1/PrimeWallet",
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
    setSelectedProject(project);
    gsap.to(".img", { opacity: 0, scale: "0", ease: "power1.inOut" });
    gsap.to(".boll", { opacity: 1, ease: "power1.inOut" });
    gsap.to(".projectShow", { y: 0, borderRadius: "0", ease: "power3.inOut" });
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
