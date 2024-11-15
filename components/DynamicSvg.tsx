"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DynamicSvg = () => {
  const [dimensions, setDimensions] = useState({
    width: 1269,
    height: 945,
    centerY: 472.5,
  });

  const verticalLines = [
    { x: 0.2313, label: "23.13%" },
    { x: 0.3563, label: "35.63%" },
    { x: 0.38, label: "38%" },
    { x: 0.5, label: "50%" },
    { x: 0.62, label: "62%" },
    { x: 0.6437, label: "64.37%" },
    { x: 0.7687, label: "76.87%" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({
        width,
        height,
        centerY: height / 2,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVerticaLinePath = (x: number) => {
    const xPos = x * dimensions.width;
    return `M ${xPos} ${dimensions.centerY} L ${xPos} 0 M ${xPos} ${dimensions.centerY} L ${xPos} ${dimensions.height}`;
  };

  // Fixed polygon paths to create perfect V shape
  const leftPolygonPath = `
    M ${0.38 * dimensions.width} ${dimensions.height * 0.67}
    L ${0.5 * dimensions.width} ${dimensions.height * 0.77}
    L ${0.5 * dimensions.width} ${dimensions.height * 0.81}
    L ${0.38 * dimensions.width} ${dimensions.height * 0.71}
    Z
  `;

  const rightPolygonPath = `
    M ${0.62 * dimensions.width} ${dimensions.height * 0.67}
    L ${0.5 * dimensions.width} ${dimensions.height * 0.77}
    L ${0.5 * dimensions.width} ${dimensions.height * 0.81}
    L ${0.62 * dimensions.width} ${dimensions.height * 0.71}
    Z
  `;
  const svg = useRef<SVGSVGElement | null>(null);
  useGSAP(() => {
    gsap.to(".mainsvg", {
      duration: 3,
      y: "0",
      onComplete: () => {
        tl1.play();
      },
    });

    const tl1 = gsap.timeline({ repeat: -1, paused: true });
    tl1.to([".left", ".right"], {
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    tl1.to([".left", ".right"], {
      duration: 1,
      fill: "gray",
    });
    tl1.to([".left", ".right"], {
      duration: 2,
      y: "400",
    });
    const tl2 = gsap.timeline();
    tl2.to(".main", {
      background: "#ffffff",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".page1",
        start: "top 70%",
        end: "top 0% ",
        scrub: 1,
      },
    });
    tl2.to(svg.current, {
      opacity: 0,
      ease: "linear",
      scrollTrigger: {
        trigger: ".page1",
        start: "top 50%",
        end: "top 20% ",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <div
        className="h-[100vh] w-full absolute z-[-50] overflow-hidden "
      >
        <svg
          ref={svg}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="mainsvg w-full h-full absolute top-0 left-0 translate-y-[-100%] "
        >
          {verticalLines.map((line, index) => (
            <path
              key={index}
              d={getVerticaLinePath(line.x)}
              stroke="#2C2C2C"
              strokeWidth="2"
              fill="none"
              opacity="1"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            />
          ))}
        </svg>

        {/* Left Polygon */}
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="left w-full h-full absolute top-0 left-0 opacity-0 "
        >
          <path
            d={leftPolygonPath}
            stroke="gray"
            strokeWidth="1"
            fill="var(--svg-line)"
            fillOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          />
        </svg>

        {/* Right Polygon */}
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="right w-full h-full absolute top-0 left-0 opacity-0"
        >
          <path
            d={rightPolygonPath}
            stroke="gray"
            strokeWidth="1"
            fill="var(--svg-line)"
            fillOpacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
          />
        </svg>
      </div>
    </>
  );
};

export default DynamicSvg;
