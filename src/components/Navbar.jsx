import React from "react";
import "./style/navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="/images/logo.jpeg" />
          Prescripto
        </div>
        <div>
          <ul className="nav-ul">
          <a href="#">Home</a>
            <a href="/all-doctors">All Doctors</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            
            <a href="/admin">Admin Panel</a>
          </ul>
          </div>
          <div className="admin-btn">
            <button>Create account</button>
          </div>
        </div>
      
      <hr />
    </div>
  );
};

export default Navbar;
