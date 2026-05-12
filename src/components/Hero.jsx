import React from "react";
import pic from "../assets/pic1.png";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto  px-6 py-16 md:py-14">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div>
          <p className="text-sm font-medium mb-3">Hello, I’m</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Chanchal Jaiswal
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
            Software Developer
          </h2>

          <p className="text-gray-600 leading-7 max-w-xl mb-8">
            “I build clean, responsive and user-friendly full-stack web
            applications using React, JavaScript, Tailwind CSS, Node.js,
            Express, and MongoDB. I enjoy creating practical projects, building
            REST APIs, and improving my development skills every day.”
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-black text-white"
            >
              View Projects
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border hover:bg-black hover:text-white transition"
            >
              Resume
            </a>

            <a href="#contact" className="px-5 py-3 rounded-lg border">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex justify-center">
          <img
            src={pic}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
