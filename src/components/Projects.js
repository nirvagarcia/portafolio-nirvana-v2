import React, { useState } from "react";
import "../styles/Projects.css";
import { IconButton, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoIcon from "@mui/icons-material/Info";
import ProjectInfoModal from "../auxiliars/ProjectInfoModal";
import SectionEffect from "../auxiliars/SectionEffect";
import { projects } from "../auxiliars/MyConsts";

const Projects = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const handleInfoClick = (project) => {
        setShowInfoModal(true);
        setSelectedProject(project);
    };
  
    const [selectedOption, setSelectedOption] = useState("All");
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const isOptionSelected = (option) => option === selectedOption;
  
    const initialProjectsCount = 3;
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(initialProjectsCount);
  
    const filteredProject = selectedOption === "All"
        ? projects
        : projects.filter((project) => project.type === selectedOption);
  
    const showMoreProjects = () => {
        const nextVisibleCount = visibleProjectsCount + initialProjectsCount;
        setVisibleProjectsCount(nextVisibleCount);
    };

    const showLessProjects = () => {
        const nextVisibleCount = Math.max(visibleProjectsCount - initialProjectsCount, initialProjectsCount);
        setVisibleProjectsCount(nextVisibleCount);
    };

    const areAllProjectsVisible = filteredProject.length <= visibleProjectsCount;
  
       return (
        <SectionEffect>
            <div id="projects">
                <div className="projects-container">
                    <div className="skills-title">Hey! Check some of my projects</div>   
                    <div className="skills-options">
                        <p
                            className={`skills-option ${isOptionSelected("All") && "selected"}`}
                            onClick={() => handleOptionClick("All")}
                        >
                            All
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("Frontend") && "selected"}`}
                            onClick={() => handleOptionClick("Frontend")}
                        >
                            Frontend
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("API") && "selected"}`}
                            onClick={() => handleOptionClick("API")}
                        >
                            +API
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("Fullstack") && "selected"}`}
                            onClick={() => handleOptionClick("Fullstack")}
                        >
                            Fullstack
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("Mobile") && "selected"}`}
                            onClick={() => handleOptionClick("Mobile")}
                        >
                            Mobile
                        </p>                             
                    </div>
                    <ul className="projects-grid">
                        {filteredProject.slice(0, visibleProjectsCount).map((project, index) => (
                            <li className="projects-card" key={index}>
                                <div
                                    className="card-image"
                                    style={{ backgroundImage: `url(${project.cardimage})` }}
                                ></div>
                                <div className="card-content">
                                    <div className="card-title">{project.title}</div>
                                    <div className="card-desc">{project.desc}</div>
                                    <div className="card-tech">{project.techStack}</div>
                                    <div className="card-icons">
                                        {project.link && (
                                            <IconButton
                                                aria-label="GitHub"
                                                href={project.link}
                                                target="_blank"
                                            >
                                                <GitHubIcon />
                                            </IconButton>
                                        )}
                                        <IconButton
                                            aria-label="Open"
                                            href={project.open}
                                            target="_blank"
                                        >
                                            <OpenInNewIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="Info"
                                            onClick={() => handleInfoClick(project)}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {(filteredProject.length > visibleProjectsCount || areAllProjectsVisible) && (
                        <>
                        <Button
                            onClick={showMoreProjects}
                            style={{ marginTop: "1rem" }}
                            disabled={areAllProjectsVisible}
                        >
                            Ver más...
                        </Button>
                        <Button
                            onClick={showLessProjects}
                            style={{ marginTop: "1rem", marginLeft: "1rem" }}
                            disabled={visibleProjectsCount <= initialProjectsCount}
                        >
                            Ver menos...
                        </Button>
                        </>
                    )}
                </div>        
                <ProjectInfoModal
                    showInfoModal={showInfoModal}
                    project={selectedProject}
                    onClose={() => setShowInfoModal(false)}
                />
            </div>
        </SectionEffect>
    );
};
    
export default Projects;