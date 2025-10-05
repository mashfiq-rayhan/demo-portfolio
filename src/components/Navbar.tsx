"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-20 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Mashfiq Rayhan</div>
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#skills" className="hover:text-yellow-400">Skills</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="flex flex-col text-center mt-2 md:hidden gap-2">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
