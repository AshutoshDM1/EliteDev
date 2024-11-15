"use client";
import NavBar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import Portfolio from "@/components/Portfolio";
import Connect from "@/components/Connect";
import { useGSAP } from "@gsap/react";
import SecondPage from "@/components/About";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DynamicSvg from "@/components/DynamicSvg";
import Devfolio from "@/components/Dev";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".main",
      {
        background: "#000",
      },
      {
        background: "#000",
        duration: 1,
      }
    );

    tl.fromTo(
      ".main",
      {
        background: "#fff",
      },
      {
        background: "#0000",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".page2",
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      ".main",
      {
        background: "#000",
      },
      {
        background: "#6625b1",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".page3",
          start: "top 40%",
          end: "top 0%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      ".main",
      { background: "#6625b1" },
      {
        background: "#ffffff",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".page4",
          start: "top 70%",
          end: "top 0% ",
          scrub: 1,
        },
      }
    );
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
      <div className="main h-screen w-full fixed top-0 z-[-50]"></div>
      <div className="w-full relative top-0 left-0  text-white z-10 ">
        <div className="h-screen w-full overflow-hidden">
          <DynamicSvg />
          <NavBar />
          <MainPage />
        </div>
        <Devfolio />
        <SecondPage />
        <Portfolio />
        <Connect />
      </div>
    </>
  );
}
