import { motion } from "framer-motion";
import gsap from "gsap";
import { useState } from "react";
export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);

    if (!showSidebar) {
      // Opening the sidebar
      gsap.to(".sideline1", {
        borderColor: "#000000",
        rotate: 45,
        y: 6,
        width: "50px",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".sideline2", {
        borderColor: "#000000",
        rotate: -45,
        y: -6,
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".sidebar", {
        x: 0,
        duration: 1,
        ease: "power1.inOut",
      });
    } else {
      // Closing the sidebar
      gsap.to(".sideline1", {
        borderColor: "#ffffff",
        rotate: 0,
        y: 0,
        width: "50px",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".sideline2", {
        borderColor: "#ffffff",
        rotate: 0,
        y: 0,
        width: "60px",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".sidebar", {
        x: "110%",
        duration: 1,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className=" h-[6vh] fixed top-0 z-[1000] w-full flex px-5 items-center justify-between select-none  ">
      <h1
        style={{
          fontFamily: "Khula",
          fontStyle: "normal",
        }}
        className="navText text-center text-2xl font-[600]"
      >
        At
      </h1>
      <motion.div
        onClick={handleSidebarToggle}
        whileHover={!showSidebar ? "hover" : undefined}
        className="navLines text-center h-full w-[80px] flex flex-col items-start justify-center cursor-pointer mix-blend-difference gap-2"
      >
        <motion.div
          initial={{ width: "50px" }}
          variants={{
            hover: { width: "50px" },
          }}
          transition={{ duration: 0.3 }}
          className="sideline1 border-b-[2px] border-[#ffffff] h-0 w-[80px]"
        />
        <motion.div
          initial={{ width: "60px" }}
          variants={{
            hover: { width: "60px" },
          }}
          transition={{ duration: 0.3 }}
          className="sideline2 border-b-[2px] border-[#ffffff] h-0 w-[80px]"
        />
      </motion.div>
    </div>
  );
}
