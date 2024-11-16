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
import LogoSvg from "@/components/LogoSvg";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";

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
    function update(time: number) {
      window.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  const cursorCircle = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    window.addEventListener("mousemove", function (dets) {
      gsap.to(cursorCircle.current, {
        duration: 0.8,
        left: dets.x,
        top: dets.y,
      });
    });
  });

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

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
        }}
      >
        <div
          ref={cursorCircle}
          className="boll h-[30px] w-[30px] rounded-[50%] fixed z-[999] shadow-white -translate-x-10 -translate-y-8 "
        ></div>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 34%, rgba(230,254,255,1) 93%, rgba(222,250,255,1) 100%)",
          }}
          className="loading min-h-screen bg-white w-full fixed z-[99] flex justify-center items-center "
        >
          <LogoSvg />
        </div>
        <div
          style={{
            background: "black",
          }}
          className="main h-screen w-full fixed top-0 z-[-50]"
        ></div>
        <div className="w-full relative top-0 left-0 text-white z-10 ">
          <div className="h-screen w-full overflow-hidden">
            <DynamicSvg />
            <NavBar />
            <MainPage />
          </div>
          <Devfolio />
          <Portfolio />
          <Connect />
        </div>
      </ReactLenis>
    </>
  );
}
