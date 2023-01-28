import { Box, Typography, Button} from '@mui/material'
import React, { useState } from 'react'
import '../style/Resume.css'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import File from '../File/Ani_ANIKET_SHARMA_RESUME (1).pdf'
export default function Resume() {
    const [click,setClick]=useState(0);
    const onButtonClick = () => {
        // using Java Script method to get PDF file
         let fileurl=File.split(' ')[0];
         fileurl=fileurl.split('Ani_')[1];
                
                let alink = document.createElement('a');
                alink.href = File;
                if(click===0){
                alink.download = fileurl+".pdf";
                }else{
                    alink.download = fileurl+click+".pdf";
                }

                alink.click();
                setClick(click+1);
                alink.remove();
          
    }
    return (
        <>
            <Box className="container d-flex" id="resume">
                <Box className="resume-box" data-aos="fade-up">
                   
                       
                            <Typography className='download-text' variant='h4' data-aos="fade-right">Download My <span className='resume-heighlight'> Resume .</span> </Typography>
                        
                            <Box className="btn-box">
                             
                            
                                <Button variant='contained' onClick={onButtonClick} className='btn-dwn' startIcon={<DownloadForOfflineIcon className='download-icon'/>} data-aos="fade-left">
                                   

                                </Button>
                               
                            </Box>
                        
                </Box>
            </Box>
        </>
    )
}
