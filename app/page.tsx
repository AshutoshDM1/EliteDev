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
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Images from "@/components/Images";
import Boll from "@/components/Boll";
import Loading from "@/components/Loading";
import LocomotiveScroll from "locomotive-scroll";
import ProjectShow from "@/components/ShowProject";
import { useRecoilState } from "recoil";
import { scrollmain, showprojects } from "@/atoms";

// Add type declaration for window.lenis
declare global {
  interface Window {
    lenis?: {
      raf: (time: number) => void;
    };
  }
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.2,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
    });
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
  const [selectedProject, setSelectedProject] = useRecoilState(showprojects);
  const [scroll, setscroll] = useRecoilState(scrollmain);

  const handleClose = () => {
    setSelectedProject(null);
    gsap.to(".img", {
      opacity: 1,
      scale: "1",
      ease: "power1.inOut",
    });
    gsap.to(".boll", { opacity: 0, ease: "power1.inOut" });
    setscroll(true);
  };

  // Use useEffect to scroll into view when selectedProject changes
  useEffect(() => {
    if (scroll === true) {
      const page3Element = document.querySelector(`.page3`);
      if (page3Element) {
        page3Element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scroll]); // Dependency on selectedProject

  return (
    <>
      {!selectedProject ? (
        <>
          <Images />
          <Boll />
          {/* <Loading /> */}
          <div className="main h-screen w-full fixed top-0 z-[-50] bg-black "></div>
          <div className="w-full relative top-0 left-0 text-white z-10 ">
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
      ) : (
        <ProjectShow
          heading={selectedProject.heading}
          description={selectedProject.description}
          fontend={selectedProject.frontend}
          backend={selectedProject.backend}
          image={selectedProject.image}
          onClose={handleClose}
        />
      )}
    </>
  );
}
