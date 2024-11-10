import React from "react";
import "./ProjectsStyle.css";

// Import images from assets folder
import project1Image from "../assets/StudySyn.svg";
import project2Image from "../assets/tic-tac-toe.png";
import project3Image from "../assets/resume.png";

const projects = [
  {
    name: "Student Sync",
    github: "https://ronakbagri.github.io/Student-Sync/",
    image: project1Image
  },
  {
    name: "Tic-Tac-Toe",
    github: "https://ronakbagri.github.io/Tic-Tac-Toe/",
    image: project2Image
  },
  {
    name: "Portfolio",
    github: "https://ronakbagri.github.io/Portfolio/",
    image: project3Image
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h2 className="project-name">{project.name}</h2>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
