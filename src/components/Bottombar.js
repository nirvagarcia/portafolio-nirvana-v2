import React, { useState } from "react";
import "../styles/Bottombar.css";
import { IconButton } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Brightness3Icon from '@mui/icons-material/Brightness3';

const Bottombar = () => {
const [, setLanguage] = useState("EN");
const [darkMode, setDarkMode] = useState(false);

const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === "EN" ? "ES" : "EN"));
};

const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
};

const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/nirvana-garcia-vasquez/", "_blank");
};

return (
    <div className="bottombar">
        <div className="bottombar-container">

            <div className="personalized-icon">
                <IconButton aria-label="linkedin" onClick={openLinkedInProfile}>
                    <LinkedInIcon sx={{ color: 'white' }} />
                </IconButton>
            </div>
            <div className="personalized-icon">
                <IconButton aria-label="language" onClick={toggleLanguage}>
                    <LanguageIcon sx={{ color: 'white' }} />
                </IconButton>
            </div>
            <div className="personalized-icon">
                <IconButton aria-label="dark-mode" onClick={toggleDarkMode}>
                    {darkMode ? <Brightness7Icon sx={{ color: 'white' }} /> : <Brightness3Icon sx={{ color: 'white' }} />}
                </IconButton>
            </div>       
        </div>
    </div>
);
}

export default Bottombar;