// src/components/Projects.js

import React from 'react';

const projects = [
  {
    title: "Project One",
    date: "January 1, 2023",
    description: "This is a brief description of Project One.",
    technologies: ["React", "Tailwind CSS"]
  },
  {
    title: "Project Two",
    date: "February 15, 2023",
    description: "This is a brief description of Project Two.",
    technologies: ["Next.js", "Node.js"]
  },
  {
    title: "Project Three",
    date: "March 30, 2023",
    description: "This is a brief description of Project Three.",
    technologies: ["Django", "Python"]
  },
  {
    title: "View More Projects",
    date: "",
    description: "",
    technologies: []
  },
];

function Projects() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#0C0C0C] p-4 rounded-lg shadow-md">
            {project.title === "View More Projects" ? (
              <button className="w-full h-full text-center text-white font-semibold">
                {project.title}
              </button>
            ) : (
              <>
                <h3 className="font-bold text-white">{project.title}</h3>
                <p className="text-[#9CA3AF] italic">{project.date}</p>
                <p className="mt-2 text-white">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-xs text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;