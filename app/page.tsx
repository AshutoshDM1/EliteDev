"use client";
import NavBar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import Portfolio from "@/components/Portfolio";
import Connect from "@/components/Connect";
import { useGSAP } from "@gsap/react";
import SecondPage from "@/components/About";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline/next";
import { Application } from "@splinetool/runtime";

gsap.registerPlugin(ScrollTrigger);

interface SplineObject {
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
}

export default function Home() {

  const cube = useRef<SplineObject | null | undefined>(null);
  const camref = useRef<SplineObject | null | undefined>(null);
  const spareref = useRef<SplineObject | null | undefined>(null);
  const bgg = useRef<SplineObject | null | undefined>(null);

  function onLoad(spline: Application) {
    const obj = spline.findObjectById("d131f079-846f-4dea-9250-5afa9165fbd8");
    const cam = spline.findObjectById("546ac97a-3da9-4460-878a-0c19748c5743");
    const spare = spline.findObjectById("4e257e25-7c3f-4a18-97f1-b1d1792c5cf4");
    const bg = spline.findObjectById("deee97af-ef54-46f8-a32d-0986c66c5d1d");
    cube.current = obj;
    camref.current = cam;
    spareref.current = spare;
    bgg.current = bg;

    if (cube.current) {
      gsap.to(cube.current.rotation, {
        duration: 1,
        y: 2,
        scrollTrigger: {
          trigger: ".page2",
          start: "top 100%",
          end: "top 0%",
          scrub: 1,
        },
      });
    }
  }
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
        toggleActions: "play reverse play reverse",
        onEnter: () => gsap.set(".spline", { display: "none" }),
        onLeaveBack: () => gsap.set(".spline", { display: "block" }),
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
        end: "top 0%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
        onEnter: () => gsap.set(".robot", { display: "none" }),
        onLeaveBack: () => gsap.set(".robot", { display: "block" })
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
      <div className="main h-screen w-full fixed top-0 left-0  text-white z-0 ">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 7 }}
          className="spline"
        >
          <Spline
            onLoad={onLoad}
            className="min-h-[100vh] w-full
             absolute  z-[-10] overflow-hidden"
            scene="https://prod.spline.design/r7f1C6dbtUIMri5H/scene.splinecode"
          />
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
