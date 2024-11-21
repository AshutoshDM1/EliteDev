import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef, useState } from "react";

const Devfolio = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    const x = (e.clientX - centerX) * 0.2; // Adjust multiplier for strength
    const y = (e.clientY - centerY) * 0.2;
    
    setPosition({ x, y });
  };

  const handleHover = () => {
    gsap.to(".button", {
      y: "-50px",
      ease: "expo.out",
    });
  };

  const handleHoverLeave = () => {
    gsap.to(".button", {
      y: 0,
    });
    // Reset position when mouse leaves
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="page1 min-h-screen max-w-[65rem] mx-auto  flex flex-col justify-center items-center px-6 lg:px-16 text-black relative z-50 py-[20vh] "
    >
      <section className="text-center lg:text-left pb-12 lg:pb-[10vh] ">
        <h1 className="text-[30px] lg:text-[60px] font-[400] leading-tight">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its
          users.&apos;
        </h1>
      </section>
      <div className="w-full border-b-[1px] border-[#6767677a] mb-[7vh] ">
        <p className="italic text-[#696969dc] ">This is me.</p>
      </div>
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full max-w-5xl gap-10">
        <div className="text-center lg:text-left w-fit">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-normal mb-6"
          >
            Hi, I&apos;m Ashutosh Tiwari.
          </motion.h2>
          <motion.div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverLeave}
            onClick={() => {
              window.open("https://github.com/AshutoshDM1", "_blank");
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ x: position.x, y: position.y }}
            transition={{ 
              duration: 0.5,
              x: { duration: 0.2, ease: "easeOut" },
              y: { duration: 0.2, ease: "easeOut" }
            }}
            className="text-white h-[50px] w-[300px] rounded-full cursor-pointer select-none overflow-hidden"
          >
            <div className="button h-[100px] w-full flex flex-col">
              <div className="h-[50px] bg-black flex items-center justify-center gap-4 ">
                <span>
                  <MoveUpRight />
                </span>{" "}
                Get in Touch
              </div>
              <div className="h-[50px] bg-[#f1f1f1] text-black flex items-center justify-center gap-4 ">
                <span>
                  <MoveUpRight />
                </span>{" "}
                Get in Touch
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div className="w-full lg:w-1/2 text-center text-[#1f1f1fdb] font-[Khula] font-medium text-[24px]  lg:text-left leading-[32px] ">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            I&apos;m a 19-year-old passionate fullstack web developer dedicated
            to turning ideas into creative solutions. I specialize in creating
            seamless and intuitive user experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            I&apos;m involved in every step of the process: from discovery and
            design to development, testing, and deployment. I focus on
            delivering high-quality, scalable results that drive positive user
            experiences.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default Devfolio;
