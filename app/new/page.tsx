"use client";
import ProjectShow from "@/components/ShowProject";
import { useState } from "react";

export default function Scene() {
  const [showProject, setShowProject] = useState(false); // State to manage visibility

  const handleButtonClick = () => {
    setShowProject((prev) => !prev); // Toggle visibility
  };

  return (
    <>
      <div className="min-h-[100vh] w-full bg-black">
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {showProject ? "Hide Project" : "Show Project"}
        </button>

        {showProject && ( // Conditionally render ProjectShow
          <ProjectShow
            heading="Your Heading Here"
            description="Your Description Here"
            fontend="Your Frontend Tech Here"
            backend="Your Backend Tech Here"
            image="./image5.png" // Ensure the image path is correct
          />
        )}
      </div>
    </>
  );
}
