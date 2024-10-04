import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline/next";
import gsap from "gsap";

export default async function MainPage() {
  function textanimate() {
    const tl = gsap.timeline();
    tl.to(".maintext", {
      duration: 2,
      delay: 1,
      backgroundImage:
        "llinear-gradient(90deg, rgb(132, 0, 255), rgb(255, 0, 123))",
    });
    tl.to(".maintext", {
      duration: 2,
      delay: 1,
      backgroundImage:
        "linear-gradient(90deg, rgb(0, 255, 13), rgb(0, 242, 255))",
    });
    tl.to(".maintext", {
      duration: 2,
      delay: 1,
      backgroundImage:
        "linear-gradient(90deg, rgb(255, 13, 0), rgb(242, 255, 0))",
    });
    tl.to(".maintext", {
      duration: 2,
      delay: 1,
      backgroundImage:
        "linear-gradient(90deg, rgb(0, 255, 157), rgb(0, 98, 255))",
    });
  }
  useGSAP(() => {
    textanimate();
    setInterval(() => {
      textanimate();
    }, 12000);
  });

  return (
    <>
      <div className="h-[94vh] flex flex-col justify-center items-center relative z-10 ">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="h-[100vh] w-full absolute top-0 z-[-10] opacity-[35%] ease-linear duration-300 "
        >
          <Spline scene="https://prod.spline.design/U4zNUzQlTabiUODc/scene.splinecode" />
        </motion.main>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontFamily: "Khula",
              fontWeight: 800,
              textShadow: "rgba(255, 255, 255, 0.4) 0px 0px 7px",
            }}
            className="text-[4.3rem] text-center text-white font-bold"
          >
            <span className="maintext mr-5  ">creative</span>
            solutions.
          </motion.h1>
        </div>
      </div>
    </>
  );
}