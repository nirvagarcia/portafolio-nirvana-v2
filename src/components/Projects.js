import React, { useState } from "react";
import "../styles/Projects.css";
import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoIcon from "@mui/icons-material/Info";
import ProjectInfoModal from "../auxiliars/ProjectInfoModal";
import SectionEffect from "../auxiliars/SectionEffect";

const Projects = () => {  

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedType, setSelectedType] = useState("All");

    const handleInfoClick = (project) => {
        setShowInfoModal(true);
        setSelectedProject(project);
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const isTypeSelected = (type) => type === selectedType;

    const projects = {
        "AKIRA E-Commerce": {
            title:"AKIRA E-Commerce",
            cardimage: "/assets/akira.png",
            desc: "Asian entertainment E-Commerce, using AngularJS",
            techStack: "Angular.js, MySQL, Javascript",
            type: "Fullstack",
            link: "https://github.com/nirvagarcia/pangea-ghibli",
            open: "https://pangea-ghibli.vercel.app/"
        },
        "Pangea": {
            title:"Pangea - Streaming Platform",
            cardimage: "/assets/pangea.png",
            desc: "Studio Ghibli Streaming platform, using ReactJS",
            techStack: "React.js, Typescript, NodeJS",
            type: "Frontend",
            link: "https://github.com/nirvagarcia/pangea-ghibli",
            open: "https://pangea-ghibli.vercel.app/"
        },
        "Mappi - Google Maps API": {
            title:"Mappi - GMaps API",
            cardimage: "/assets/maps.png",
            desc: "GoogleMaps API integration, using ReactJS",
            techStack: "React.js, Javascript, NodeJS",
            type: "API",
            open: "https://googlemaps-api.vercel.app/"
        },
        "Financial Tool": {
            title:"Financial Tool (MiVivienda)",
            cardimage: "/assets/mivivienda.png",
            desc: "'Mi Vivienda' Financial simulator, using VueJS",
            techStack: "React.js, Node.js, MySQL, Javascript",
            type: "Fullstack",
            link: "https://github.com/nirvagarcia/pangea-ghibli",
            open: "https://pangea-ghibli.vercel.app/"
        },
        "Tribute Page": {
            title:"Tribute Page - Beabadoobe",
            cardimage: "/assets/bea.png",
            desc: "Biographical page of Beabadoobe, 23 year old Filipino singer and songwriter.",
            techStack: "Vue.js, Node.js, MySQL, Javascript",
            type: "Frontend",
            link: "https://github.com/nirvagarcia/pangea-ghibli",
            open: "https://pangea-ghibli.vercel.app/"
        }   
    };

    return (
        <SectionEffect>
  <div id="projects">
          <div className="projects-container">
            <div className="skills-title">Hey! Check some of my projects</div>
            <div className="skills-options">
                <p
                  className={`skills-option ${isTypeSelected("All") && "selected"}`}
                  onClick={() => handleTypeClick("All")}
                >
                    All
                </p>
                <p
                    className={`skills-option ${isTypeSelected("Frontend") && "selected"}`}
                    onClick={() => handleTypeClick("Frontend")}
                >
                    Frontend
                </p>
                <p
                    className={`skills-option ${isTypeSelected("API") && "selected"}`}
                    onClick={() => handleTypeClick("API")}
                >
                    +API
                </p>
                <p
                   className={`skills-option ${isTypeSelected("Fullstack") && "selected"}`}
                   onClick={() => handleTypeClick("Fullstack")}
                >
                    Fullstack
                </p>
                <p
                   className={`skills-option ${isTypeSelected("Mobile") && "selected"}`}
                   onClick={() => handleTypeClick("Mobile")}
                >
                    Mobile
                </p>
                <p
                    className={`skills-option ${isTypeSelected("Figma") && "selected"}`}
                    onClick={() => handleTypeClick("Figma")}
                >
                    Figma
                </p>           
            </div>
            <ul className="projects-grid">
                {Object.keys(projects).map((key, i) => (
                    <li className={`projects-card ${isTypeSelected(projects[key]["type"]) && "selected"}`} key={i}>
                        <div
                            className="card-image"
                            style={{ backgroundImage: `url(${projects[key]["cardimage"]})` }}
                        ></div>
                        <div className="card-content">
                            <div className="card-title">{key}</div>
                            <div className="card-desc">{projects[key]["desc"]}</div>
                            <div className="card-tech">{projects[key]["techStack"]}</div>
                            <div className="card-icons">
                                {projects[key]["link"] && (
                                    <IconButton
                                    aria-label="GitHub"
                                    href={projects[key]["link"]}
                                    target="_blank"
                                    >
                                    <GitHubIcon />
                                    </IconButton>
                                )}
                                <IconButton
                                    aria-label="Open"
                                    href={projects[key]["open"]}
                                    target="_blank"
                                >
                                    <OpenInNewIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="Info"
                                    onClick={() => handleInfoClick(projects[key])}
                                >
                                    <InfoIcon />
                                </IconButton>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
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