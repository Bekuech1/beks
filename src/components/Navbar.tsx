"use client";

import React, { PropsWithChildren } from "react";
import Link from "next/link";

type NavbarProps = PropsWithChildren<{
  showButton?: boolean;
}>;

const Navbar: React.FC<NavbarProps> = ({ showButton }) => {
  return (
    <nav
      className={`bg-black bg-opacity-70 py-4 sticky top-0 z-10 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity`}
      id="nav"
    >
      <div className="container mx-auto flex justify-between items-center rounded-full border-[2px] border-gray-800 w-fit">
      <Link
        href="#works"
        className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-purple-600"
      >
        Work
      </Link>
      <Link
        href="#about"
        className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-purple-600"
      >
        About
      </Link>
      <Link
        href="#skills"
        className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-purple-600"
      >
        Skills
      </Link>
      <Link
        href="#experience"
        className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-purple-600"
      >
        Experience
      </Link>
      <Link
        href="#contact"
        className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-purple-600"
      >
        Contact
      </Link>

      </div>
    </nav>
  );
};

export default Navbar;

