"use client";
import NavBar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import Portfolio from "@/components/Portfolio";
import Connect from "@/components/Connect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DynamicSvg from "@/components/DynamicSvg";
import Devfolio from "@/components/Devfolio";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Images from "@/components/Images";
import Boll from "@/components/Boll";
import Loading from "@/components/Loading";
import LocomotiveScroll from "locomotive-scroll";
import ProjectShow from "@/components/ShowProject";
import { useRecoilValue } from "recoil";
import { showprojects } from "@/atoms";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy();
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.to(".logo-path", {
      delay: 6,
      scale: 0,
      duration: 0.3,
      transformOrigin: "center",
    });
    gsap.to(".loading", {
      delay: 6,
      opacity: 0,
      duration: 0.6,
      ease: "linear",
      display: "none",
    });
    tl.to(".main", {
      background: "#fff",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".page1",
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
      },
    });

    tl.to(".page4", {
      color: "#000",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".page4",
        start: "top 70%",
        end: "top 0% ",
        scrub: 1,
      },
    });
    tl.to(".connecth1", {
      color: "#706B66",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".page4",
        start: "top 70%",
        end: "top 0% ",
        scrub: 1,
      },
    });
  });
  const selectedProject = useRecoilValue(showprojects);

  const handleClose = () => {
    gsap.to(".projectShow", {
      y: "100%",
      borderRadius: "35%",
      ease: "power1.inOut",
    });
  };

  return (
    <>
      <ProjectShow
        heading={selectedProject.heading}
        description={selectedProject.description}
        fontend={selectedProject.frontend}
        herf={selectedProject.href}
        backend={selectedProject.backend}
        devops={selectedProject.devops}
        image={selectedProject.image}
        github={selectedProject.github}
        onClose={handleClose}
      />
      <Loading />
      <div className="main h-screen w-full fixed top-0 z-[-50] bg-black "></div>
      <div className="w-full text-white z-10 ">
        <Boll />
        <Images />
        <Sidebar />
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.585872) -300%, rgba(102,37,177,0) 58%, rgba(0,0,0,0) 100%)",
          }}
          className="FirstPage h-screen w-full overflow-hidden"
        >
          <DynamicSvg />
          <NavBar />
          <MainPage />
        </div>
        <Devfolio />
        <Portfolio />
        <Connect />
      </div>
    </>
  );
}
