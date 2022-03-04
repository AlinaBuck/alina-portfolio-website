import React from 'react';
import { motion } from 'framer-motion';

import { files } from '../../data';
import './Files.scss';


const Files = () => {

  return (
    <motion.div 
      className='app__file'
      id='file'
    >
      {/* Text */}
      <h2 className='head-text'>
        Click to <span>Download</span>
      </h2>
  
      {/* Cards */}
      {/* Card Container */}
      
      <motion.div 
        whileInView={{ x:[300, 0], opacity:[0, 1] }}
        transition={{ duration: .5, type:'tween' }}
        className='app__cards'
      >
        {files?.map((file, index) => (
          <>
            {/* Individual Cards */}
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: .5, type:'tween' }}
              key={file.title + index}
              className='app__card-item'
        
            > 
              <a href={file.download} target='_blank' rel='noreferrer'>Click</a>
              <img src={file.img} alt={file.title} />
              <h1 className='app__card-item-text'>{file.title}</h1> 
            </motion.div>
          </>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Files