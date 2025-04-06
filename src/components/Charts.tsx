import React, { useEffect } from 'react';
import '../assets/styles/Charts.scss';
import { Box, Fade, Grid, LinearProgress, Typography } from '@mui/material';

const dataset = [
    {
        language: 'JavaScript',
        value: 100,
    },
    {
        language: 'HTML',
        value: 95,
    },
    {
        language: 'CSS',
        value: 95,
    },
    {
        language: 'TypeScript',
        value: 90,
    },
    {
        language: 'Python',
        value: 80,
    },
    {
        language: 'Golang',
        value: 70,
    },
    {
        language: 'Java',
        value: 70,
    }
]


function Charts() {
    const [fadeIn, setFadeIn] = React.useState(false);
        
    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <Fade in={true} timeout={2500}>
        <div className="container">
            <div className='charts-container'>
                <h1>Charts</h1>
                <Grid container spacing={2} p={2} mt={2} mb={4} columns={{xs:4, sm:8, md:12}}>
                {dataset.map((data, index) => {
                    return (
                        <Grid size={{xs:12, sm:6}} key={index}>
                            <Typography variant='h6' sx={{mb: 1}}>
                                {data.language}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{width: '100%', mr: 1 }}>
                                    <LinearProgress 
                                        variant='buffer' 
                                        value={data.value} 
                                        sx={{
                                            height: 20,
                                            borderRadius: 10,
                                            '--final-width': `${data.value}%`,
                                            // 覆盖内部进度条样式，使用 translateX 动画
                                            '& .MuiLinearProgress-bar': {
                                              transform: `translateX(${data.value}%)`,
                                              transformOrigin: 'left',
                                              animation: `slideIn 3000ms ease forwards`,
                                            },
                                        }}
                                        key={index}
                                    />
                                </Box>
                                <Typography variant='body2' sx={{ml: 1}}>
                                    {data.value}%
                                </Typography>
                            </Box>
                        </Grid>
                    )    
                })}
                </Grid>
                </div>
        </div>
        </Fade>
    )
}

export default Charts;