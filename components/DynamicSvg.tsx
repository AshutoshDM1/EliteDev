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
    return {
      top: `M ${xPos} ${dimensions.centerY} L ${xPos} 0`,
      bottom: `M ${xPos} ${dimensions.centerY} L ${xPos} ${dimensions.height}`,
    };
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
  const svg = useRef(null);
  useGSAP(() => {
    // Animate the vertical lines first
    gsap.to([".line-top", ".line-bottom"], {
      delay: 3.2,
      duration: 3,
      strokeDashoffset: 0,
      ease: "power1.inOut",
      onComplete: () => {
        tl1.play();
      },
    });

    const tl1 = gsap.timeline({ delay: .5, repeat: -1, paused: true });

    // Draw the polygons
    tl1
      .to(".polygon-path", {
        duration: 1.5,
        strokeDashoffset: 0,
        ease: "power1.inOut",
      })
      // Fill the polygons
      .to(".polygon-path", {
        duration: 1,
        fill: "#2C2C2C",
      })
      .to(".polygon-path", {
        y: 400,
        duration: 2,
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
    tl2
      .to(svg.current, {
        opacity: 0,
        ease: "linear",
        scrollTrigger: {
          trigger: ".page1",
          start: "top 60%",
          end: "top 50% ",
          scrub: 1,
        },
      })
      .to(".sideline1", {

        scrollTrigger: {
          trigger: ".page1",
          start: "top 60%",
          end: "top 50% ",
          scrub: 1,
        },
      })
      .to(".sideline2", {

        scrollTrigger: {
          trigger: ".page1",
          start: "top 60%",
          end: "top 50% ",
          scrub: 1,
        },
      })
      .to(".navText", {
        color: "black",
        scrollTrigger: {
          trigger: ".page1",
          start: "top 60%",
          end: "top 50% ",
          scrub: 1,
        },
      });
  });
  return (
    <>
      <div
        ref={svg}
        className="h-[100vh] w-full absolute z-[-50] overflow-hidden "
      >
        <svg
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="mainsvg"
        >
          {verticalLines.map((line, index) => {
            const paths = getVerticaLinePath(line.x);
            return (
              <g key={index}>
                <path
                  d={paths.top}
                  stroke="#2C2C2C"
                  strokeWidth="2"
                  fill="none"
                  opacity="1"
                  strokeDasharray="100%"
                  strokeDashoffset="100%"
                  className="line-top"
                />
                <path
                  d={paths.bottom}
                  stroke="#2C2C2C"
                  strokeWidth="2"
                  fill="none"
                  opacity="1"
                  strokeDasharray="100%"
                  strokeDashoffset="100%"
                  className="line-bottom"
                />
              </g>
            );
          })}
        </svg>

        {/* Left Polygon */}
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="left w-full h-full absolute top-0 left-0"
        >
          <path
            d={leftPolygonPath}
            stroke="#2C2C2C"
            strokeWidth="2"
            fill="none"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset="100"
            className="polygon-path"
          />
        </svg>

        {/* Right Polygon */}
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="right w-full h-full absolute top-0 left-0"
        >
          <path
            d={rightPolygonPath}
            stroke="#2C2C2C"
            strokeWidth="2"
            fill="none"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset="100"
            className="polygon-path"
          />
        </svg>
      </div>
    </>
  );
};

export default DynamicSvg;
