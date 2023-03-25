import React from 'react'
import { HashLink as Link} from 'react-router-hash-link';
import '../style/Nav.css'
import { Box } from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Tooltip } from '@mui/material';
export default function Nav() {
  return (
    <>
        <nav class="navbar navbar-expand-lg nav-div ">
  <div class="container-fluid ">
    <Link class="navbar-brand logo" to="/" ><span className='logo-A'>A</span>ni<span className='logo-A'>.</span></Link>
    <button class="navbar-toggler nav-toggler-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <Link class="nav-link nav-link-color  active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-color" to='#about' smooth>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-color" to='#services' smooth>Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-color" to='#coding-profile' smooth>Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-color" to='#project' smooth>Project</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-color" to='#contact' smooth>Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-color" to='#resume' smooth>Resume</Link>
        </li>
        
       
      </ul>
       <Box className="d-flex justify-content-between margin-social">
        <Tooltip title="Git Hub">
         <Box className="social-icon">
         
            <a className="nav-social-icon" href='https://github.com/aniketvs' target="_blank" rel='noopener noreferrer' >
           
            <GitHubIcon  className='nav-icon'/>
            
            </a>

         </Box>
         </Tooltip>
         <Tooltip title="Linkedin">
         <Box className="social-icon">
         
         <a className="nav-social-icon" href='https://www.linkedin.com/in/sharma-aniket-vinod/' target="_blank"  rel='noopener noreferrer'><LinkedInIcon className='nav-icon'/></a>
         
         </Box>
         </Tooltip>
         <Tooltip title="Instagram">
         <Box className="social-icon">
        
         <a className="nav-social-icon" target='_blank' href='https://www.instagram.com/aniketsharma4482/' rel='noopener noreferrer' > <InstagramIcon className='nav-icon'/> </a>
         
         </Box>
         </Tooltip>
       </Box>
    </div>
  </div>
</nav>
    </>
  )
}
