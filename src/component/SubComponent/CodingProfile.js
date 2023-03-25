import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../style/Sevice.css'
import { SiGeeksforgeeks} from 'react-icons/si'
import leetcode from '../Images/leetcode.svg'
export default function CodingProfile() {
    return (
        <>
            <Box className="container mb-4 mt-3 service-box">
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography className='About-header' variant='h3' data-aos="fade-down">Coding <span className='text-col'>Profiles.</span></Typography>
                    </Grid>
                    <Box className="image-boxe container  mt-5">
                       <a href="https://auth.geeksforgeeks.org/user/sharmavinod8454/"   rel='noopener noreferrer' target="_blank" className='defaultCSS'>
                        <SiGeeksforgeeks className='gfg' />
                        </a>

                        <a href="https://leetcode.com/sharmavinod8454/"   rel='noopener noreferrer' target="_blank" className='defaultCSS'>
                       
                        <img src={leetcode} alt={leetcode} width="70px" />
                        </a>
                        

                    </Box>


                </Grid>

            </Box>
        </>
    )
}
