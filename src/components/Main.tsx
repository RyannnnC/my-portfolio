import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.png';
import { LinkedInUrl, GithubUrl } from "../constants/Constants";
import '../assets/styles/Main.scss';
import '../assets/styles/scrolling.scss';
import { Fade } from "@mui/material";

function Main() {
  const [fadeIn, setFadeIn] = React.useState(false);
      
  useEffect(() => {
      setFadeIn(true);
  }, []);

  return (
    <Fade in={fadeIn} timeout={2500}>
      <div className="container">
        <div className="about-section">
          <div className="image-wrapper">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href={GithubUrl} target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href={LinkedInUrl} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <div className="mobile_social_icons">
              <a href={GithubUrl} target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href={LinkedInUrl} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <h1>Ryan Cai</h1>
            <div className="scrolling-text">
              <h2 className="font-white font-xl subtitle"/>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Main;