import { motion } from "framer-motion";
import gsap from "gsap";
export default function NavBar() {
  const onhandleClickX = () => {
    gsap.to(".sidebar", {
      x: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  };
  return (
    <div className="h-[6vh] fixed top-0 z-[100] w-full flex px-5 items-center justify-between select-none ">
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
        onClick={onhandleClickX}
        whileHover="hover"
        className="text-center h-full w-[80px] flex flex-col items-start justify-center cursor-pointer"
      >
        <motion.div
          initial={{ width: "50px" }}
          variants={{
            hover: { width: "80px" },
          }}
          transition={{ duration: 0.3 }}
          className="sideline1 border-b-[2px] border-[#ffffff] h-[1vh] w-[80px]"
        />
        <motion.div
          initial={{ width: "60px" }}
          variants={{
            hover: { width: "80px" },
          }}
          transition={{ duration: 0.3 }}
          className="sideline2 border-b-[2px] border-[#ffffff] h-[1vh] w-[80px]"
        />
      </motion.div>
    </div>
  );
}
