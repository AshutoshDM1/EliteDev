"use client";
import { useEffect } from "react";
import NavBar from "@/components/Navbar";
import Lenis from "lenis";
import MainPage from "@/components/MainPage";
import SecondPage from "@/components/secondpage";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", () => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      <div className="h-screen w-full text-white">
        <NavBar />
        <MainPage />
      </div>
      <SecondPage />
    </>
  );
}
