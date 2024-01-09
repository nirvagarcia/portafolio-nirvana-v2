import React from "react";
import "../styles/ProjectInfoModal.css";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProjectInfoModal = ({ showInfoModal, project, onClose }) => {
return (
    <Modal
        open={showInfoModal && !!project}
        onClose={onClose}
        aria-labelledby="project-info-modal-title"
        aria-describedby="project-info-modal-description"
    >
        <div className="project-modal-container">
            <div className="project-modal">
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start", height: '20px'}}>
                    <IconButton edge="end" color="inherit" onClick={onClose}>
                    <CloseIcon />
                    </IconButton>
                </div>
                <h2 id="project-info-modal-title">{project && project.title}</h2>
                <p id="project-info-modal-type">{project && project.type}</p> 
                   
            </div>
        </div>
    </Modal>   

);
};

export default ProjectInfoModal;