import { motion } from "framer-motion";
import gsap from "gsap";
import { useState, useEffect } from "react";
import MagnetButton from "./MagnetButton";

const SCROLL_THRESHOLD = 350;

export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFirstPage(scrollPosition < SCROLL_THRESHOLD);
    };

    // Check initial position
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);

    if (!showSidebar) {
      // Opening the sidebar
      gsap.to(".sideline1", {
        rotate: 45,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(".sideline2", {
        rotate: -45,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(".sideline2 , .sideline1", {
        borderColor: "#000",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".sidebar", {
        x: 0,
        borderRadius: "0%",
        duration: 0.5,
        ease: "power3.Out",
      });
    } else {
      // Closing the sidebar
      gsap.to(".sideline1", {
        rotate: 0,
        y: -5,
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(".sideline2", {
        rotate: 0,
        y: 5,
        duration: 0.3,
        ease: "power1.inOut",
      });
      gsap.to(".sideline2 , .sideline1", {
        borderColor: isFirstPage ? "#ffffff" : "#000000",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".sidebar", {
        x: "110%",
        duration: 0.5,
        borderRadius: "100%",
        ease: "expo.Out",
      });
    }
  };

  return (
    <div className="h-[8vh] fixed top-3 z-[1000] w-full flex px-5 items-center justify-between select-none">
      <MagnetButton
        width={"4rem"}
        height={"4rem"}
        magneticStrength={25}
        magneticContentStrength={50}
        className="bg-[#fff0]  flex justify-center items-center gap-2"
      >
      </MagnetButton>
      <motion.div
        onClick={handleSidebarToggle}
        whileHover={!showSidebar ? "hover" : undefined}
        className="text-center h-full w-[60px]  flex flex-col items-center justify-center cursor-pointer gap-2 relative"
      >
        <motion.div
          initial={{ width: "60px" }}
          className={`sideline1 h-[2px] bg-[#4e4e4e] first-line: w-[60px] absolute translate-y-[-5px] mix-blend-color-burn `}
        />
        <motion.div
          initial={{ width: "60px" }}
          className={`sideline2 h-[2px] bg-[#4e4e4e] first-line: w-[60px] absolute translate-y-[5px] mix-blend-color-burn `}
        />
      </motion.div>
    </div>
  );
}
