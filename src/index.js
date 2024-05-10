import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar'
import './index.css';
import Hero from './Components/Hero/Hero';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'
import Who from './Components/Who/Who'
import { motion } from "framer-motion"
import Skills from './Components/Skills/Skills'
import Starfield from 'react-starfield'
import MyWork  from './Components/MyWork/MyWork';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
    <Navbar/>
    <Hero/>
    <Who/>
    <Skills/>
    <Education/>
    <MyWork/>
    <Contact/>
    <Footer/>
    

  </React.StrictMode>
);
