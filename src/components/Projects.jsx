// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    id: 1,
    title: "Multi-Role-Dashboard",
    description: "Developed a secure Multi-Role Dashboard using TypeScript, React, HeroUI, and TanStack Query, implementing JWT-based authentication, role-based access control (RBAC) for Admin, User, and Manager roles, protected routes, and token verification. Built with a scalable MERN architecture, featuring efficient data fetching and caching, responsive UI components, and secure role-based authorization to ensure controlled access and seamless user management.",
    link: "https://dc-react-assignment-frontend.vercel.app/",
  },

  {
    id: 2,
    title: "E-commerce App",
    description:
      "E-Commerce app with secure authentication, product browsing, cart, order, and address management",
    link: "https://ecom-project1-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Shoe-Store",
    description:
      "Built a Responsive Shoe Brand Landing Page with the help of react and tailwind css.",
    link: "https://shoe-brand-mu.vercel.app/",
  },
  {
    id: 4,
    title: "InAmigos foundation Landing Page",
    description:
      "Responsive Landing page design with the help of react and tailwind css and javascript.",
    link: "https://in-amigos-page.vercel.app/",
  },
  {
    id: 5,
    title: "Landing Page 2",
    description:
      "Responsive Landing page design with the help of html and css only.",
    link: "https://landing-page-2-vert.vercel.app/",
  },
  {
    id: 6,
    title: "Landing Page 3",
    description:
      "Landing page design with the help of html css and javascript, Add Animations with GSAP.",
    link: "https://landing-page-3-self-eight.vercel.app/",
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
