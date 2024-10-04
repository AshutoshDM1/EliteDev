"use client";
import { useEffect } from "react";
import NavBar from "@/components/Navbar";
import Lenis from "lenis";
import MainPage from "@/components/MainPage";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", () => {});
    function raf(time : number ) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-[#000000] text-white">
        <NavBar />
        <MainPage/>
      </div>
    </>
  );
}
