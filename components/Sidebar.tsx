import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
const Sidebar = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ashutosh-tiwari-8931b82b8/",
    },
    { name: "Twitter", href: "https://x.com/AshutoshDM_1" },
    { name: "Github", href: "https://github.com/AshutoshDM1" },
    {
      name: "Wakatime",
      href: "https://wakatime.com/@AshutoshDM1",
    },
  ];

  const menuLinks = [
    { name: "About Me", href: ".page1" },
    { name: "Projects", href: ".page3" },
    { name: "Contact", href: ".page4" },
  ];
  const onhandleClickX = () => {
    gsap.to(".sidebar", {
      x: "100%",
      duration: 1,
      ease: "power1.inOut",
    });
  };
  return (
    <div
      className="sidebar h-screen w-full 2xl:w-1/3 xl:w-1/2 fixed top-0 right-0 z-[200] bg-white p-8 flex-col justify-between
    translate-x-[110%] "
    >
      <button onClick={onhandleClickX} className="self-end mb-8">
        <X className="w-8 h-8  text-[#282828] " />
      </button>

      <div className="h-[80%] max-w-[30rem] mx-auto flex justify-center items-center">
        <div className="h-fit flex gap-14 ">
          <div className="flex flex-col items-start justify-start  ">
            <h2 className="text-black mb-4 text-[22px] font-[khula] font-[300] select-none ">
              Social
            </h2>
            <nav className="flex flex-col text-[24px] font-[khula] font-[300]">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  target="_blank"
                  href={link.href}
                  className={`text-black flex flex-col justify-center group hover:cursor-pointer `}
                >
                  <span className="relative font-medium text-md">
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start justify-center ">
            <h2 className="text-gray-500 mb-4 select-none">Menu</h2>
            <nav className="flex flex-col gap-3 text-[30px] md:text-[40px] font-[khula] font-[500] ">
              {menuLinks.map((link) => (
                <motion.a
                  initial={{ x: 0 }}
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                  key={link.name}
                  onClick={() => (
                    <>
                      {gsap.to(".sidebar", {
                        x: "100%",
                        duration: 1,
                        ease: "power1.inOut",
                        onComplete: () => {
                          document
                            .querySelector(`${link.href}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        },
                      })}
                    </>
                  )}
                  className="text-black hover:text-gray-600 transition-colors cursor-pointer "
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-gray-500 mb-2">Get in touch</h3>
          <a
            href="mailto:info@bencodes.de"
            className="text-black font-[system-ui] text-[18px]  hover:underline transition-colors"
          >
            ashutosh0tiwari@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
