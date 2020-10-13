import React from "react";
import projectData from "../projectData";

function Projects() {
  return (
    <>
      <div className="py-4" id="projects">
        <h2 className="is-size-2 has-text-centered has-text-info">
          Projects
        </h2>
        <h6 className="has-text-centered has-text-info my-3">
          My latest works
        </h6>
        <div  className="flex-wrap container is-half">
          {projectData.map((project, i) => (
            <div key={i} className="card project-card-width my-3 mx-3">
              <div className="card-content">
                <p className="title is-size-4">{project.name}</p>

                <figure className="image">
                  <img src={project.image} alt={project.name} />
                </figure>
                <p className="subtitle is-size-6">{project.description}</p>
              </div>
              <footer className="card-footer">
                {project.websiteLink ? (
                  <p className="card-footer-item">
                    <span>
                      <a href={project.websiteLink} className="mx-2">
                        View Live
                      </a>
                    </span>
                  </p>
                ) : (
                  ""
                )}
                <p className="card-footer-item">
                  <span>
                    <a href={project.githubLink}>
                      code <i className="fab fa-github fa-lg"></i>
                    </a>
                  </span>
                </p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
