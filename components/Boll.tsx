import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Boll = () => {
  const cursorCircle = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    window.addEventListener("mousemove", function (dets) {
      gsap.to(cursorCircle.current, {
        duration: 0.8,
        left: dets.x,
        top: dets.y,
      });
    });
  });
  return (
    <>
      <div
        ref={cursorCircle}
        className="boll hidden lg:block bg-white mix-blend-difference rounded-[50%] h-[30px] w-[30px] fixed z-[999999] shadow-white -translate-x-10 -translate-y-8 pointer-events-none"
      ></div>
    </>
  );
};

export default Boll;
