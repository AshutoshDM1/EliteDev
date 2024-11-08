import { useGSAP } from "@gsap/react";
import { useInView, motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
export default function Portfolio() {
  const projects = [
    {
      title: "MangaHaven",
      imageurl: "image1.png",
      Line1: "A Full Stack Next.js Manga Reading Site",
      Line2: "With Simple and Animated UI , have NextAuth , CSR Rendering",
    },
    {
      title: "Insight AI",
      imageurl: "image2.png",
      Line1: "A Full Stack AI Chating Site",
      Line2:
        "Made With Frontend in React and Backend in HONO , Cloudflare and Firebase",
    },
    {
      title: "Web3 Wallet",
      imageurl: "image3.png",
      Line1: "Its A Web2 base Web3 Wallet Making Site",
      Line2:
        "Made in Next.js useing Solana Wallet Adapter and Some Web3 Liberay  ",
    },
    {
      title: "Prime Wallet",
      imageurl: "image4.png",
      Line1: "This is a Simple Money Wallet Website",
      Line2:
        "This is A Full Stack Site Made in React + Express with JWT Auth , Mongo , etc",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const text = "Portfolio";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className="page3 min-h-screen w-full p-[1vh] md:p-[3] ">
        <div className="flex flex-col justify-center items-start h-[30%] max-w-[85%] mx-auto ">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-white font-[Asap] font-bold text-[3.5rem] md:text-[6rem] italic uppercase "
          >
            {text.split("").map((word) => {
              return (
                <motion.span variants={itemVariants} key={word}>
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>
          <h1 className="text-white font-[Asap] font-bold text-[2rem] ">
            Take a look at some of my work!
          </h1>
          <h1 className="text-[#b0b0b0] font-[Asap] font-semibold text-[1.2rem] ">
            Explore experiences crafted with precision and passion, aimed at
            delivering seamless experiences that are always fun and effective.
          </h1>
        </div>
        <div className="h-fit w-full flex justify-evenly items-center px-4 pt-[8vh] flex-wrap gap-[10vh] ">
          {projects.map((item) => {
            return (
              <>
                <div key={item.title} className="h-[50vh] w-[60vh]">
                  <img
                    className="object-cover h-[70%] w-full border-[2px] border-[#b0b0b0] rounded-[15px] overflow-hidden"
                    alt="This is a placeholder image."
                    height={400}
                    width={400}
                    src={item.imageurl}
                  ></img>
                  <h1 className="text-[#ffffff] font-[Asap] font-bold text-[2rem] italic uppercase px-3 ">
                    {item.title}
                  </h1>
                  <h1 className="text-[#d5c0ff] font-[Asap] font-bold text-[1.2rem]  uppercase px-3 ">
                    {item.Line1}{" "}
                  </h1>
                  <h1 className="text-[#d5c0ff] font-[Asap] font-bold text-[1.2rem]  uppercase px-3 ">
                    {item.Line2}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
