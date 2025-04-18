import React from 'react';
import SkillBar from "@/components/Stack";
import Header from "@/components/Header";

const Skills = () => {
  return (
    <div
      className='pt-24' 
      id="skills"
    >
        <Header>skills</Header>

        <div className="grid gap-8 w-[954px] mx-auto mt-14">
            <SkillBar skillName="HTML" skillLevel="Expert" progress="100%" />
            <SkillBar skillName="CSS" skillLevel="Expert" progress="100%" />
            <SkillBar skillName="Tailwind & Bootstrap" skillLevel="Expert" progress="100%" />
            <SkillBar skillName="JavaScript" skillLevel="Expert" progress="90%" />
            <SkillBar skillName="React" skillLevel="Expert" progress="90%" />
            <SkillBar skillName="Next" skillLevel="Advanced" progress="70%" />
            <SkillBar skillName="Figma" skillLevel="Intermediate" progress="50%" />
            <SkillBar skillName="Node js" skillLevel="Intermediate" progress="50%" />
        </div>
    </div>
  )
}

export default Skills