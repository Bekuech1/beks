"use client";


import React, { use } from "react";

type SkillBarProps = {
  skillName: string;
  skillLevel: string;
  progress: string;
};

const SkillBar: React.FC<SkillBarProps> = ({ skillName, skillLevel, progress }) => {
  return (
    <div className="grid gap-1">
      <div className="flex justify-between">
        <h4 className="text-xl font-bold">{skillName}</h4>
        <h4 className="text-sm font-light">{skillLevel}</h4>
      </div>
      <div className="w-full bg-gray-300 h-2 rounded-md overflow-hidden">
        <div
          className="bg-purple-500 h-full"
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
