import { motion } from "framer-motion";
export default function NavBar() {
  return (
    <div className="h-[6vh] w-full flex px-5 items-center justify-between">
      <h1
        style={{
          fontFamily: "Khula",
          fontWeight: 800,
          fontStyle: "normal",
        }}
        className="text-center text-2xl font-bold"
      >
        EliteDev
      </h1>
      <motion.div
        whileHover="hover"
        className="text-center h-full w-[80px] flex flex-col items-start justify-center cursor-pointer"
      >
        <motion.div
          initial={{ width: "50px" }}
          variants={{
            hover: { width: "80px" },
          }}
          transition={{ duration: 0.3 }}
          className="border-b-[2px] border-[#ffffff] h-[1vh] w-[80px]"
        />
        <motion.div
          initial={{ width: "60px" }}
          variants={{
            hover: { width: "80px" },
          }}
          transition={{ duration: 0.3 }}
          className="border-b-[2px] border-[#ffffff] h-[1vh] w-[80px]"
        />
      </motion.div>
    </div>
  );
}
