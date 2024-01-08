import React, { useState } from "react";
import "../styles/Bottombar.css";
import { IconButton } from "@mui/material";

const Bottombar = () => {
  const [, setLanguage] = useState("EN");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/nirvana-garcia-vasquez/", "_blank");
  };

  return (
    <div className="bottombar">
      <div className="bottombar-container">
        <div className="personalized-icon">
          <IconButton aria-label="linkedin" onClick={openLinkedInProfile}>
            <img src="/assets/linkedinbottom.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
          </IconButton>
        </div>
        <div className="personalized-icon">
          <IconButton aria-label="language" onClick={toggleLanguage}>
            <img src="/assets/language.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
          </IconButton>
        </div>
        <div className="personalized-icon">
          <IconButton aria-label="dark-mode" onClick={toggleDarkMode}>
            {darkMode ? (
              <img src="/assets/sun.png" alt="Dark Mode" style={{ width: '25px', height: '25px' }} />
            ) : (
              <img src="/assets/moon.png" alt="Light Mode" style={{ width: '25px', height: '25px' }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
