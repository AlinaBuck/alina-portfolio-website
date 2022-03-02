import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';

import { resumeData } from '../../data';
import './Resume.scss';
import { motion } from 'framer-motion';
import { element } from 'prop-types';

const Resume = () => {
  const [activeFilter, setActiveFilter] = useState('overview');
  const [resumeFilter, setResumeFilter] = useState([]);
  const [resume, setResume] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setResumeFilter(resumeData.filter((item) => item.tag.includes('overview')));
    setResume(resumeData.filter((item) => item.tag.includes('overview')));
  }, [])
  

  const handleYearFilter = (year) => {
    setActiveFilter(year); 
    setResume(resumeData.filter((item) => item.tag.includes(year)));
    setResumeFilter(resumeData.filter((item) => item.tag.includes(year)));
  }

  const sizeFeedback = (data) => {
    if (data.length < 3){
      return(
       true
      )
    } else {
      return (
        false
      )
    }
  }


  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  const cardOne = resume[currentIndex];
  const cardTwo = resume[(currentIndex === resume.length - 1 ? 0 : currentIndex + 1)];


  return (
    <div className='app__resume'>

      {/* Filter */}
      <div className="app__resume-filter">
        {['overview','1996', '2002', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'].map((year, index) => (
          <div
            key={index}
            onClick={() => handleYearFilter(year)}
            className={`app__resume-filter-item ${activeFilter === year ? 'item-active': ''}`}
          >
            {year}
          </div>
        ))}
      </div>

      {/* Cards */}  
         {/* 3 Cards or less */}
          {sizeFeedback(resumeFilter) && (
            <div className="app__resume-card-container">
              {resumeFilter.map((data, index) => ( 
                <div className={`app__resume-card ${data.tag.includes('overview') ? 'overview': ''}`} key={index}> 
                  <div className="app__resume-img">
                    <img src={data.img} alt={data.title}/>

                    <a href={data.company} target='_blank' rel='noreferrer'>
                      <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{ duration: .3, ease: 'easeInOut'}}
                        className='app__resume-img-hover'
                      >
                        <AiOutlineHome/>
                      </motion.div>
                    </a>

                  </div>

                  <div className="app__resume-title">
                    <h1>{data.title}</h1>
                  </div>

                  <div className="app__resume-location">
                    <a href={data.link} target='_blank' rel='noreferrer'>{data.location}</a>
                  </div>

                  <div className="app__resume-desc">
                    
                    <h2>{data.subtitle}</h2>
                    <p>{data.text}</p>
                  </div>

                  {data.cards?.map((item, index) => (
            
                      <div className="app__resume-overview-card" key={index} onClick={() => handleYearFilter(item.date)}>
                          <h3>{item.date}</h3>
                          
                          <ul>
                            {item.text.map(item => (
                              <li>{item}</li>
                            ))}
                          </ul>
                          
    
                          {/* <img src={item.img} alt={item.date} /> */}
                      </div>
        
                  ))}

                </div>
              ))}
            </div>
          )}

          {/* More than 3 Cards */}
          {!sizeFeedback(resumeFilter) && (
            <>
              <div className="app__resume-card-container">

                <div className="app__resume-card-btns">
                  <div onClick={() => handleClick(currentIndex === 0 ? resume.length - 1 : currentIndex - 1)}>
                  <HiChevronLeft />
                  </div>
                </div>

                {resume.length && (
                  <>
                    <div className="app__resume-card">
                      <div className="app__resume-img">
                        <img src={cardOne.img} alt={cardOne.title} />

                        <a href={cardOne.company} target='_blank' rel='noreferrer'>
                          <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: .3, ease: 'easeInOut'}}
                            className='app__resume-img-hover'
                          >
                            <AiOutlineHome/>
                          </motion.div>
                        </a>

                      </div>

                      <div className="app__resume-title">
                        <h1>{cardOne.title}</h1>
                      </div>

                      <div className="app__resume-location">
                        <a href={cardOne.link} target='_blank' rel='noreferrer'>{cardOne.location}</a>
                      </div>

                      <div className="app__resume-desc">
                        <h2>{cardOne.subtitle}</h2>
                        <p>{cardOne.text}</p>
                      </div> 
                    </div>

                    <div className="app__resume-card">
                      <div className="app__resume-img">
                        <img src={cardTwo.img} alt={cardTwo.title} />

                        <a href={cardTwo.company} target='_blank' rel='noreferrer'>
                          <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: .3, ease: 'easeInOut'}}
                            className='app__resume-img-hover'
                          >
                            <AiOutlineHome/>
                          </motion.div>
                        </a>
                      </div>

                      <div className="app__resume-title">
                        <h1>{cardTwo.title}</h1>
                      </div>

                      <div className="app__resume-location">
                        <a href={cardTwo.link} target='_blank' rel='noreferrer'>{cardTwo.location}</a>
                      </div>

                      <div className="app__resume-desc">
                        <h2>{cardTwo.subtitle}</h2>
                        <p>{cardTwo.text}</p>
                      </div> 
                    </div>
                  </>
                )}

                <div className="app__resume-card-btns">
                  <div onClick={() => handleClick(currentIndex === resume.length - 1 ? 0 : currentIndex + 1)}>
                    <HiChevronRight />
                  </div>
                </div>
              </div> 
            </>
          )}
        
    </div>
  )
}

export default Resume