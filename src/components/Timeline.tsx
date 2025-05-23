import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { Fade } from "@mui/material";

function Timeline() {
  return (
    <Fade in={true} timeout={2500} appear={true}>
    <div id="history" className="timeline-container">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelancer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sydney, Australia</h4>
            <p>
            • Automation solutions 
            </p>
            <p>
            • Data governance & statistical analysis 
            </p>
            <p>
            • Independent project execution
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Alliance Climate Control</h4>
            <p>
            • Full‑stack development 
            </p>
            <p>
            • API integration & system scalability 
            </p>
            <p>
            • Software architecture refinement
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Front end Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">BCU World</h4>
            <p>
            • Responsive UI/UX design 
            </p>
            <p>
            • Modern web development 
            </p>
            <p>
            • Collaborative team integration
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">AI care Health</h4>
            <p>
            • End‑to‑end web application architecture 
            </p>
            <p>
            • GenAI/LLM technology integration
            </p>
            <p> 
            • Project management & business development
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
    </Fade>
  );
}

export default Timeline;