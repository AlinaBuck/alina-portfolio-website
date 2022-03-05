import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { testimonial } from '../../data';
import './Testimonial.scss'


const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    setTestimonials(testimonial);
  }, [])
  

  const test = testimonials[currentIndex];

  return (
    <div className='app__testimonial' id='testimonials'>
      {testimonials.length && (
        <>
          <motion.div 
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 , type:'tween' }}
            className='app__testimonial-card'
          >
            <img className='app__testimonial-image' src={test.image} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 , type:'tween' }}
            className='app__testimonial-btns'
          >
            <div onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft className='left' />
            </div>
            <div onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight className='right'/>
            </div>
          </motion.div>
        </>
      )}

    </div>
  )
}

export default Testimonial;