import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { resumeData } from '../../data';
import './Resume.scss';

const Resume = () => {
  const [activeFilter, setActiveFilter] = useState('highlights');
  const [resumeFilter, setResumeFilter] = useState([]);
  const [resume, setResume] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setResumeFilter(resumeData.filter((item) => item.tag.includes('highlights')));
    setResume(resumeData.filter((item) => item.tag.includes('highlights')));
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

      {/* Text */}
      <h2 className='head-text'>
        My <span>Life:</span>
      </h2>

      {/* Filter */}
      <div className="app__resume-filter">
        {['highlights','1996', '2002', '2014', '2015', '2016', '2017', '2019', '2020', '2021', '2022'].map((year, index) => (
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
                <div className="app__resume-card" key={index}>
                  <div className="app__resume-img">
                    <img src={data.img} alt={data.title} />
                  </div>

                  <div className="app__resume-location">
                    <p>{data.location}</p>
                  </div>

                  <div className="app__resume-desc">
                    <h1>{data.title}</h1>
                    <h2>{data.subtitle}</h2>
                    <p>{data.text}</p>
                  </div>
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
                      </div>

                      <div className="app__resume-location">
                        <p>{cardOne.location}</p>
                      </div>

                      <div className="app__resume-desc">
                        <h1>{cardOne.title}</h1>
                        <h2>{cardOne.subtitle}</h2>
                        <p>{cardOne.text}</p>
                      </div> 
                    </div>

                    <div className="app__resume-card">
                      <div className="app__resume-img">
                        <img src={cardTwo.img} alt={cardTwo.title} />
                      </div>

                      <div className="app__resume-location">
                        <p>{cardTwo.location}</p>
                      </div>

                      <div className="app__resume-desc">
                        <h1>{cardTwo.title}</h1>
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