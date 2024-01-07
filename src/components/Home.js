import React from "react";
import "../styles/Home.css";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  return (
    <div id="home">
      <div className="home-container">
        <div className="home-avatar">
          <img src="assets/avatar.png" alt="Avatar" />
        </div>
        <div className="home-title" >
          I'm Nirvana
        </div>
        <div className="home-sub">Software Developer</div>
        <div className="home-desc">
          Deeply passionate about Full-Stack, UX/UI design, Artificial
          intelligence, and problem-solving. Based in Lima, Peru.
        </div>
        <div className="home-icons">
          <IconButton
            aria-label="GitHub"
            href="https://github.com/nirvagarcia"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/nirvagarcia/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="Email"
            href="mailto:tuemail@example.com"
          >
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Home;