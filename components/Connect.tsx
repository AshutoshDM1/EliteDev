"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import MagnetButton from "./MagnetButton";
import gsap from "gsap";
import { AnimatedText } from "./ui/animated-underline-text-one";
export default function Connect() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ashutosh-tiwari-8931b82b8/",
      icon: <Linkedin />,
    },
    {
      name: "Twitter",
      href: "https://x.com/AshutoshDM_1",
      icon: <Twitter />,
    },
    {
      name: "Github",
      href: "https://github.com/AshutoshDM1",
      icon: <Github />, // Assuming Mail icon is used for Github as there's no specific Github icon in Lucide React
    },
  ];
  return (
    <>
      <motion.div
        className="page4 md:min-h-[100vh] w-full text-white flex flex-col justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-[90vh] w-full flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="min-h-[15vh] w-full flex flex-col justify-center items-center ">
            <motion.h1
              className="text-white connecth1 font-semibold text-[1.7rem] text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Want to collaborate?
            </motion.h1>
            <motion.div
              className=" font-bold text-[4rem] leading-[5rem] text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedText
                text="Let's have a chat!"
                textClassName="text-5xl font-bold mb-2"
                underlineClassName="opacity-70"
                underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
                underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
                underlineDuration={1.5}
              >
                <defs>
                  <linearGradient
                    id="underlineGradient"
                    gradientTransform="rotate(45)"
                  >
                    <stop offset="0%" stopColor="#FF1E6C" />
                    <stop offset="25%" stopColor="#FF0080" />
                    <stop offset="50%" stopColor="#00E5FF" />
                    <stop offset="75%" stopColor="#66D2CE" />
                    <stop offset="100%" stopColor="#8F87F1" />
                  </linearGradient>
                </defs>
              </AnimatedText>
            </motion.div>
          </div>
          <motion.div className="min-h-[20vh] mt-20 mb-10 md:mt-0 w-[50%] flex flex-col md:flex-row justify-center items-center gap-5 select-none ">
            {socialLinks.map((item, index) => (
              <motion.a
                href={item.href}
                key={item.name}
                target="_blank"
                className="flex justify-center items-center gap-2 rounded-[15px]  text-[#444444] text-[1.2rem] border-[#a6a6a6] px-4 py-[5px] connectbutton "
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <MagnetButton
                  width={"8rem"}
                  height={"3rem"}
                  magneticStrength={25}
                  magneticContentStrength={50}
                  className="bg-[#ffff] flex justify-center items-center gap-2 relative rounded-xl"
                >
                  <span
                    className={`bg-[#4242423d] h-full w-full absolute z-[-1] top-0 left-0 scale-x-0 transform-origin-center rounded-xl overflow-hidden ${item.name.toLowerCase()}-hover`}
                  ></span>
                  <h1
                    onMouseEnter={() => {
                      gsap.to(`.${item.name.toLowerCase()}-hover`, {
                        scaleX: 1,
                        duration: 0.3,
                        ease: "linear",
                      });
                    }}
                    onMouseLeave={() => {
                      gsap.to(`.${item.name.toLowerCase()}-hover`, {
                        scaleX: 0,
                        duration: 0.3,
                        ease: "linear",
                      });
                    }}
                    className="text-[#424242] text-[1.3rem] border-[#414141] border-[2px] px-4 py-1 rounded-xl font-medium flex gap-2 relative"
                  >
                    <span className="flex items-center justify-center">
                      {item.icon}
                    </span>{" "}
                    {item.name}
                  </h1>
                </MagnetButton>
              </motion.a>
            ))}
          </motion.div>
          <div
            onMouseEnter={() => {
              gsap.to(".boll", {
                scale: 4,
                duration: 0.3,
                translateX: -30,
                translateY: -20,
                transformOrigin: "center",
                ease: "linear",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".boll", {
                scale: 1,
                translateX: -40,
                translateY: -32,
                transformOrigin: "center",
                duration: 0.4,
                ease: "linear",
              });
            }}
            className="min-h-[10vh] cursor-pointer w-full flex flex-col justify-center items-center "
          >
            <motion.h1
              className=" font-medium font-[Asap] text-[2rem] text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              at
            </motion.h1>
            <motion.h1
              className=" font-normal  font-[Asap] text-[1.2rem] text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Ashutosh Tiwari
            </motion.h1>
          </div>
        </motion.div>
        <motion.div
          className="h-[10vh] w-full flex flex-col justify-end items-center "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className=" font-normal font-[Asap] text-[rem] text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © Ashutosh Tiwari 2024. All rights reserved. Location: New Delhi
          </motion.h1>
          <motion.h1
            className=" font-normal  font-[Asap] text-[1rem] text-center mb-8 "
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            This site showcases my personal projects and professional work.
            Content may not be used without permission.
          </motion.h1>
        </motion.div>
      </motion.div>
    </>
  );
}
