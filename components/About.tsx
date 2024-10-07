import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Spline from "@splinetool/react-spline/next";
import { motion } from "framer-motion";
import Marquee from "./Marquee";
gsap.registerPlugin(ScrollTrigger);

export default function SecondPage() {
  return (
    <div className="page2 h-[100vh] w-full text-white flex overflow-hidden ">
      <div className="h-full max-w-[50rem] ml-auto flex flex-col items-start justify-center p-[2vh] relative z-[10] ">
        <h1 className="text-white w-fit text-[4.5rem] font-[Asap] font-[800] ">
          Hey Y&apos;ll I&apos;M Ashutosh
        </h1>
        <div className="flex flex-col items-start justify-center ">
          <h1 className="text-[1.5rem] break-words  font-[Asap] font-[800]">
            I&apos;m a{" "}
            <span className="text-[#b6b6b6] text- font-[Asap] font-[800] ">
              Full Stack WebDeveloper
            </span>{" "}
            that&apos;s ready to help
          </h1>
          <h1 className="text-[1.5rem] font-[Asap] font-[800] ">
            you make the experiences you&apos;ve been missing!
          </h1>
          <h1 className="text-[1.5rem] font-[Asap] font-[800] text-start flex justify-start items-center ">
            <span className="text-[#9f2ed3] px-2 text-[2.5rem] pt-3 ">*</span>
            from New Delhi , India!
          </h1>
          <button className="bg-[#d52a7d] text-[1.5rem] text- font-[Asap] font-[800] py-3 px-8 rounded-[15px] flex justify-center items-center italic">
            Lets Connect
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                viewBox="0 0 24 24"
                fill="none"
                className="icon ml-1 "
              >
                <path
                  d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>
          <h1 className="text-[1.7rem] font-[Asap] font-[800] py-[3vh] px-5 ">
            I&apos;ve worked with
          </h1>
        </div>
        <Marquee />
      </div>
      <div className="h-full w-[50%] flex items-start justify-start relative z-[30]  ">
        <motion.div
          style={{
            maskImage:
              "linear-gradient(from bottom, transparent, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black, transparent)",
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="h-full w-full left-0 top-[7%] relative "
        >
          <Spline scene="https://prod.spline.design/jAfKvFgwoo8SV2ez/scene.splinecode" />
        </motion.div>
      </div>
    </div>
  );
}
