import { Card, CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import gargs from '../Images/gargsd (2).jpg'
import '../style/Sevice.css'
import '../style/Project.css'
export default function Project() {
    return (
        <>
            <Box className="container mb-5 mt-3 service-box" >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={12} md={12}>
                        <Typography className='About-header mb-5' variant='h3'>My Project</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Card className='card-width-h'>
                            <Box className="contain">
                                <CardMedia
                                    component="img"
                                    alt={gargs}

                                    className='card-image'
                                    image={gargs}
                                />
                                <Box className="overlay">
                                    <Box className="content">

                                        <p>text</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                    </Grid>


                </Grid>
            </Box>
        </>
    )
}
