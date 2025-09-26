import React from 'react'
import "./style/contact.scss";
import Navbar from "./Navbar.jsx";
import "./style/Navbar.scss";
import Footer from './Footer.jsx'

const Contact = () => {
  return (
    
    <div className="container">
    <Navbar />
    <h3 className="about-heading">CONTACT US</h3>
    <div className="about-box">
      <div className="images-box">
        <img src="/images/aboutImage.png" alt="Office" />
      </div>
      <div className="detail-box">
        <h5>OUR OFFICE</h5>
        <br />
        <span>00000 Willms Station</span>
        <br />
        <span>Suite 000, Washington, USA</span>
        <br />
        <br />
        <span>Tel: (000) 000-0000</span>
        <br />
        <span>Email: shrutiraj@gmail.com</span>
        <br />
        <br />
        <h5>CAREERS AT PRESCRIPTO</h5>
        <br />
        <span>Learn more about our teams and job openings.</span>
        <br />
        <br />
        <button className="explore-jobs-btn">Explore Jobs</button>
      </div>
    </div>
    <Footer/>
  </div>
    
  )
}

export default Contact
