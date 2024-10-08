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
      background:
        "linear-gradient(60deg, #000000 20%, #373737 30%, #000000 55%)",
      duration: 4,
      scrollTrigger: {
        trigger: ".page2",
        start: "top 40%",
        end: "top 0%",
        scrub: 3,
      },
    });
    tl.fromTo(
      ".main",
      {
        background:
          "linear-gradient(60deg, #000000 20%, #373737 30%, #000000 55%)",
      },
      {
        background: "#6625b1",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".page3",
          start: "top 40%",
          end: "top 0% ",
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
          <Scene />
        </motion.main>
      </div>
      <div className="relative top-0 left-0  text-white z-10 ">
        <NavBar />
        <MainPage />
        <SecondPage />
        <Portfolio />
        <Connect />
      </div>
    </>
  );
}
