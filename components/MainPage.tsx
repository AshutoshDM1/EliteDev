"use client";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
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
      <div className="h-[100vh] w-full flex flex-col justify-center items-center relative z-10 overflow-hidden text-center ">
        <motion.div className="flex flex-col justify-center items-center">
          <div className="overflow-hidden flex text-[2.5rem] md:text-[80px] font-[800]">
            <motion.h1
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 4 }}
              style={{
                fontFamily: "Khula",
                fontWeight: 800,
                textShadow: "rgba(255, 255, 255, 0.4) 0px 0px 8px",
              }}
              className=" text-center text-white font-bold"
            >
              Turning ideas into
            </motion.h1>
          </div>
          <div className="overflow-hidden text-[2.5rem] md:text-[80px] font-[800]">
            {" "}
            <motion.h1
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 5 }}
              style={{
                fontFamily: "Khula",
                fontWeight: 800,
                textShadow: "rgba(255, 255, 255, 0.3) 0px 0px 6px",
              }}
              className=" text-center flex flex-col md:flex-row text-white font-bold"
            >
              <span className="maintext mr-5  ">creative</span>
              solutions.
            </motion.h1>
          </div>
          <div className="w-[50%] ">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 6.5 }}
              className="w-full text-[#888888] text-[18px] font-[400]"
            >
              {" "}
              Innovative web developer crafting unique user experiences.
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}
