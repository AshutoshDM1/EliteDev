import CountUp from "./block/TextAnimations/CountUp/CountUp";
import LogoSvg from "./LogoSvg";

const Loading = () => {
  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 34%, rgba(230,254,255,1) 93%, rgba(222,250,255,1) 100%)",
        }}
        className="loading min-h-screen bg-white w-full fixed z-[99999999999] flex justify-center items-center "
      >
        <LogoSvg />
        <div className="loading-text absolute right-10 bottom-10 text-[#252525] text-[50px] font-bold ">
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text"
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
