import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { GithubUrl, LinkedInUrl } from "../constants/Constants";

function Footer() {
  return (
    <footer>
      <div>
        <a href={GithubUrl} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={LinkedInUrl} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;