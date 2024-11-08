"use client";
import NavBar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import Portfolio from "@/components/Portfolio";
import Connect from "@/components/Connect";
import { useGSAP } from "@gsap/react";
import SecondPage from "@/components/About";
import { motion } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import Scene from "@/components/Scene";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline/next";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

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
      ".spline",
      {
        opacity: 1,
      },
      {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".page2",
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
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
  });

  return (
    <>
      <div className="h-screen w-full fixed top-0 left-0 main bg-black  text-white z-0 ">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 4 }}
          className="spline"
        >
          {/* <Spline scene="https://prod.spline.design/lpbeU26o942idhaR/scene.splinecode" /> */}
        </motion.main>
      </div>
      <div className="w-full relative top-0 left-0  text-white z-10 ">
        <NavBar />
        <MainPage />
        <SecondPage />
        <Portfolio />
        <Connect />
      </div>
    </>
  );
}
