import LogoSvg from "./LogoSvg";

const Loading = () => {
  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 34%, rgba(230,254,255,1) 93%, rgba(222,250,255,1) 100%)",
        }}
        className="loading min-h-screen bg-white w-full fixed z-[99] flex justify-center items-center "
      >
        <LogoSvg />
      </div>
    </>
  );
};

export default Loading;
