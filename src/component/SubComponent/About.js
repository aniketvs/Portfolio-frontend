
import { Box, Card, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import aboutme from '../Images/aboutme.jpg'
import PropTypes from 'prop-types';

import '../style/About.css';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function About() {
    const [value, setvalue] = useState(0);
    const handelchange = (event, newvalue) => {
        setvalue(newvalue);
    }
    const [skill] = useState(['Data Structure','Algorithm','C++','HTML','CSS','JS','Node Js','React Js','Express Js','MongoDB','Bootstrap','Matarial UI','Tailwind CSS']);
    return (
        <>
            <Box className="container about-box" id="about">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={5}>
                        <Box data-aos="fade-right">
                            <Card className="cardimage">
                                <CardMedia
                                    component="img"
                                    height="450"
                                    image={aboutme}
                                    alt={aboutme}

                                />
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <Box data-aos="fade-left">
                            <Typography className='About-header' variant='h3'>About <span className='text-col'>Me.</span></Typography>
                            <Typography className='about-text'>I Am MERN Stack Developer And Currently Pursuing Bachelors Of Technology Degree From AKTU University. I Am Passionate To Solve DSA Problem. C++ Developer and 200+Question Solve On GeeksForGeeks. Frontend Developer Internship In Innovatia. </Typography>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <Box sx={{ marginLeft: "30px", }}>
                                    <Tabs value={value}
                                        onChange={handelchange}


                                        aria-label="basic tabs example">
                                        <Tab label="Qualification" {...a11yProps(0)} className="tab" />
                                        <Tab label="Skills" {...a11yProps(1)} className="tab" />
                                        <Tab label="Certificates" {...a11yProps(2)} className="tab" />

                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0} className="tabpanel">
                                    <Box>
                                        <Box className='d-flex justify-content-between'>
                                            <Typography className='head-text'>Bachelor Of Technology</Typography>
                                            <Typography>(2019-2023)</Typography>
                                        </Box>
                                        <Box className='d-flex justify-content-between'>
                                            <Typography className='subhead-text'>H.M.F.A MEMORIAL INSTITUTE OF
                                                ENGINEERING<br></br> AND TECHNOLOGY</Typography>
                                            <Typography>76%(till date)</Typography>
                                        </Box>

                                    </Box>
                                    <Box className="mt-3">
                                        <Box className='d-flex justify-content-between'>
                                            <Typography className='head-text'>Intermediate</Typography>
                                            <Typography>(2018-2019)</Typography>
                                        </Box>
                                        <Box className='d-flex justify-content-between'>
                                            <Typography className='subhead-text'>G.V.M JUNIOR COLLEGE THANE</Typography>
                                            <Typography>67%</Typography>
                                        </Box>

                                    </Box>
                                    <Box className="mt-3">
                                        <Box className='d-flex justify-content-between'>
                                            <Typography className='head-text'>High School</Typography>
                                            <Typography>(2016-2017)</Typography>
                                        </Box>
                                        <Box className='d-flex justify-content-between'>
                                            <Typography className='subhead-text'>ADARSH SARASWATI HINDI HIGH SCHOOL</Typography>
                                            <Typography>87%</Typography>
                                        </Box>

                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={1} className="tabpanel">
                                   <Box>
                                      <Grid container spacing={3} >
                                      
                                      {
                                        skill.map((item)=>{
                                           return(
                                            <Grid item xs={4} md={3} lg={3} >
                                           <Box className='skill-box'>{item}</Box>
                                           </Grid>
                                           )
                                        })
                                      }
                                      </Grid>
                                     
                                   </Box>
                                </TabPanel>
                                <TabPanel value={value} index={2} className="tabpanel">
                                <Box className="">
                                        <Box className='d-flex justify-content-between'>
                                            <Typography className='head-text'>IBRAT INNOVATION</Typography>
                                            <Typography>(07/2022 - Present)</Typography>
                                        </Box>
                                        <Box className='d-flex justify-content-between'>
                                            <Typography className='subhead-text'>Frontend Developer</Typography>
                                           
                                        </Box>

                                    </Box>
                                </TabPanel>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}
