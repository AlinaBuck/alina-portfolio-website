import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'works', 'skills', 'testimonials', 'contact'].map((item, index)=>(   
            <a 
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: 'var(--text-secondary)' } : {}}
            >    
            </a>   
        ))}
    </div>
  )
}

export default NavigationDots