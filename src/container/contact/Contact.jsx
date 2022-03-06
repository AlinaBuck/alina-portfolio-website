import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { motion } from 'framer-motion';

import { images } from '../../constants'
import './Contact.scss';



const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(process.env.REACT_APP_SERVICE_ID);

    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID,
    )

    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  
    setLoading(false);
    setIsFormSubmitted(true);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div 
      className='app__contact' 
      id='contact'
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, type:'tween' }}
      >
        <h2 className="head-text">Contact <span>Me!</span></h2>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, type:'tween' }}
        className="app__contact-cards"
      >
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:maxistahl@gmail.com">email</a>
        </div>
        <div className="app__contact-card">
          <img src={images.phone} alt="mobile" />
          <a href="tel: +49 152 08580434">phone</a>
        </div>
      </motion.div>

      {!isFormSubmitted ?
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, type:'tween' }}
          className='app__contact-form-container'
        >
          <form onSubmit={onSubmit} className='app__contact-form'>
            <input
              type='text'
              name='first_name'
              placeholder='First Name'
              value={toSend.from_name}
              onChange={handleChange}
              className='app__contact-form-name'
            />
            <input
              type='text'
              name='last_name'
              placeholder='Last Name'
              value={toSend.to_name}
              onChange={handleChange}
              className='app__contact-form-name'
            />
            <input
              type='text'
              name='reply_to'
              placeholder='Your email'
              value={toSend.reply_to}
              onChange={handleChange}
              className='app__contact-form-mail'
            />
            <input
              type='text'
              name='message'
              placeholder='Your message'
              value={toSend.message}
              onChange={handleChange}
              className='app__contact-form-text'
            />
            
            <button type='submit' className='app__contact-form-button'>{loading ? 'Sending' : 'Send Message'}</button>
          </form>
        </motion.div>
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      }
    </div>
  )
}


export default Contact