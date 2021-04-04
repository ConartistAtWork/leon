import React from 'react';
import './Contact.css';
import SectionTitle from '../SectionTitle/SectionTitle'

function Contact() {
  return (
    <div className="contact section">
      <div className="wrapper">
        <SectionTitle title={"contact"} slogan={"We are born to create"} />
        <div className="container">
          <h1>Feel free to drop us a line at:</h1>
          <h1>leonagency@mail.com</h1>
        </div>
        <div className="social container">
          <p>Find us on social nerworks:</p>
          <a href="https://dribbble.com"><i className="fab fa-dribbble"></i></a>
          <a href="https://google.com"><i className="fab fa-google-plus-g"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
