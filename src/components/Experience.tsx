import React from "react";
import Header from "./Header";

const Experience: React.FC = () => {
  return (
    <div 
      className="grid gap-10  pt-24"
      id="experience"
    >
        <Header>
            experience
        </Header>
      <div className="h-[600px] relative overflow-x-auto whitespace-nowrap custom-scrollbar">
        <div className="bg-purple-500 opacity-20 h-2 mt-[264px] w-[1550px]"></div>
        <TopExperience />
        <BottomExperience />
        <div className="flex gap-6 absolute top-[208px] left-[982px]">
          <div className="relative h-fit w-fit">
            <h5 className="text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mb-28 text-center text-sm font-semibold w-32">
              Nov 2023 - Present
            </h5>
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 mt-10 bg-white rounded-full"></div>
            <div className="border-r border-white h-[270px] mt-10"></div>
          </div>
          <div className="grid absolute top-[173px] left-6">
            <h5 className="text-white">Freelance - Fullstack Developer</h5>
            <ul className="text-purple-500 w-[362px] list-disc inline-block">
              <li>Built Groovz - a site where you can create personalised playlists for various music platforms</li>
              <li>Built various portfolio websites</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopExperience: React.FC = () => {
  return (
    <div className="flex gap-6 absolute top-[0.5px] left-[613px]">
      <div className="relative h-fit w-fit">
        <div className="border-r border-white h-[270px]"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full"></div>
        <h5 className="text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mt-14 text-center text-sm font-semibold w-32">
          Aug 2024 - Present
        </h5>
      </div>
      <div className="grid absolute left-6">
        <h5 className="text-white">Rivala - Front-End Developer</h5>
        <ul className="text-purple-500 w-[362px] list-disc inline-block">
          <li>Improved the overall look of the website</li>
          <li>Built a blog section on the website</li>
          <li>
            improved the authentication pages on the website
          </li>
        </ul>
      </div>
    </div>
  );
};

export const BottomExperience: React.FC = () => {
  return (
    <div className="flex gap-6 absolute top-[208px] left-[258.5px]">
      <div className="relative h-fit w-fit">
        <h5 className="text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mb-28 text-center text-sm font-semibold w-32">
          Nov 2023 - June 2024
        </h5>
        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 mt-10 bg-white rounded-full"></div>
        <div className="border-r border-white h-[270px] mt-10"></div>
      </div>
      <div className="grid absolute top-[173px] left-6">
        <h5 className="text-white">Genesys Tech Hub - Front-End Intern</h5>
        <ul className="text-purple-500 w-[362px] list-disc inline-block">
          <li>Built Bookworm -a Book Reading/Summarization site </li>
          <li>Built Bandage -an e-commerce store where you can view items for sale and add them to cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
