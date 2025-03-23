import { ArrowUpRight } from "lucide-react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import MagnetButton from "./MagnetButton";
import { TextAnimate } from "./magicui/text-animate";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
type ReactCompo = {
  heading: string;
  description: string;
  herf: string;
  fontend: string;
  backend: string;
  devops: string;
  image: string;
  github?: string;
  onClose?: () => void;
};

const getProjectColors = (heading: string): { [key: string]: string } => {
  switch (heading) {
    case "MangaHaven":
      return {
        "Next.js": "bg-[#FF3366]",
        "Tailwind CSS": "bg-[#38BDF8]",
        "Shadcn UI": "bg-[#09090B]",
        Recoil: "bg-[#3578E5]",
        "Framer Motion": "bg-[#FF5733]",
        "Nextjs Backend": "bg-[#a0a0a0]",
        NextAuth: "bg-[#7952B3]",
        Prisma: "bg-[#2D3748]",
        PostgreSQL: "bg-[#336791]",
        Cloudinary: "bg-[#3448C5]",
        Docker: "bg-[#2496ED]",
        AWS: "bg-[#FF9900]",
        "Github Actions": "bg-[#2088FF]",
      };
    case "Insight AI":
      return {
        React: "bg-[#61DAFB]",
        TypeScript: "bg-[#3178C6]",
        Recoil: "bg-[#764ABC]",
        "Tailwind CSS": "bg-[#06B6D4]",
        FireBase: "bg-[#FFCA28]",
        Hono: "bg-[#E6007A]",
        "Gemmini API": "bg-[#00A67E]",
        Docker: "bg-[#0DB7ED]",
        "Cloudflare Workers": "bg-[#F38020]",
      };
    case "Obsy Asency":
      return {
        HTML: "bg-[#E34F26]",
        CSS: "bg-[#1572B6]",
        GSAP: "bg-[#88CE02]",
        ScrollTrigger: "bg-[#4A154B]",
        "Locomotive Scroll": "bg-[#F43059]",
      };
    case "PrimeWallet":
      return {
        React: "bg-[#00D8FF]",
        "Material UI": "bg-[#007FFF]",
        Recoil: "bg-[#3578E5]",
        GSAP: "bg-[#88CE02]",
        "Express.js": "bg-[#000000]",
        MongoDB: "bg-[#47A248]",
        Mongooes: "bg-[#880000]",
        JWT: "bg-[#D63AFF]",
        Bcrypt: "bg-[#525DDC]",
      };
    case "Apple Vision Pro":
      return {
        HTML: "bg-[#DD4B25]",
        CSS: "bg-[#254BDD]",
        GSAP: "bg-[#A6E61D]",
        ScrollTrigger: "bg-[#7B3FA0]",
        "Locomotive Scroll": "bg-[#FF1B5B]",
      };
    default:
      return {
        // fallback colors
        "Next.js": "bg-[#FF3366]",
        React: "bg-[#61DAFB]",
        // ... other default colors
      };
  }
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
  const projectColors = getProjectColors(heading);

  return (
    <div className="projectShow translate-y-[100%] rounded-t-[35%] fixed inset-0 z-[999999] w-full flex flex-col items-center justify-center bg-black text-white px-5">
      <motion.button
        onClick={onClose}
        className="absolute top-4 right-16 text-white hover:rotate-[180deg] ease-in-out duration-200"
      >
        <X size={70} />
      </motion.button>
      <div className="h-full max-w-[1000px] mx-auto ">
        <a href={herf} target="_blank">
          <div className="sm:mt-[2vh] flex w-full sm:justify-start sm:items-start gap-10 mt-20 items-center justify-center">
            <h1 className="text-[48px] sm:text-[72px] lg:text-[96px]  font-[400] font-[Khula] mb-4 select-none cursor-pointer ">
              {heading}
            </h1>
            <MagnetButton
              className="hidden lg:block"
              width={"4rem"}
              height={"4rem"}
              magneticStrength={25}
              magneticContentStrength={50}
            >
              <ArrowUpRight className="mt-10" size={80} />
            </MagnetButton>
          </div>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <div>
              <div className="flex sm:justify-start justify-center gap-10">
                <InteractiveHoverButton
                  href={github}
                  className="bg-blue-500 h-9 w-fit flex items-center "
                >
                  GitHUb
                </InteractiveHoverButton>{" "}
                <InteractiveHoverButton
                  href={herf}
                  className="bg-green-500 h-9 w-fit flex items-center "
                >
                  Live Link
                </InteractiveHoverButton>
              </div>
              <div className="mt-10">
                <TextAnimate
                  duration={2}
                  delay={0.1}
                  animation="blurIn"
                  as="h1"
                >
                  {description}
                </TextAnimate>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[16px] text-[#bcbcbc] font-[300] mb-5 pb-4 border-b-[1px] border-[#bcbcbcb1] ">
              TECHNOLOGIES
            </h2>
            <div className="flex flex-wrap gap-2 font-[Poppins] text-[14px]">
              {fontend.split(",").map((tech, index) => {
                const techTrim = tech.trim();
                return (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full cursor-pointer ${
                      projectColors[techTrim] || "bg-[#FF3366]"
                    } text-white`}
                  >
                    {techTrim}
                  </span>
                );
              })}

              {backend !== "Not involved" &&
                backend.split(",").map((tech, index) => {
                  const techTrim = tech.trim();
                  return (
                    <span
                      key={`backend-${index}`}
                      className={`px-3 py-1 rounded-full cursor-pointer ${
                        projectColors[techTrim] || "bg-[#4D7C0F]"
                      } text-white`}
                    >
                      {techTrim}
                    </span>
                  );
                })}

              {devops !== "Not involved" &&
                devops.split(",").map((tech, index) => {
                  const techTrim = tech.trim();
                  return (
                    <span
                      key={`devops-${index}`}
                      className={`px-3 py-1 rounded-full cursor-pointer ${
                        projectColors[techTrim] || "bg-[#6366F1]"
                      } text-white`}
                    >
                      {techTrim}
                    </span>
                  );
                })}
            </div>
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
