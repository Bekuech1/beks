"use client";

import React, { useState, useEffect } from "react";

import About from "@/components/About";
import ContactForm from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {

  

  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);  // Show button after scrolling 300px
      } else {
        setShowButton(false);  // Hide button when less than 300px
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
        setShowNav(true);  // Show button after scrolling 300px
      } else {
        setShowNav(false);  // Hide button when less than 300px
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
      behavior: "smooth",  // Smooth scroll effect
    });
  };

  return (
    <div className="grid">
      <main className="grid gap-10">
          <Hero />

          <div>
            <button
              onClick={scrollToTop}
              className={`fixed bottom-6 right-10 p-3 border-2 border-gray-800 hover:scale-[1.15] text-white rounded-full shadow-lg ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity`}
            >
              <img src="p-arrow.svg" alt="" className="rotate-90" />
            </button>
            <Navbar 
              showButton={showNav}
            />
            <Works />
            <About />
            <Skills />
            <Experience />
            <ContactForm />
          </div>
          

          

          
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
