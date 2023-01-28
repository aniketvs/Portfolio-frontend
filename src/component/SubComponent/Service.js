import { Card, CardContent, Grid ,Typography} from '@mui/material'
import { Box} from '@mui/system'
import React from 'react'
import '../style/Sevice.css'
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
export default function Service() {
  return (
    <>
    <Box className="container mb-5 mt-3 service-box" id="services">
        <Grid container spacing={5}>
            <Grid item xs={12}>
            <Typography className='About-header mb-2' variant='h3' data-aos="fade-down">My <span className='text-col'>Services.</span></Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Card className="card-service" data-aos="fade-right">
                  <CardContent>
                    <Box className='card-text'>
                      <CodeOffIcon className='codeof'/>
                    </Box>
                    <Box className='card-box-in'>
                      <Typography className='card-header mb-2'> Web Design</Typography>
                       <Typography className='card-text'>Designing a website is not just about creating a visually  layout, it's about crafting an  user-friendly experience that effectively communicates your brand's message.</Typography>
                    </Box>

                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className="card-service" data-aos="fade-up">
                  <CardContent className='card-box-backend'>
                    <Box className='card-text'>
                      <CodeIcon className='codeof'/>
                    </Box>
                    <Box className='card-box-in'>
                      <Typography className='card-header mb-2'>Backend Development</Typography>
                       <Typography className='card-text backend-text'>The backbone of any great website is a solid and efficient backend. Let us help you build the foundation for your digital presence and make sure it can handle the load.</Typography>
                    </Box>

                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className="card-service" data-aos="fade-left">
                  <CardContent>
                    <Box className='card-text'>
                      <LayersIcon className='codeof'/>
                    </Box>
                    <Box className='card-box-in'>
                      <Typography className='card-header mb-2'>Full-Stack Development</Typography>
                       <Typography className='card-text'>It is the art of seamlessly integrating the frontend design with the backend functionality to create a complete  user experience. Let us help you bring your digital vision to life.</Typography>
                    </Box>

                  </CardContent>
                </Card>
            </Grid>
           
        </Grid>
    </Box>

    </>
  )
}
