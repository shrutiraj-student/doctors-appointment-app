import React from "react";
import Navbar from './Navbar'
import "../style/home.scss";
import Footer from './Footer'
import SpecialityMenu from "./SpecialityMenu";
import TopDoctors from "./TopDoctors";
import Banner from "./Banner";
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

      <TopDoctors/>
       <Banner/>



      </div>
      <Footer/>
    </div>
  );
};

export default Home;
