import React from "react";
import './style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
        <div className="logo_tilte">
        <img src="/images/logo.jpeg" alt="VN Medical Logo" />
        <h2>VN Medical</h2>
        </div>
        
          <p>{
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          </p>
        </div>

        <div className="footer-section links-contact">
          <div className="footer-links">
            <h2>COMPANY</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h2>GET IN TOUCH</h2>
            <p>+0-000-000-00</p>
            <p>shrutiraj@gmail.com</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <span>© 2025 shrutiraj – All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;