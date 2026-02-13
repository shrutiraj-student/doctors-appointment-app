
import React from "react";
import "../style/navbar.scss";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/myprofile";

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="/images/logo.jpeg" alt="logo" />
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
          {!isLoginPage ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 border border-radius-1 rounded-full"
            >
              Create account
            </button>
          ) : (
            <div className="profile">
              <img src="/images/profile-icon.png" alt="Profile" className="profile-icon" />
              <span>Welcome, User</span>
            </div>
          )}
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;

