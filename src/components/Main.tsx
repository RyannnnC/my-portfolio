import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.png';
import { LinkedInUrl, GithubUrl } from "../constants/Constants";
import '../assets/styles/Main.scss';
import '../assets/styles/scrolling.scss';
import { Button, Fade, Grid, Typography, useTheme } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

function Main() {
  const [fadeIn, setFadeIn] = React.useState(false);
  
  const theme = useTheme();

  useEffect(() => {
      setFadeIn(true);
  }, []);

  return (
    <Fade in={fadeIn} timeout={2500}>
      <div className="container main">
        <div className="items-container">
          <Grid container spacing={4} columns={{xs:6, sm:12}}>
            <Grid size={{xs:12, sm:5, xl:4}} sx={{display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
              <img src={avatar} alt="Avatar" style={{width: '100%'}} />
            </Grid>
            <Grid size={{xs:12, sm:7}} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div className="about-section">
                <div className="content">
                  <div className="social_icons">
                    <a href={GithubUrl} target="_blank" rel="noreferrer"><GitHubIcon/></a>
                    <a href={LinkedInUrl} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                  </div>
                  <h1>Hi! I'm Ryan Cai</h1>
                  <div className="scrolling-text">
                    <h2 className="font-white font-xl subtitle"/>
                  </div>
                  <Typography variant="h5" sx={{color: theme.palette.text.primary}}>
                      I build web apps that work fast and feel intuitive. With 3+ years of experience using React, Next.js, Golang, and MySQL, I turn tough challenges into simple, user-friendly solutions. My work is all about speed, reliability, and smooth performance. Let’s create something amazing!
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/Resume.pdf"
                    download="Resume.pdf"
                    endIcon={<SimCardDownloadIcon />}
                    size="large"
                    sx={{
                      mt:8,
                      borderRadius: 4,
                      padding:'20px',
                      backgroundColor: '#92f1f1',
                      color: '#000',
                    }}
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fade>
  );
}

export default Main;