"use client";

import React, { useState } from "react";
import Header from './Header';

const Works = () => {

  const selectedWorks = [
    {
      name: "Bandage",
      techStacks: [
        { name: "React", imageUrl: "/images/react.png" },
        { name: "Next.js", imageUrl: "/images/nextjs.png" },
        { name: "Tailwind CSS", imageUrl: "/images/tailwind.png" },
        { name: "Vercel", imageUrl: "/images/vercel.png" },
      ],
      liveLink: "https://bandage-8ou6.vercel.app",
      githubLink: "https://github.com/Bekuech1/bandage",
      previewImage: "/bandage.png",
    },
    {
      name: "Nesky",
      techStacks: [
        { name: "React", imageUrl: "/images/react.png" },
        { name: "Redux", imageUrl: "/images/redux.png" },
        { name: "Node.js", imageUrl: "/images/nodejs.png" },
        { name: "MongoDB", imageUrl: "/images/mongodb.png" },
      ],
      liveLink: "https://nesky.vercel.app",
      githubLink: "https://github.com/Bekuech1/Nesky",
      previewImage: "/nesky.png",
    },
    {
      name: "Bookworm",
      techStacks: [
        { name: "Gatsby", imageUrl: "/images/gatsby.png" },
        { name: "GraphQL", imageUrl: "/images/graphql.png" },
        { name: "Netlify", imageUrl: "/images/netlify.png" },
      ],
      liveLink: "https://game-fe-6-fyqb.vercel.app",
      githubLink: "https://github.com/GenesysLearnable/BOOKS-FE_4",
      previewImage: "/bookworm.png",
    },
    {
      name: "Bekuechi",
      techStacks: [
        { name: "Gatsby", imageUrl: "/images/gatsby.png" },
        { name: "GraphQL", imageUrl: "/images/graphql.png" },
        { name: "Netlify", imageUrl: "/images/netlify.png" },
      ],
      liveLink: "https://blog-platform.com",
      githubLink: "https://github.com/your-username/blog-platform",
      previewImage: "/me.png",
    },
    {
      name: "Groovz -In Progess",
      techStacks: [
        { name: "Gatsby", imageUrl: "/images/gatsby.png" },
        { name: "GraphQL", imageUrl: "/images/graphql.png" },
        { name: "Netlify", imageUrl: "/images/netlify.png" },
      ],
      liveLink: "https://Groovz.app.vercel",
      githubLink: "https://github.com/Victorthedev/Music-For-You-Frontend-Spotify",
      previewImage: "/groovz.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedWorks.length);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentWork = selectedWorks[currentIndex];
  const nextWork = selectedWorks[(currentIndex + 1) % selectedWorks.length];
  const workLength = selectedWorks.length



  return (
        <div 
          className="relative pt-24"
          id="works"
        >
          <img 
            src={nextWork.previewImage} 
            alt="selectedwork"
            className="w-[340px] h-auto rounded-[16px] absolute top-[150px] -z-10 opacity-15 cursor-pointer" 
          />
          <Header>
            selected works
          </Header>
          <div className="w-[954px] mx-auto mt-14 grid gap-10">
            <div className="flex justify-between">
              <img 
                src={currentWork.previewImage} 
                alt="selectedwork"
                className="w-[520px] h-[255px] rounded-[16px] cursor-pointer" 
              />
              <div className="grid w-[300px] h-fit text-left my-auto gap-4">
                <h1 className="uppercase font-bold text-5xl">{currentWork.name}</h1>
                <div>list tech stack used</div>
                <div className="capitalize text-xl font-medium flex gap-3 w-fit">
                  <a 
                    href={currentWork.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="p-arrow.svg" alt="" className="rotate-[135deg] hover:scale-[1.15]"/>
                  </a>
                  <a 
                    href={currentWork.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="p-github.svg" alt="" className="hover:scale-[1.15]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid gap-[50px]">
              <div className="mx-auto flex gap-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="border-2 border-gray-800 rounded-full p-3 cursor-pointer hover:scale-[1.15]"
                >
                  <img src="p-arrow.svg" alt="" />
                </button>
                <button
                  onClick={handleNext}
                  className="border-2 border-gray-800 rounded-full p-3 cursor-pointer hover:scale-[1.15]"
                >
                  <img src="p-arrow.svg" alt="" className="rotate-180 " />
                </button>
              </div>
              <div className="flex gap-4">
                {Array.from({ length: workLength }, (_, index) => (
                  <div
                    key={index}
                    className={`h-[2px] w-full transition-all duration-300 ${
                      currentIndex === index ? "bg-white  scale-110" : "bg-gray-800"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
  )
}

export default Works