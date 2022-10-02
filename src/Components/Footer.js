import React from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
// Font Awesome

const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="networks">
          <h3>contact us</h3>
          <div className="links">
            <a href="!#">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="!#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="!#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="!#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="infos">
          <h3>Information</h3>
          <a href="!#">workplace</a>
          <a href="!#">news</a>
          <a href="!#">structure</a>
          <a href="!#">library</a>
          <a href="!#">company</a>
        </div>

        <div className="address">
          <h3>Address</h3>
          <p>
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            St. Melgewska. 20-777 Warsaw, Poland.
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            itplanet@gmail.com
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faPhone} />
            +48 767 969 868
          </p>
        </div>
      </div>
      <div className="line"></div>
      <p className="lastgap">
        &copy; {today} <span>it planet</span>. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
