"use client";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion"; 

export default function Connect() {
  return (
    <>
      <motion.div
        className="page4 min-h-screen w-full text-white flex flex-col justify-center items-center"
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
              className="text-[#706B66] font-semibold text-[1.7rem] text-center"
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
          <div className="h-[20vh] w-[50%] flex flex-col md:flex-row justify-center items-center gap-5  ">
            <motion.button
              className="flex justify-center items-center gap-2 rounded-[15px] border-[2px] text-[#444444] text-[1.2rem] border-[#a6a6a6] px-4 py-[5px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span>
                <Mail />
              </span>
              Email
            </motion.button>
            <motion.button
              className="flex justify-center items-center gap-2 rounded-[15px] border-[2px] text-[#444444] text-[1.2rem] border-[#a6a6a6] px-4 py-[5px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span>
                <Linkedin className="mb-2" />
              </span>
              LinkedIn
            </motion.button>
            <motion.button
              className="flex justify-center items-center gap-2 rounded-[15px] border-[2px] text-[#444444] text-[1.2rem] border-[#a6a6a6] px-4 py-[5px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span>
                <Twitter />
              </span>
              Twitter
            </motion.button>
          </div>
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
