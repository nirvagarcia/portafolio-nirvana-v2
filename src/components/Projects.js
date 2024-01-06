import React from "react";
import "../styles/Projects.css";
import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const Projects = () => {  
    const projects = {
        "AKIRA E-Commerce": {
          image: "/assets/akira.png",
          desc: "Asian entertainment E-Commerce, using AngularJS",
          techStack: "Angular.js, MySQL, Javascript",
          type: "-> Full-Stack Project",
          link: "https://github.com/nirvagarcia/pangea-ghibli",
          open: "https://pangea-ghibli.vercel.app/"
        },
        "Pangea": {
          image: "/assets/pangea.png",
          desc: "Studio Ghibli Streaming platform, using ReactJS",
          techStack: "React.js, Typescript, NodeJS",
          type: "-> Front-End Project",
          link: "https://github.com/nirvagarcia/pangea-ghibli",
          open: "https://pangea-ghibli.vercel.app/"
        },
        "Mappi - GMaps API": {
          image: "/assets/maps.png",
          desc: "GoogleMaps API integration, using ReactJS",
          techStack: "React.js, Javascript, NodeJS",
          type: "-> Full-stack Project",
          open: "https://googlemaps-api.vercel.app/"
        },
        "Financial Tool": {
          image: "/assets/mivivienda.png",
          desc: "'Mi Vivienda' Financial simulator, using VueJS",
          techStack: "React.js, Node.js, MySQL, Javascript",
          type: "-> Full-Stack Project",
          link: "https://github.com/nirvagarcia/pangea-ghibli",
          open: "https://pangea-ghibli.vercel.app/"
        },
        "Tribute Page": {
          image: "/assets/bea.png",
          desc: "Biographical page of Beabadoobe, 23 year old Filipino singer and songwriter.",
          techStack: "Vue.js, Node.js, MySQL, Javascript",
          type: "-> Front-End Project",
          link: "https://github.com/nirvagarcia/pangea-ghibli",
          open: "https://pangea-ghibli.vercel.app/"
        }   
    };

    return (
        <div id="projects">
            <div className="projects-container">
                <ul className="projects-grid">
                    {Object.keys(projects).map((key, i) => (
                        <li className="projects-card" key={i}>
                            <div className="card-image" style={{ backgroundImage: `url(${projects[key]["image"]})` }}></div>
                            <div className="card-content">
                                <div className="card-title">{key}</div>
                                <div className="card-desc">{projects[key]["desc"]}</div>
                                <div className="card-tech">{projects[key]["techStack"]}</div>
                                <div className="card-icons">
                                    {projects[key]["link"] && (
                                        <IconButton aria-label="GitHub" href={projects[key]["link"]} target="_blank">
                                            <GitHubIcon />
                                        </IconButton>
                                    )}
                                    <IconButton aria-label="Open" href={projects[key]["open"]} target="_blank">
                                        <OpenInNewIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;