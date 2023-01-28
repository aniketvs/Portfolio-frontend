import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import '../style/Contact.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Contact() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [err, seterr] = useState(false);
    const submit = async () => {
       
        try {
            if(!email){
                seterr(true);
                return false;
            }
            if(!name){
                seterr(true);
                return false;
            }
            if (!name && !email) {
               
                seterr(true);
                
                return false;
            }
            let result = await fetch('http://localhost:3005/contact', {
                method: 'POST',
                body: JSON.stringify({ name, email, message }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            if (result.name) {
                alert('Thanks for contacting me');
                setname("");
                setemail("");
                setmessage("");
            } else {
                alert("something went wrong");
            }
        } catch (error) {
            console.warn(error);
        }
    }
const change=(e)=>{
    e.preventDefault();
    seterr(false);
}
    return (
        <>
            <Box className="container  mt-5" id="contact">
                <Grid container className="Main-grid">
                    <Grid item xs={12} sm={12} md={5} lg={5} >
                        <Box className="mb-5" data-aos="fade-right">
                            <Typography className='contact-header' variant='h3'>Contact <span className='text-col'>Me. </span> </Typography>
                            <Box className="d-flex">
                                <EmailOutlinedIcon className='matrial-icon' />
                                <Typography className='conatcat-text'>sharmavinod8454@gmail.com</Typography>
                            </Box>
                            <Box className="d-flex mb-2">
                                <WhatsAppIcon className='matrial-icon' />
                                <Typography className='conatcat-text'>+91 8454833153</Typography>
                            </Box>
                            <Box>
                                <InstagramIcon className='flex-icon-fst' />
                                <FacebookIcon className='flex-icon' />
                                <LinkedInIcon className='flex-icon' />
                                <TwitterIcon className='flex-icon' />

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <Box className="mb-5" data-aos="fade-left">
                            {!name && err ?
                                <TextField
                                  
                                    required
                                    value={name}
                                    onChange={(e) => { setname(e.target.value) }}
                                    error
                                    id="outlined-error"
                                    label="Enter Your Name"
                                    fullWidth={true}
                                    className="text-area"
                                    onClick={change}

                                /> :
                                <TextField
                                    required
                                    value={name}
                                    onChange={(e) => { setname(e.target.value) }}
                                    id="outlined-required"
                                    label="Enter Your Name"
                                    fullWidth={true}
                                    className="text-area"

                                />
                            }
                            {!email && err ? 
                                <TextField
                                className="text-area"
                                required
                                error
                                value={email}
                                id="outlined-error"
                                    label="Enter Your Email"
                             
                                onChange={(e) => { setemail(e.target.value) }}
                              
                                fullWidth={true}
                                onClick={change}

                            />:
                            <TextField
                                className="text-area"
                                required
                                value={email}

                                onChange={(e) => { setemail(e.target.value) }}
                                id="outlined-required"
                                label="Enter Your Email"
                                fullWidth={true}

                            />
                            }
                            <TextField
                                className="text-area"
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                value={message}
                                onChange={(e) => { setmessage(e.target.value) }}
                                rows={3}
                                placeholder="Enter Your Message"
                                fullWidth={true}
                            />
                            <Button onClick={submit} variant="contained" className="btn-sub"> Submit </Button>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
