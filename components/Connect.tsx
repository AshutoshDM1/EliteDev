"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

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
            <motion.h1
              className=" font-bold text-[4rem] leading-[5rem] text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s have a chat!
            </motion.h1>
          </div>
          <motion.div className="min-h-[20vh] w-[50%] flex flex-col md:flex-row justify-center items-center gap-5 select-none ">
            {socialLinks.map((item, index) => (
              <motion.a
                href={item.href}
                key={item.name}
                target="_blank"
                className="flex justify-center items-center gap-2 rounded-[15px] border-[2px] text-[#444444] text-[1.2rem] border-[#a6a6a6] px-4 py-[5px]"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span>{item.icon}</span>
                {item.name}
              </motion.a>
            ))}
          </motion.div>
          <div className="min-h-[10vh]  w-full flex flex-col justify-center items-center ">
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
