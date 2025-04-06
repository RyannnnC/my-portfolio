import React, { useEffect } from "react";
import '../assets/styles/Project.scss';
import { projectList } from '../constants/Constants';
import { Fade } from "@mui/material";

export interface ProjectItem {
    name: string;
    description: string;
    image: string;
    url: string;
}

function Project() {

    const [fadeIn, setFadeIn] = React.useState(false);
        
    useEffect(() => {
        setFadeIn(true);
    }, []);

    return(
        <Fade in={fadeIn} timeout={2500}>
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {Object.values(projectList).map((project: ProjectItem , index: number) => (
                <div className="project" key={index}>
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <img src={project.image} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <h2>{project.name}</h2>
                    </a>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
        </Fade>
    );
}

export default Project;