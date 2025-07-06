"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(132, 0, 255, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-background text-foreground">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isClient && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/60 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-4 w-full flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Number */}
        <motion.div
          className="glitch mb-8 text-center"
          variants={itemVariants}
        >
          <h1 className="text-zinc-700 dark:text-white text-[6rem] md:text-[10rem] lg:text-[12rem] font-black leading-none tracking-tighter mx-auto">
            404
          </h1>
        </motion.div>

        {/* Main heading */}
        <motion.div className="overflow-hidden mb-6" variants={itemVariants}>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-600 dark:text-white text-center"
            style={{
              fontFamily: "Khula",
              fontWeight: 800,
              textShadow: "rgba(255, 255, 255, 0.4) 0px 0px 8px",
            }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
              <span>Oops!</span>
              <span>Page</span>
              <span>not found</span>
            </div>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center">
            The page you&apos;re looking for seems to have vanished into the digital
            void. But don&apos;t worry, let&apos;s get you back on track!
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          variants={itemVariants}
        >
          <motion.div
            className="rounded-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <button
              onClick={() => router.push("/")}
              className="group px-8 py-4 bg-transparent border-2 border-muted-foreground text-muted-foreground font-semibold rounded-lg transition-all duration-300 hover:border-purple-500 hover:text-purple-500 hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
                Go Back
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Additional info */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <p className="text-sm text-muted-foreground">
            Error Code: 404 | Page Not Found
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000" />
    </div>
  );
};

export default NotFound;
