import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import '../style/Banner.css';
import ani from '../Images/bin1.png'

import Typewriter from 'typewriter-effect';
export default function Banneer() {
    return (
        <>
            <Box className="Banner-Box">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box className="typo-box">
                            <Typography variant='h3' className='typo-1st'><span className='typo1st-span'>My</span> name is</Typography>
                            <Typography variant='h3' className='typo-1st'>
                                <Typewriter
                                    options={{
                                        strings: ["Sharma Aniket Vinod"],
                                        autoStart: true,
                                        loop: true,
                                        delay:100,
                                    }} />
                            </Typography>
                            <Typography variant='h5' className='typo-1st'>and I am  full stack <span className='typo1st-span'>WEB </span> developer</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box className="image-box" data-aos='zoom-in'>
                            <img src={ani} alt={ani} className="image-ani" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
