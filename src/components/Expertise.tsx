import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { Chip} from '@mui/material';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Next.js",
    "Redux",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "Golang",
    "Postman",
    "Git",
    "Docker",
    "AWS",
];

const labelsSecond = [
    "Git",
    "Gitlab CI/CD",
    "Docker",
    "Postman",
    "AWS",
    "Azure",
    "Github Actions",
];

const labelsThird = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Figma",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built end-to-end web applications using modern technologies like React, Next.js, and Golang. My experience spans the full development lifecycle, from initial architecture to deployment, ensuring seamless user experiences and robust performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I leverage cloud platforms and CI/CD pipelines to streamline deployments, improve collaboration, and maintain high availability. By integrating best practices, I ensure efficient and secure delivery of applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data & Visualization</h3>
                    <p>I utilize SQL, Python, and data visualization libraries to transform raw data into actionable insights. From building heat maps to designing charts, my focus is on delivering clarity and value for decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;