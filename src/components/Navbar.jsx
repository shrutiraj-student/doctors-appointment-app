import React from "react";
import "../style/navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="/images/logo.jpeg" />
          Prescripto
        </div>
        <div>
          <ul className="nav-ul">
          <a href="/">Home</a>
            <a href="/doctors">All Doctors</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            
            <a href="/admin">Admin Panel</a>
          </ul>
          </div>
          <div className="admin-btn">
            <button onClick={()=> navigate('/login')} className="bg-blue-500  border border-radius-1 rounded-full ">Create account</button>
          </div>
        </div>
      
      <hr />
    </div>
  );
};

export default Navbar;
