import { Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { Box } from '@mui/system'
import React from 'react'
import gargs from '../Images/gargsd (2).jpg'
import '../style/Sevice.css'
import '../style/Project.css'
import UHV from '../Images/UHV.png'
import Event from '../Images/Event.png'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
export default function Project() {
    return (
        <>
            <Box className="container mt-3 service-box" id="project" >
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} lg={12} md={12} className="header-grid">
                        <Typography className='About-header mb-3' variant='h3' data-aos="fade-down">My <span className='text-col'>Project.</span></Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className='card-width-h' data-aos="fade-right">
                            <Box className="contain">
                                <CardMedia
                                    component="img"
                                    alt={gargs}

                                    className='card-image'
                                    image={gargs}
                                />
                                <Box className="overlay">
                                    <Box className="content">
                                       
                                        <Typography className="hover-text">Gargs Dentario</Typography>
                                        <a href='https://gargsdentario.com/' target='_blank' rel='noopener noreferrer'  className="hover-text" >
                                       <LaunchOutlinedIcon className='launch' />
                                       </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className='card-width-h'  data-aos="fade-up">
                            <Box className="contain">
                                <CardMedia
                                    component="img"
                                    alt={Event}

                                    className='card-image'
                                    image={Event}
                                />
                                <Box className="overlay">
                                    <Box className="content">

                                    <Typography className="hover-text">Event Organization</Typography>
                                        
                                        <a href='https://eventrus.netlify.app/' rel='noopener noreferrer' target='_blank' className="hover-text" >
                                      
                                       <LaunchOutlinedIcon className='launch' />
                                       </a>
                                     

                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card className='card-width-h'  data-aos="fade-left">
                            <Box className="contain">
                                <CardMedia
                                    component="img"
                                    alt={UHV}

                                    className='card-image'
                                    image={UHV}
                                />
                                <Box className="overlay">
                                    <Box className="content">

                                    <Typography className="hover-text">UHV</Typography>
                                        <a href='http://www.uhv.org.in/' rel='noopener noreferrer' target='_blank' className="hover-text" >
                                       <LaunchOutlinedIcon className='launch' />
                                       </a>

                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>


                </Grid>
            </Box>
        </>
    )
}
