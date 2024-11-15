import { MoveUpRight } from "lucide-react";
const Devfolio = () => {

  return (
    <div className="page1 min-h-screen max-w-[65rem] mx-auto  flex flex-col justify-center items-center px-6 lg:px-16 text-black relative z-50 ">
      <section className="text-center lg:text-left pb-12 lg:pb-[10vh] ">
        <h1 className="text-[60px] lg:text-6xl font-[400] leading-tight">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.&apos;
        </h1>
      </section>
      <div className="w-full border-b-[1px] border-[#6767677a] mb-[7vh] ">
        <p className="italic text-[#696969dc] ">This is me.</p>
      </div>
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full max-w-5xl gap-10">
        <div className="text-center lg:text-left w-fit">
          <h2 className="text-3xl font-normal mb-6">
            Hi, I&apos;m Ashutosh Tiwari.
          </h2>
          <button className="button bg-black text-white px-6 py-3 rounded-full flex items-center gap-2">
            <span>
              <MoveUpRight />
            </span>{" "}
            Get in Touch
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 text-center text-[#1f1f1fdb] font-[Khula] font-medium text-[24px]  lg:text-left leading-[32px] ">
          <p className="">
            I&apos;m a 17-year-old passionate fullstack web developer dedicated to
            turning ideas into creative solutions. I specialize in creating
            seamless and intuitive user experiences.
          </p>
          <p className="mt-4">
            I&apos;m involved in every step of the process: from discovery and design
            to development, testing, and deployment. I focus on delivering
            high-quality, scalable results that drive positive user experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Devfolio;
