import React from 'react';
import { motion } from 'framer-motion';

import { abouts } from '../../data';
import './About.scss';


const About = () => {
  
  return (
    <div className='app__about'>

      {/* Text */}
      <h2 className='head-text'>
        I know that <span>the future</span> <br/>
        is <span>Digital</span>
      </h2>

      {/* Cards */}
      <div className='app__cards'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: .5, type:'tween' }}
            key={about.title + index}
            className='app__card-item'
          > 
            <img src={about.img} alt={about.title} />
            <h1 className='app__card-item-text'>{about.title}</h1>
            
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About