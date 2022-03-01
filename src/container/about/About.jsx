import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg'

import { abouts } from '../../data';
import './About.scss';


const About = () => {
  const [selectedCard, setSelectedCard] = useState('');

  const handleSelectedCard = (about) => {
    if(selectedCard === ('')){
      setSelectedCard(about)
    } else {
      setSelectedCard('')
    }
  }
  
  return (
    <motion.div 
      className='app__about'
    >

      {/* Text */}
      <h2 className='head-text'>
        I know that <span>the future</span> <br/>
        is <span>Digital</span>
      </h2>
  

      {/* Cards */}
      {/* Card Container */}
      <motion.div 
        whileInView={{ x:[-300, 0], opacity:[0, 1] }}
        transition={{ duration: .5, type:'tween' }}
        className='app__cards'
      >
        {abouts?.map((about, index) => (
          <>
            {/* Individual Cards */}
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: .5, type:'tween' }}
              key={about.title + index}
              className='app__card-item'
              onClick={()=> handleSelectedCard(about)}
            > 
              <img src={about.img} alt={about.title} />
              <h1 className='app__card-item-text' onClick={()=> handleSelectedCard(about)}>{about.title}</h1> 
            </motion.div>

            {/* Individual Description Cards */}
            <motion.div
              whileInView={{ y:[100, 0], scale: [0, 1] }}
              transition={{ duration: .3, type: 'tween' }}
              className={`app__card-desc ${selectedCard === about ? 'active' : ''}`}
              onClick={()=> handleSelectedCard('')}
            >
              <h1 className='app__card-title'>{about.title} </h1>
              <motion.div 
                className='app__card-desc'
              >
                {about?.description?.map((description, index) => (
                  <div className='app__card-desc-desc'>
                    <p className='app__card-desc-name'>{description.name}:</p>
                    <p className='app__card-desc-secondName'>{description.secondName}</p>
                    <p className='app__card-desc-text'>{description.text}</p>
                    <p className='app__card-desc-text'>{description.secondText}</p>
                  </div>
                ))}
              </motion.div>
              <CgClose className='app__card-close'/>
            </motion.div>
          </>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default About