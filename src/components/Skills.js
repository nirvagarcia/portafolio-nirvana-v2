import React, { useState } from "react";
import "../styles/Skills.css";
import SectionEffect from "../auxiliars/SectionEffect";
import { skillsData } from "../auxiliars/MyConsts";

const Skills = () => {
    const [selectedOption, setSelectedOption] = useState("All");
    const handleOptionClick = (option) => {setSelectedOption(option);};
    const isOptionSelected = (option) => option === selectedOption;

    const filteredSkills = selectedOption === "All"
        ? skillsData
        : skillsData.filter((skill) => skill.type === selectedOption);

    return (
        <SectionEffect>
            <div id="skills">
                
                <div className="skills-container">
                    <div className="skills-title">I've been working with</div>
                    <div className="skills-options">
                        <p
                            className={`skills-option ${isOptionSelected("All") && "selected"}`}
                            onClick={() => handleOptionClick("All")}
                        >
                            All
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("Frameworks") && "selected"}`}
                            onClick={() => handleOptionClick("Frameworks")}
                        >
                            Frameworks
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("Languages") && "selected"}`}
                            onClick={() => handleOptionClick("Languages")}
                        >
                            Languages
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("Databases") && "selected"}`}
                            onClick={() => handleOptionClick("Databases")}
                        >
                            Databases
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("Tools") && "selected"}`}
                            onClick={() => handleOptionClick("Tools")}
                        >
                            Tools
                        </p>
                        <p
                            className={`skills-option ${isOptionSelected("Cloud") && "selected"}`}
                            onClick={() => handleOptionClick("Cloud")}
                        >
                            Cloud
                        </p>           
                    </div>
                    <div className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <div
                        key={index}
                        className={`skill-item ${isOptionSelected(skill.type) && "selected"}`}
                        >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="skills-image"
                        />
                        <div className="skill-text">{skill.name}</div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>    
        </SectionEffect>
      
    );
};

export default Skills;