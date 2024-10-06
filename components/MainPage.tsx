"use client";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline/next";
import gsap from "gsap";

export default function MainPage() {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const gradients = [
      "linear-gradient(90deg, rgb(132, 0, 255), rgb(255, 0, 123))",
      "linear-gradient(90deg, rgb(136, 255, 0), rgb(0, 255, 119))",
      "linear-gradient(90deg, rgb(255, 13, 0), rgb(242, 255, 0))",
      "linear-gradient(90deg, rgb(0, 255, 157), rgb(0, 98, 255))",
      "linear-gradient(90deg, rgb(0, 255, 217), rgb(0, 38, 255))",
      "linear-gradient(90deg, rgb(238, 0, 255), rgb(255, 0, 17))",
    ];

    gradients.forEach((gradient) => {
      tl.to(".maintext", {
        duration: 2,
        backgroundImage: gradient,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <>
      <div className="h-[94vh] flex flex-col justify-center items-center relative z-10 overflow-hidden ">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="h-[100vh] w-full absolute top-0 z-[-10] overflow-hidden bg-[#6625b1] "
        >
          <Spline scene="https://prod.spline.design/U4zNUzQlTabiUODc/scene.splinecode" />
        </motion.main>
        <motion.div>
          <div className="overflow-hidden">
            <motion.h1
              style={{
                fontFamily: "Khula",
                fontWeight: 800,
                textShadow: "rgba(255, 255, 255, 0.4) 0px 0px 8px",
              }}
              className="text-[4.3rem] text-center text-white font-bold"
            >
              Turning ideas into
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            {" "}
            <motion.h1
              style={{
                fontFamily: "Khula",
                fontWeight: 800,
                textShadow: "rgba(255, 255, 255, 0.3) 0px 0px 6px",
              }}
              className="text-[4.3rem] text-center text-white font-bold"
            >
              <span className="maintext mr-5  ">creative</span>
              solutions.
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}
