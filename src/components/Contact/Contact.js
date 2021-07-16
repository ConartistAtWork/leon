import React from 'react';
import './Contact.css';
import SectionTitle from '../SectionTitle/SectionTitle'
import {useEffect} from 'react'

function Contact() {

  useEffect(() =>
    window.scrollTo(0, 0)
  )

  return (
    <div className="contact section">
      <div className="wrapper">
        <SectionTitle title={"contact"} slogan={"We are born to create"} />
        <div className="container">
          <h1>Feel free to drop us a line at:</h1>
          <h1>leonagency@mail.com</h1>
        </div>
        <div className="social container">
          <p>Find us on social networks:</p>
          <a><i className="fab fa-dribbble"></i></a>
          <a><i className="fab fa-google-plus-g"></i></a>
          <a><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
