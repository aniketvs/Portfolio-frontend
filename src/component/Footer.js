import React from 'react'
import {Grid, Typography,Box} from '@mui/material'

import './style/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <div class="card card-div">
                
                <div class="card-body">
                    <Grid container spacing={5}  className="main-grid">
                        <Grid item sm={6} md={4} lg={4} className="addres-grid">
                            <Box className="mt-4 add-box ml-3">
                               <Typography className='address-header mb-2'>Address</Typography>
                               <Typography className='add-text'>Ambika Nagar No.2 Road-16</Typography>
                               <Typography className='add-text'>Near Sanoshi Mata Temple</Typography>
                               <Typography className='add-text'>Thane-400604</Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={4} lg={4} className='community-grid'>
                             <Box className="mt-4 text-center">
                             <Typography className='address-header mb-2'>Join Our Social Community</Typography>
                               <Box className="social">
                                     <Link to="/">  <LinkedInIcon className='LinkedInIcon' /></Link> 
                                     <Link to="/"> <GitHubIcon className='icon'/></Link> 
                                     <Link to="/"><TwitterIcon className='icon'/></Link> 
                                     <Link to="/"> <InstagramIcon className='icon'/></Link> 
                                     <Link to="/"> <FacebookIcon className='icon'/></Link> 
                               </Box>
                             </Box>
                        </Grid>
                        <Grid item sm={12} md={4} lg={4} className='contact-div'>
                        <Box className="mt-4 mr-3">
                             <Typography className='address-header mb-2'>Contact Us</Typography>
                             <Typography className='contact-text'><EmailIcon/> :- sharmavinod8454@gmail.com</Typography>
                             <Typography className='contact-text'> <PhoneIcon/> :- +91 8454833153</Typography>
                              
                             </Box>
                        </Grid>

                    </Grid>
                
                </div>
                <hr  className='divider'/>
                <div class="card-footer text-center">
                  <Typography> ©Ani. 2023</Typography>
                   
                </div>
            </div>
        </>
    )
}
