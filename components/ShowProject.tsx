import { ArrowUpRight } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

type ReactCompo = {
  heading: string;
  description: string;
  herf: string;
  fontend: string;
  backend: string;
  devops: string;
  image: string;
  github: string;
  onClose?: () => void;
};

const ProjectShow: React.FC<ReactCompo> = ({
  heading,
  description,
  herf,
  fontend,
  backend,
  devops,
  image,
  github,
  onClose,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center
    const x = (e.clientX - centerX) * 0.4; // Adjust multiplier for strength
    const y = (e.clientY - centerY) * 0.4;

    setPosition({ x, y });
  };
  return (
    <div className="projectShow translate-y-[100%] rounded-t-[35%] fixed inset-0 z-[999999] w-full flex flex-col items-center justify-center bg-black text-white">
      <motion.button
        onClick={onClose}
        className="absolute top-4 right-16 text-white hover:rotate-90 ease-in-out duration-200"
      >
        <X size={40} />
      </motion.button>
      <div className="h-full max-w-[1000px] mx-auto ">
        <a href={herf} target="_blank">
          <div className="mt-[5vh] flex w-full justify-between">
            <h1 className="text-[96px] font-[400] font-[Khula] mb-4 select-none cursor-pointer ">
              {heading}
            </h1>
            <motion.div
              initial={{ x: 0, y: 0 }}
              whileHover={{ scale: 1.1 }}
              onMouseOver={handleMouseMove}
              onMouseOut={() => {
                setPosition({ x: 0, y: 0 });
              }}
              ref={buttonRef}
              onClick={onClose}
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="flex justify-center items-center mt-8 h-[48px] w-[48px] select-none cursor-pointer"
            >
              <ArrowUpRight size={50} />
            </motion.div>
          </div>
        </a>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h2 className="text-[16px] text-[#bcbcbc] font-[300] mb-8 pb-4 border-b-[1px] border-[#bcbcbcb1]  ">
              DESCRIPTION
            </h2>
            <p className="font-[Poppins] font-[400] text-[16px] text-[#b0b0b0] ">
              {description}
            </p>
          </div>
          <div>
            <h2 className="text-[16px] text-[#bcbcbc] font-[300] mb-5 pb-4 border-b-[1px] border-[#bcbcbcb1] ">
              Link
            </h2>
            <ul className="list-disc w-fit pl-5 font-[Poppins] font-[400] text-[16px] text-[#b0b0b0] ">
              <li>
                <Links name="Github" href={github} />
              </li>
              <li>
                <Links name="Website" href={herf} />
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[16px] text-[#bcbcbc] font-[300] mb-5 pb-4 border-b-[1px] border-[#bcbcbcb1] ">
              TECHNOLOGIES
            </h2>
            <ul className="list-disc pl-5 font-[Poppins] font-[400] text-[16px] text-[#b0b0b0] ">
              <li>Frontend: {fontend} </li>
              {backend != "Not involved" && <li>Backend: {backend} </li>}
              {devops != "Not involved" && <li>Devops: {devops} </li>}
            </ul>
          </div>
        </div>
        <img
          style={{
            border: "1px solid rgb(77, 128, 237)",
            boxShadow: "rgba(77, 128, 237, 0.25) 0px 0px 16px 8px",
          }}
          className="w-[100%] justify-self-center p-5 cover mt-[2vh] object-top rounded-2xl select-none  "
          src={`./${image}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectShow;

export const Links = ({ name, href }: { name: string; href: string }) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className={`flex flex-col justify-center group hover:cursor-pointer `}
      >
        <span className="relative font-medium text-md">
          {name}
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </span>
      </a>
    </>
  );
};
