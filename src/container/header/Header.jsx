import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0,1],
      opacity: [0,1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className="app__header" id='home'>

      {/* Badge */}
      <motion.div
        whileInView={{ x:[-100, 0], opacity:[0, 1] }}
        transition={{ duration: .5 }}
        className='app__header-info'
      >

        <div className="app__header-badge">

          <div className="badge">
            <span> 👋 </span>
            <div>
              <p className='p-text'>Hello I am </p>
              <h1 className="head-text">Alina</h1>
            </div>
          </div>

          <div className='tag'>
            <p className='p-text'>Entrepreneurship</p>
            <p className='p-text'>Innovation</p>
            <p className='p-text'>Change Management</p>
            <p className='p-text'>Digital Technology Management</p>
          </div>

        </div>

      </motion.div>

      {/* Image */}
      <motion.div
        whileInView={{  opacity:[0,1] }}
        transition={{ duration: 2 }}
        className='app__header-img'
      >
        <img src={images.alina} alt='profile_bg' />
      </motion.div>


      {/* Circles */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {
          [images.api, images.figma, images.git].map((circle, index) => (
            <div className='circle' key={`circle-${index}`}>
              <img src={circle} alt='circle' />
            </div>
          ))
        }

      </motion.div>

    </div>
  )
}

export default Header;