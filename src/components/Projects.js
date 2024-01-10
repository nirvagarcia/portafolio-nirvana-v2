import React, { useState } from "react";
import "../styles/Projects.css";
import { IconButton, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoIcon from "@mui/icons-material/Info";
import ProjectInfoModal from "../auxiliars/ProjectInfoModal";
import SectionEffect from "../auxiliars/SectionEffect";

const projects = [  
    {
        title:"Mappi - GMaps API",
        cardimage: "/assets/maps.png",
        desc: "GoogleMaps API integration, using ReactJS",
        techStack: "React.js, Javascript, NodeJS",
        type: "API",
        open: "https://googlemaps-api.vercel.app/"
    },
    {
        title:"Pangea - Streaming Platform",
        cardimage: "/assets/pangea.png",
        desc: "Studio Ghibli Streaming platform, using ReactJS",
        techStack: "React.js, Typescript, NodeJS",
        type: "Frontend",
        link: "https://github.com/nirvagarcia/pangea-ghibli",
        open: "https://pangea-ghibli.vercel.app/"
    },
    {
        title:"My Portfolio",
        cardimage: "/assets/portfolio_nirvana.png",
        desc: "Building my own portfolio",
        techStack: "React.js, Javascript",
        type: "Frontend",
        link: "https://github.com/nirvagarcia/portafolio-nirvana-v2",
        open: "https://nirvana-garcia.vercel.app/"
    },
    {
        title:"AKIRA E-Commerce",
        cardimage: "/assets/akira.png",
        desc: "Asian entertainment E-Commerce, using AngularJS",
        techStack: "Angular.js, MySQL, Javascript",
        type: "Fullstack",
        link: "https://github.com/nirvagarcia/pangea-ghibli",
        open: "https://pangea-ghibli.vercel.app/"
    },
    {
        title:"Financial Tool (MiVivienda)",
        cardimage: "/assets/mivivienda.png",
        desc: "'Mi Vivienda' Financial simulator, using VueJS",
        techStack: "Vue.js, Node.js, MySQL, Javascript",
        type: "Fullstack",
        link: "https://github.com/nirvagarcia/pangea-ghibli",
        open: "https://pangea-ghibli.vercel.app/"
    },   
    {
        title:"Doctify",
        cardimage: "/assets/doctify.png",
        desc: "Platform for contacting doctors, booking appointments",
        techStack: "React.js, MySQL, Javascript",
        type: "Fullstack",
        link: "https://github.com/nirvagarcia/pangea-ghibli",
        open: "https://pangea-ghibli.vercel.app/"
    },
    {
        title:"WeatherApp - OpenWeatherMap API",
        cardimage: "/assets/weatherapi.gif",
        desc: "OpenWeatherMap API integration, using Vue.js",
        techStack: "Vue.js, Javascript, NodeJS",
        type: "API",
        open: "https://googlemaps-api.vercel.app/"
    },
    {
        title:"Manicom - TMDB API",
        cardimage: "/assets/movie_api.png",
        desc: "TMDB API integration, using AngularJS",
        techStack: "Angular.js, Javascript, NodeJS",
        type: "API",
        open: "https://googlemaps-api.vercel.app/"
    },     
    {
        title:"Tribute Page - Beabadoobe",
        cardimage: "/assets/bea.png",
        desc: "Biographical page of Beabadoobe, 23 year old Filipino singer and songwriter.",
        techStack: "Vue.js, Node.js, MySQL, Javascript",
        type: "Frontend",
        link: "https://github.com/nirvagarcia/pangea-ghibli",
        open: "https://pangea-ghibli.vercel.app/"
    },
    {
        title:"AKIRA Mobile!",
        cardimage: "/assets/akiramobile.png",
        desc: "Asian entertainment E-Commerce, using AngularJS",
        techStack: "Flutter Mobile",
        type: "Mobile",
        link: "https://github.com/nirvagarcia/pangea-ghibli",
        open: "https://pangea-ghibli.vercel.app/"
    },   
];

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