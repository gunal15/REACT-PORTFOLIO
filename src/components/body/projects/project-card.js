
import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank">
              <div className="link-button" style={{color:"white"}}>
                <i class="fi-rr-globe" style={{color:"white"}}></i>Click here
              </div>
            </a>
            )}
            {project.github&& (
              <a className="project-link" href={project.github} target="_blank">
                <div className="link-button" style={{color:"white"}}>
                  
                <i class="devicon-github-original colored" style={{color:"white"}}></i>Github
              </div>
            </a>
            )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags" style={{color:"white"}}>
          {project.tags.map((tag)=> {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;