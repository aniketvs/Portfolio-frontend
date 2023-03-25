import React, { useEffect } from 'react'
import Banneer from './SubComponent/Banneer'
import Nav from './SubComponent/Nav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './SubComponent/About';
import Footer from './Footer';
import Service from './SubComponent/Service'
import Resume from './SubComponent/Resume'
import Project from './SubComponent/Project';
import Contact from './SubComponent/Contact';
import CodingProfile from './SubComponent/CodingProfile';
export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
        <Nav/>
        <Banneer/>
        <About/>
        <Service/>
         <CodingProfile/>
        <Project/>
        <Contact/>
        <Resume/>
        
        <Footer/>
    </>
  )
}
