import React from 'react';

import  { About, Contact, Files, Header, Resume, Testimonial } from './container';
import { Navbar, Toggle } from './components'
import './App.scss';


const App = () => {
  const [theme, setTheme] = Toggle();

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); 
  }

  return (
    <div className="app" data-theme={theme}>
      <Navbar switchTheme = {switchTheme}/>
      <Header />
      {/* <About />
      <Resume />
      <Files />
      <Testimonial />
      <Contact /> */}
    </div>
  );
}

export default App