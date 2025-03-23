import { motion } from "framer-motion";
import ScrollReveal from "./block/TextAnimations/ScrollReveal/ScrollReveal";
import MagnetButton from "./MagnetButton";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Devfolio = () => {
  return (
    <div className="page1 min-h-screen max-w-[65rem] mx-auto  flex flex-col justify-center items-center px-6 lg:px-16 text-black relative z-50 py-[20vh] ">
      <section className="text-center lg:text-left pb-12 lg:pb-[10vh]  ">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={60}
        >
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its
          users.&apos;
        </ScrollReveal>
      </section>
      <div className="w-full border-b-[1px] border-[#6767677a] mb-[7vh] ">
        <p className="italic text-[#696969dc] ">This is me.</p>
      </div>
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full max-w-5xl gap-10">
        <div className="text-center lg:text-left w-fit flex flex-col items-center lg:items-start">
          <motion.h2 className=" mb-6">
            <TypewriterEffect
              className="text-[40px] md:text-[50px]  font-normal mb-6"
              words={[
                { text: "I'm " },
                { text: "Ashutosh" },
                { text: "Tiwari" },
              ]}
            />
          </motion.h2>
          <MagnetButton
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1rxpUnZMB05N8EhgQGDqK6czPLs_ls8CV/view?usp=sharing",
                "_blank"
              );
            }}
            width={"18rem"}
            height={"4rem"}
            className="bg-[#0A0A0A]"
          >
            <span className="text-xl md:text-2xl font-medium text-white leading-none">
              Download Resume
            </span>
          </MagnetButton>
        </div>

        {/* Right Column */}
        <motion.div className="w-full lg:w-1/2 text-center text-[#1f1f1fdb] font-[Khula] font-medium text-[24px]  lg:text-left leading-[32px] ">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            I&apos;m a 20-year-old passionate fullstack web developer dedicated
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
