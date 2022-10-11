// React And Hooks
import React, { useState, useEffect } from "react";
// React And Hooks

// Font Awesome & Images
import aboutmain from "../imgs/software.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Font Awesome & Images

// Extra Library
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Extra Library

// Pages Section
import ResponsiveNav from "../Components/ResponsiveNav";
import Footer from "../Components/Footer";
// Pages Section

const AboutPage = ({ modal, setModal }) => {
  // Loading
  const [loading, setLoading] = useState(true);
  const [bg, setBg] = useState(true);
  const styles = {
    background: bg ? "" : "rgba(0,0,0,0.6)",
  };
  useEffect(() => {
    setLoading(true);
    setBg(true);
    setTimeout(() => {
      setLoading(false);
      setBg(false);
    }, 100);
  }, []);
  // Loading

  const [menu, setMenu] = useState(false);

  return (
    <div className="about">
      {loading ? (
        <div style={styles} className="container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      ) : (
        <div style={styles} className="about-container">
          <motion.nav
            initial={{ y: -250 }}
            animate={{ y: 5 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "tween",
              stiffness: 100,
            }}
          >
            <h1>IT Planet</h1>
            <div className="nav-menu">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/coursespage">
                IT Courses
              </Link>
              <Link className="nav-link" to="/aboutpage">
                IT Planet
              </Link>
              <Link className="nav-link" to="/contactpage">
                Contact Us
              </Link>
            </div>
            <div className="icons">
              {menu ? (
                <FontAwesomeIcon
                  onClick={() => setMenu(!menu)}
                  icon={faX}
                  className="close-menu"
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => setMenu(!menu)}
                  icon={faBars}
                  className="open-menu"
                />
              )}
            </div>
          </motion.nav>
          {menu ? <ResponsiveNav /> : ""}
          <div className="about-hero firstmodal">
            <div className="more-info">
              <h1>who we are ?</h1>
              <p>If you would like to know about us.</p>
              <button>learn more</button>
            </div>
            <div className="aboutus secondmodal">
              <h2>
                <span></span>
                IT Planet is free-of-charge and community-based education
                program conducted by The developer community since 2020. Our
                ultimate goal is to produce software developers
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                corporis consectetur excepturi magnam.
              </p>
              <button>
                learn more
                <FontAwesomeIcon
                  className="button-icon"
                  icon={faChevronRight}
                />
              </button>
            </div>
            <div className="image-section">
              <img src={aboutmain} alt="about" />
            </div>
          </div>
          <div className="cofounders"></div>
          <div className="motto-section"></div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
