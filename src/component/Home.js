import React, { useEffect } from 'react'
import Banneer from './SubComponent/Banneer'
import Nav from './SubComponent/Nav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './SubComponent/About';
import Footer from './Footer';
import Service from './SubComponent/Service'
import Project from './SubComponent/Project';
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
        <Project/>
        <Footer/>
    </>
  )
}
