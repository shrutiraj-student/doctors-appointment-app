import React from 'react'
import "../style/home.scss";
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate();
  return (
    <div>
       
      <div className="banner-1">
      <div className="banner-content">
      <h1>
      Book Appointment With 100+ Trusted Doctors
      </h1>
      <button onClick={()=> navigate('/create-account')}>Create account</button></div>
      <div className="banner-image">
      <img src="/images/banner-2.png"/>
      </div>
      </div>
    </div>
  )
}

export default Banner
