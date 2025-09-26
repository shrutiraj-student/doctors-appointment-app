import React from "react";
import Navbar from './Navbar'
import "./style/home.scss";
import Footer from './Footer'
import SpecialityMenu from "./SpecialityMenu";
const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className="container">
      <div className="banner-1">
        <div className="banner-content">
          <h1>Book Appointment With Trusted Doctor</h1>
          <img src="/images/doctor-group.png" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
          <a href="#specialityMenu"><button>Book appointment </button></a>
          
        </div>

        <div className="banner-image">
          <img src=" /images/banner-1.png" alt="Doctors" />
        </div>
      </div>



      <SpecialityMenu/>



      <div className="doctors-info-card">
        <div className="card">
          <img src="/images/doc1.png" />
          <div className="card-content">
            <li>Doctor Available</li>
            <h5>Doctor Name</h5>
            <p>Doctors category</p>
          </div>
        </div>
      </div>
      <div className="more-btn"><button>more</button></div>
      <div className="banner-1">
      <div className="banner-content">
      <h1>
      Book Appointment With 100+ Trusted Doctors
      </h1>
      <button>Create account</button></div>
      <div className="banner-image">
      <img src="/images/banner-2.png"/>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
