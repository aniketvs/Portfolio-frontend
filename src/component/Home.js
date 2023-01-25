import React, { useEffect } from 'react'
import Banneer from './SubComponent/Banneer'
import Nav from './SubComponent/Nav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './SubComponent/About';
export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
        <Nav/>
        <Banneer/>
        <About/>
    </>
  )
}
