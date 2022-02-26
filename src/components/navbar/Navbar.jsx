import React, { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg'

import Switch from '../toggle-switch/Switch'
import './Navbar.scss';

const Navbar = ({switchTheme}) => {
    const[toggle, setToggle] = useState(false);
   
    return (
      <>
        <div className='app__navbar'>

            {/* Logo */}
            <div className="app__navbar-logo app__flex">
                <a href='#home' className='head-text'><span>A</span>LINA<span>.</span></a>
            </div>
            

            {/* Navigation on big screens */}
            <ul className="app__navbar-links">
                {['home', 'about', 'resume', 'files', 'testimonials', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            {/* Mode Toggle */}
            <div className='app__navbar-switch' onClick={switchTheme}>
                <Switch/>
            </div>

            {/* Navigation on small screens */}
            <div className="app__navbar-menu">
                <CgMenuRight className={`${toggle === true ? 'inactive' : ''}`} onClick={()=> setToggle(true)}/>
                <CgClose className={`${toggle === true ? '' : 'inactive'}`} onClick={()=> setToggle(false)}/>
                {
                    toggle && (   
                        <div>        
                            <ul className='app__navbar-links'>
                                {['home', 'about', 'resume', 'files', 'testimonials', 'contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                                    </li>
                                ))}

                                <li onClick={switchTheme}>
                                    <Switch/>
                                </li>
                            </ul>
                        </div> 
                    )
                }
            </div>
        </div>
      </>
  )
}

export default Navbar

