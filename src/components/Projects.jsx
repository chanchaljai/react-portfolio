// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce App",
    description: "auth product cart order and address.",
    link: "https://ecom-project1-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "School Management System",
    description: "Building......",
    link: "https://school-frontend-orpin.vercel.app/",
  },
  {
    id: 3,
    title: "Landing Page 1",
    description:
      "Responsive Landing page design with the help of html and css only.",
    link: "https://landimg-page-1.vercel.app/",
  },
  {
    id: 4,
    title: "Landing Page 2",
    description:
      "Responsive Landing page design with the help of html and css only.",
    link: "https://landing-page-2-vert.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 rounded bg-black text-white"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
