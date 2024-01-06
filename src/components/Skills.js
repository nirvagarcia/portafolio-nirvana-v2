import React from "react";
import "../styles/Skills.css";

const techImages = [
  "assets/react.png",
  "assets/angular.png",
  "assets/typescript.png",
  "assets/github.png",
  "assets/git.png",
  "assets/csharp.png",
  "assets/mysql.png",
  "assets/node.png",
  "assets/postgresql.png",
  "assets/azure.png",
  "assets/javascript.png",
  "assets/figma.png",
  "assets/springboot.png",
  "assets/postman.png",
  "assets/vue.png",
  "assets/java.png",
  "assets/python.png",
];

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-container">
        <div className="skills-title">Tech Skills</div>
        <div className="skills-grid">
          {techImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Tech ${index + 1}`}
              className="skills-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
