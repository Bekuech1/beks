"use client";

import React, { useState, useEffect } from "react";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true); // Show button after scrolling 300px
      } else {
        setShowButton(false); // Hide button when less than 300px
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleNav = () => {
      if (window.scrollY > 300) {
        setShowNav(true); // Show button after scrolling 300px
      } else {
        setShowNav(false); // Hide button when less than 300px
      }
    };

    window.addEventListener("scroll", handleNav);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className="grid">
      <main className="h-screen bg-[#040404} flex justify-center relative">
        <div className="absolute md:top-[100px] top-[200px] sm:size-[600px] size-[360px] rounded-[50%] bg-[#3F1BCF52] opacity-80 blur-[80px]"></div>
        <div className="absolute md:top-[100px] top-[200px] sm:size-[600px] size-[360px] rounded-[50%] border border-[#3F1BCF52]"></div>
        <div className="flex flex-col items-start z-10 w-full gap-10 relative overflow-y-auto mt-20 scrollbar-hide scroll-smooth">
          <Navbar />
          <div className="w-full grid gap-10 px-6 sm:px-20">
            <Hero />
            <Works />
          </div>
          <About />
          <Experience />
          <Footer />
        </div>
      </main>
    </div>
  );
}
