import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Portfolio() {
  const projects = [
    {
      title: "MangaHaven",
      imageurl: "image1.png",
      Line1: "A Full Stack Next.js Manga Reading Site",
      Line2: "With Simple and Animated UI , have NextAuth , CSR Rendering",
    },
    {
      title: "Insight AI",
      imageurl: "image2.png",
      Line1: "A Full Stack AI Chating Site",
      Line2:
        "Made With Frontend in React and Backend in HONO , Cloudflare and Firebase",
    },
    {
      title: "Web3 Wallet",
      imageurl: "image3.png",
      Line1: "Its A Web2 base Web3 Wallet Making Site",
      Line2:
        "Made in Next.js useing Solana Wallet Adapter and Some Web3 Liberay  ",
    },
    {
      title: "Prime Wallet",
      imageurl: "image4.png",
      Line1: "This is a Simple Money Wallet Website",
      Line2:
        "This is A Full Stack Site Made in React + Express with JWT Auth , Mongo , etc",
    },
  ];
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".Animatedheading h1", {
      y: 200,
      stagger: 0.2,
      duration: 0.5,
      ease: "elastic.out(1,0.8)",
      scrollTrigger: {
        trigger: ".page3",
        start: "top 80%",
        end: "top -10%",
        scrub: 1,
        fastScrollEnd: true,
      },
    });
  });
  return (
    <>
      <div className="page3 min-h-screen w-full p-[3vh] ">
        <div className="flex flex-col justify-center items-start h-[30%] max-w-[85%] mx-auto ">
          <div className="Animatedheading text-white font-[Asap] font-bold text-[6rem] italic uppercase flex overflow-hidden ">
            <h1>P</h1>
            <h1>o</h1>
            <h1>r</h1>
            <h1>t</h1>
            <h1>f</h1>
            <h1>l</h1>
            <h1>i</h1>
            <h1>o</h1>
          </div>
          <h1 className="text-white font-[Asap] font-bold text-[2rem] ">
            Take a look at some of my work!
          </h1>
          <h1 className="text-[#b0b0b0] font-[Asap] font-semibold text-[1.2rem] ">
            Explore experiences crafted with precision and passion, aimed at
            delivering seamless experiences that are always fun and effective.
          </h1>
        </div>
        <div className="h-fit w-full flex justify-evenly items-center px-4 pt-[8vh] flex-wrap gap-[10vh] ">
          {projects.map((item) => {
            return (
              <>
                <div key={item.title} className="h-[50vh] w-[60vh]">
                  <img
                    className="object-cover h-[70%] w-full border-[2px] border-[#b0b0b0] rounded-[15px] overflow-hidden"
                    alt="This is a placeholder image."
                    height={400}
                    width={400}
                    src={item.imageurl}
                  ></img>
                  <h1 className="text-[#ffffff] font-[Asap] font-bold text-[2rem] italic uppercase px-3 ">
                    {item.title}
                  </h1>
                  <h1 className="text-[#d5c0ff] font-[Asap] font-bold text-[1.2rem]  uppercase px-3 ">
                    {item.Line1}{" "}
                  </h1>
                  <h1 className="text-[#d5c0ff] font-[Asap] font-bold text-[1.2rem]  uppercase px-3 ">
                    {item.Line2}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
