import React, { useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface CardProps {
  containerRef: RefObject<HTMLDivElement>;
  src: string;
  top: string;
  left: string;
  className?: string;
}

const About: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:min-h-[1100px] sm:min-h-[900px] min-h-[800px] w-full justify-center items-center overflow-hidden text-center">
      <h2 className="berlin-sans relative md:text-[36px] text-[24px] font-normal text-white leading-[100%] uppercase w-full">
        Beyond the screen
      </h2>
      <p className="geist relative md:text-[16px] text-[12px] font-normal text-white leading-[120%] max-w-xl mt-4 -z-10 px-8">
        Lies a world of endless possibilities, where imagination meets reality.
        It's a realm filled with vibrant colors, captivating stories, and
        experiences waiting to unfold. Dive in and explore the adventures that
        await! Each corner reveals new wonders, from enchanted forests to
        bustling cities. Meet characters that inspire and challenge you, each
        with their own tales to tell. Feel the thrill of discovery as you
        navigate through uncharted territories. With every click, a new chapter
        begins, inviting you to shape
      </p>
      <Cards />
    </section>
  );
};

const Cards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/beko1.jpg"
        top="2%"
        left="3%"
        className="lg:w-[277px] lg:h-[376px] sm:w-[227px] sm:h-[260px] w-[149px] h-[197px]"
      />
      <Card
        containerRef={containerRef}
        src="/beko2.jpg"
        top="2%"
        left="71%"
        className="lg:w-[279px] lg:h-[368px] sm:w-[209px] sm:h-[288px] size-[174px]"
      />
      <Card
        containerRef={containerRef}
        src="/beko3.jpg"
        top="65%"
        left="71%"
        className="lg:w-[293px] lg:h-[386px] sm:w-[203px] sm:h-[266px] w-[184px] h-[219px]"
      />
      <Card
        containerRef={containerRef}
        src="/beko4.jpg"
        top="65%"
        left="3%"
        className="lg:w-[338px] lg:h-[328px] sm:w-[258px] sm:h-[238px] w-[145px] h-[159px]"
      />
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  top,
  left,
  className,
}) => {
  const [zIndex, setZIndex] = useState<number>(0);

  const updateZIndex = (): void => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute object-cover rounded-xl cursor-grab",
        className
      )}
      src={src}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.2}
    />
  );
};

export default About;
