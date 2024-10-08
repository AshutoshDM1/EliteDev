import Spline from "@splinetool/react-spline/next";
export default function Scene() {
  return (
    <>
      <main>
        <Spline
          className="min-h-[100vh] w-full absolute top-0 z-[-10] overflow-hidden"
          scene="https://prod.spline.design/mzztoaA51Nx8Mdty/scene.splinecode"
        />
      </main>
    </>
  );
}
