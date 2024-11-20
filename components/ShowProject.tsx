import { scrollmain } from "@/atoms";
import { ArrowUpRight } from "lucide-react";
import { X } from "lucide-react";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";

type ReactCompo = {
  heading: string;
  description: string;
  fontend: string;
  backend: string;
  image: string;
  onClose?: () => void;
};

const ProjectShow: React.FC<ReactCompo> = ({
  heading,
  description,
  fontend,
  backend,
  image,
  onClose,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [scroll, setscroll] = useRecoilState(scrollmain);

  return (
    <div className="min-h-[120vh] overflow-hidden z-[999999] w-full flex flex-col items-center justify-center h-screen bg-black text-white">
      <button
        onClick={onClose}
        className="absolute top-4 right-16 text-white hover:rotate-90 ease-in-out duration-200 "
      >
        <X size={40} />
      </button>
      <div className="max-w-[1000px] mx-auto">
        <div className="mt-[5vh] flex w-full justify-between">
          <h1 className="text-[96px] font-[400] font-[Khula] mb-4 select-none cursor-pointer ">
            {heading}
          </h1>
          <ArrowUpRight className="flex justify-center items-center mt-8 h-[48px] w-[48px] select-none cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-[16px] text-[#bcbcbc] font-[300] mb-8 pb-4 border-b-[1px] border-[#bcbcbcb1]  ">
              DESCRIPTION
            </h2>
            <p className="font-[Poppins] font-[400] text-[16px] text-[#b0b0b0] ">
              {description}
            </p>
          </div>
          <div>
            <h2 className="text-[16px] text-[#bcbcbc] font-[300] mb-8 pb-4 border-b-[1px] border-[#bcbcbcb1] ">
              TECHNOLOGIES
            </h2>
            <ul className="list-disc pl-5 font-[Poppins] font-[400] text-[16px] text-[#b0b0b0] ">
              <li>Frontend: {fontend} </li>
              <li>Backend: {backend} </li>
            </ul>
          </div>
        </div>
        <img
          style={{
            border: "1px solid rgb(77, 128, 237)",
            boxShadow: "rgba(77, 128, 237, 0.25) 0px 0px 16px 8px",
          }}
          className="w-full p-5 cover mt-[5vh] object-top rounded-2xl select-none  "
          src={`./${image}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectShow;

ProjectShow.defaultProps = {
  heading: "Default Heading",
  description: "Default Description",
  fontend: "Default Frontend Tech",
  backend: "Default Backend Tech",
  image: "defaultImage.png",
};
