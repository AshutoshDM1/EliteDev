"use client";
import NavBar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import Portfolio from "@/components/Portfolio";
import Connect from "@/components/Connect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SecondPage from "@/components/About";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".main", {
      background:
        "linear-gradient(60deg, #000000 20%, #373737 30%, #000000 55%)",
      ease: "power1.inOut",

      scrollTrigger: {
        trigger: ".page2",
        start: "top 40%",
        end: "top 0%",
        scrub: 1,
      },
    });
    tl.to(".main", {
      background: "#6625b1",
      ease: "power1.inOut",

      scrollTrigger: {
        trigger: ".page3",
        start: "top 40%",
        end: "top 0% ",
        scrub: 1,
      },
    });
    tl.to(".main", {
      background: "#ffffff",
      ease: "power1.inOut",

      scrollTrigger: {
        trigger: ".page4",
        start: "top 70%",
        end: "top 0% ",
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
  });

  return (
    <>
      <div className="h-screen w-full fixed top-0 left-0 main bg-black  text-white z-0 "></div>
      <div className="relative top-0 left-0 text-white z-10 ">
        <NavBar />
        <MainPage />
        <SecondPage />
        <Portfolio />
        <Connect />
      </div>
    </>
  );
}
