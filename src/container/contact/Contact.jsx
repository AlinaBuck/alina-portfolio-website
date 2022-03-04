import React, { useState } from 'react';

import { images } from '../../constants'
import './Contact.scss';



const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '', message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData; 

  const handleChangeInput = (e) => {
    const { name, value } = e.target; 

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

      setLoading(false);
      setIsFormSubmitted(true);
    
  }

  return (
    <div className='app__contact' id='contact'>

      <h2 className="head-text">Contact Me!</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:maxistahl@gmail.com">maxistahl@gmail.com</a>
        </div>
        <div className="app__contact-card">
          <img src={images.phone} alt="mobile" />
          <a href="tel: +49 152 08580434">+49 152 08580434</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className="app__contact-form">
          <div className="app__contact-form-name">
            <input type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__contact-form-mail">
            <input type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div className='app__contact-form-text'>
            <textarea 
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
              />
          </div>
          <div className='app__contact-form-button'>
            <button type="button"  onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
          </div> 
        </div>
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      }
    </div>
  )
}


export default Contact