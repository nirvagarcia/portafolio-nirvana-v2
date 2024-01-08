import React from "react";
import "../styles/Home.css";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {

  const  [software] = useTypewriter({
    words: ['Software Developer', 'Software Enjoyer'], 
    loop: {},
    typeSpeed: 110, 
    deleteSpeed: 30,
  })

  return (   
    <div id="home">
      <div className="home-container">
        <div className="home-avatar">
          <img src="assets/girl.gif" alt="Avatar" />
        </div>
        <div className="home-title">Nirvana García</div>     
        <div className="home-sub">  
          {software} 
          <Cursor/>
        </div>    
        <div className="home-desc">
          Deeply passionate about Full-Stack, UX/UI design, Artificial
          intelligence, and problem-solving. Based in Lima, Peru
          <img src="/assets/peru.png" alt="Peru" className="peru-image"/>
        </div>
        <div className="home-icons">        
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/nirvagarcia/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            href="https://github.com/nirvagarcia"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="Email"
            href="mailto:nirvagarciav@gmail.com"
          >
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Home;