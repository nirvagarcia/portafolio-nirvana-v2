import React, { useState } from "react";
import "../styles/Skills.css";

const skillsData = [
    {
        name: "React",
        image: "assets/react.png",
        type: "Frameworks",
    },
    {
        name: "Angular",
        image: "assets/angular.png",
        type: "Frameworks",
    },
    {
        name: "Vue.js",
        image: "assets/vue.png",
        type: "Frameworks",
    },
    {
        name: "JavaScript",
        image: "assets/javascript.png",
        type: "Languages",
    },
    {
        name: "TypeScript",
        image: "assets/typescript.png",
        type: "Languages",
    },
    {
        name: "GitHub",
        image: "assets/github.png",
        type: "Tools",
    },
    {
        name: "Git",
        image: "assets/git.png",
        type: "Tools",
    },
    {
        name: "C#",
        image: "assets/csharp.png",
        type: "Languages",
    },
    {
        name: "MySQL",
        image: "assets/mysql.png",
        type: "Databases",
    },
    {
        name: "PostgreSQL",
        image: "assets/postgresql.png",
        type: "Databases",
    },
    {
        name: "Azure",
        image: "assets/azure.png",
        type: "Cloud",
    },   
    {
        name: "Figma",
        image: "assets/figma.png",
        type: "Tools",
    },
    {
        name: "Spring Boot",
        image: "assets/springboot.png",
        type: "Tools",
    },
    {
        name: "Postman",
        image: "assets/postman.png",
        type: "Tools",
    },
    {
        name: "MongoDB",
        image: "assets/mongodb.png",
        type: "Databases",
    },
    {
        name: "Python",
        image: "assets/python.png",
        type: "Languages",
    },
    {
        name: "Java",
        image: "assets/java.png",
        type: "Languages",
    },   
];


const Skills = () => {
    const [selectedOption, setSelectedOption] = useState("All");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const isOptionSelected = (option) => option === selectedOption;

    const filteredSkills = selectedOption === "All"
        ? skillsData
        : skillsData.filter((skill) => skill.type === selectedOption);

    return (
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
    );
};

export default Skills;