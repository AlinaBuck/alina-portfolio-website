import React from 'react';

import Switch from '../toggle-switch/Switch'
import './Navbar.scss';

const Navbar = ({switchTheme}) => {
  return (
      <>
        <div className='app__navbar app__flex'>
            <div onClick={switchTheme}>
                <Switch/>
            </div>
        </div>
      </>
  )
}

export default Navbar