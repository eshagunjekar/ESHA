import React from 'react'
import Marquee from 'react-fast-marquee';
import react from '../../assets/react.png'
import sql from '../../assets/sql.png'

import cpp from '../../assets/cpp.png'
import java from '../../assets/java.png'
import python from '../../assets/python.png'
import html from '../../assets/html.png'
import tailwind from '../../assets/tailwind.png'
import mongo from '../../assets/mongo.png'
import linux from '../../assets/linux.png'
import node from '../../assets/node.png'
import dsa from '../../assets/dsa.png'
import sorting from '../../assets/sorting.png'



import './Skills.css';
const Skills = () => {
    return (
        
        <div id='skills' className="Skills">
          <div className="title">
            <h1>Skills</h1>
          </div>
    
          <div>
            <Marquee direction="right" speed={100} delay={5}>
              <div className="image_wrapper">
                <img src={react} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={sql} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={python} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={java} alt="" />
              </div>
              <div>
                <img src={cpp} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={mongo} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={html} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={tailwind} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={linux} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={sorting} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={dsa} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={node} alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      );
    }
    
export default Skills