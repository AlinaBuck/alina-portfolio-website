import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { motion } from 'framer-motion';


import { resumeData } from '../../data';
import './Resume.scss';


const Resume = () => {
  const [activeFilter, setActiveFilter] = useState('overview');
  const [resumeFilter, setResumeFilter] = useState([]);
  const [resume, setResume] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  useEffect(() => {
    setResumeFilter(resumeData.filter((item) => item.tag.includes('overview')));
    setResume(resumeData.filter((item) => item.tag.includes('overview')));
  }, [])
  

  const handleYearFilter = (year) => {
    setActiveFilter(year); 
    setAnimateCard([{ y: 800, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      setResume(resumeData.filter((item) => item.tag.includes(year)));
      setResumeFilter(resumeData.filter((item) => item.tag.includes(year)));
    }, 700);
  }

  
  const handleSize = (data) => data.length > 1 ? false: true; 

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  const cardOne = resume[currentIndex];
  const cardTwo = resume[(currentIndex === resume.length - 1 ? 0 : currentIndex + 1)];


  return (
    <div className='app__resume' id='resume'>

      {/* Filter */}
      <div className="app__resume-filter">
        {['overview','1996', '2002', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'].map((year, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1}}

            key={index}
            onClick={() => handleYearFilter(year)}
            className={`app__resume-filter-item ${activeFilter === year ? 'item-active': ''}`}
          >
            {year}
          </motion.div>
        ))}
      </div>

      {/* Cards */}  
      <motion.div
        animate={animateCard}
        transition={{ duration: 1}}
        className='animation-container'
      >
         {/* 1 Card */}
          {handleSize(resumeFilter)  && (
            <div className="app__resume-card-container">
        
              {resumeFilter?.map((data, index) => ( 
                <div 
                  key={index}
                  className={`app__resume-card ${data.tag.includes('overview') ? 'overview': ''}`}  
                > 

                  {/* Cards per year*/} 
                  <div className="app__resume-img">
                    <img src={data.image} alt={data.title}/>

                    <a href={data.company} target='_blank' rel='noreferrer'>
                      <div className='app__resume-img-hover'>
                        <AiOutlineHome/>
                      </div>
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

                  {/* Cards overview*/} 
                  {data.cards?.map((item, index) => (
            
                      <motion.div   
                        key={index} 
                        onClick={() => handleYearFilter(item.date)}
                        className='app__resume-overview-card' 
                      >
                          <h3>{item.date}</h3>
                          
                          <ul>
                            {item.text.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                          
                          <img src={item.images} alt={item.date} />
                      </motion.div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* More than 2 Cards */}
          {!handleSize(resumeFilter) && (
            <>
              <div 
                className="app__resume-card-container big"
              >

                <div className="app__resume-card-btns">
                  <div onClick={() => handleClick(currentIndex === 0 ? resume.length - 1 : currentIndex - 1)}>
                  <HiChevronLeft />
                  </div>
                </div>

                {resume?.length && (
                  <>
                    <div className="app__resume-card big">
                      <div className="app__resume-img big">

                        {cardOne ? (
                          <img src={cardOne.image} alt={cardOne.title} />
                        ): (
                          <div>please reload</div>
                        )}
                        
                        {cardOne ? (
                          <a href={cardOne.company} target='_blank' rel='noreferrer'>
                            <motion.div
                              whileHover={{ opacity: [0, 1] }}
                              transition={{ duration: .3, ease: 'easeInOut'}}
                              className='app__resume-img-hover big'
                            >
                              <AiOutlineHome/>
                            </motion.div>
                          </a>
                        ): (
                          <div className='please-reload'>please reload</div>
                        )}

                      </div>
                      
                      {cardOne ? (
                        <div className="app__resume-title big">
                          <h1>{cardOne.title}</h1>
                        </div>
                      ): (
                        <div className='please-reload'>please reload</div>
                      )}

                      {cardOne ? (
                        <div className="app__resume-location big">
                          <a href={cardOne.link} target='_blank' rel='noreferrer'>{cardOne.location}</a>
                        </div>
                      ): (
                        <div className='please-reload'>please reload</div>
                      )}

                      {cardOne ? (
                        <div className="app__resume-desc big">
                          <h2>{cardOne.subtitle}</h2>
                          <p>{cardOne.text}</p>
                        </div>
                      ): (
                        <div className='please-reload'>please reload</div>
                      )} 

                    </div>

                    <div className="app__resume-card big">
                      <div className="app__resume-img big">

                        {cardTwo ? (
                          <img src={cardTwo.image} alt={cardTwo.title} />
                        ): (
                          <div className='please-reload'>please reload</div>
                        )}

                        {cardTwo ? (
                          <a href={cardTwo.company} target='_blank' rel='noreferrer'>
                            <motion.div
                              whileHover={{ opacity: [0, 1] }}
                              transition={{ duration: .3, ease: 'easeInOut'}}
                              className='app__resume-img-hover'
                            >
                              <AiOutlineHome/>
                            </motion.div>
                          </a>
                        ): (
                          <div className='please-reload'>please reload</div>
                        )}
                      </div>
                      
                      {cardTwo ? (
                        <div className="app__resume-title big">
                          <h1>{cardTwo.title}</h1>
                        </div>
                      ):(
                        <div className='please-reload'>please reload</div>
                      )}

                      {cardTwo ? (
                        <div className="app__resume-location big">
                          <a href={cardTwo.link} target='_blank' rel='noreferrer'>{cardTwo.location}</a>
                        </div>
                      ):(
                        <div className='please-reload'>please reload</div>
                      )}

                      {cardTwo ? (
                        <div className="app__resume-desc big">
                          <h2>{cardTwo.subtitle}</h2>
                          <p>{cardTwo.text}</p>
                        </div> 
                      ):(
                        <div className='please-reload'>please reload</div>
                      )}
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
        </motion.div>
    </div>
  )
}

export default Resume