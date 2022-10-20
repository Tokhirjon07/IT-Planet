// React And Hooks
import React, { useState, useEffect } from "react";
// React And Hooks

// Font Awesome & Images
import aboutmain from "../imgs/software.png";
import founder1 from "../imgs/founder-1.jpg";
import recruter from "../imgs/recruter.jpg";
import founder2 from "../imgs/founder-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faBars,
  faChevronRight,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
// Font Awesome & Images

// Extra Library
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
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
    }, 800);
    Aos.init({ duration: 1200 });
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
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
          <div className="about-hero">
            <motion.div
              className="aboutus"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2>
                IT Planet is community-based education program conducted by The
                developer community since 2020. Our ultimate goal is to produce
                software developers
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                corporis.
              </p>
              <button>
                learn more
                <FontAwesomeIcon
                  className="button-icon"
                  icon={faChevronRight}
                />
              </button>
            </motion.div>
            <motion.div
              className="image-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src={aboutmain} alt="about" />
            </motion.div>
          </div>
          <div className="cofounders">
            <h1>Co-Founders & Reacruter</h1>
            <div className="cards">
              <div data-aos="fade-right" className="card">
                <div className="card-img">
                  <img src={founder1} alt="Director" />
                </div>
                <div className="card-details">
                  <h2>john doe</h2>
                  <h5>co-founder</h5>
                </div>
              </div>
              <div data-aos="zoom-in" className="card">
                <div className="card-img">
                  <img src={recruter} alt="Director" />
                </div>
                <div className="card-details">
                  <h2>marta angelina</h2>
                  <h5>recruiter</h5>
                </div>
              </div>
              <div data-aos="fade-left" className="card">
                <div className="card-img">
                  <img src={founder2} alt="Director" />
                </div>
                <div className="card-details">
                  <h2>alex george</h2>
                  <h5>co-founder</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="motto-section">
            <h2>Our Quotes</h2>
            <div data-aos="zoom-in" className="motto">
              <img src={recruter} alt="girl" />
              <p>
                <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
                Believe! The code which you write will change the world
                <FontAwesomeIcon className="quote-icon" icon={faQuoteRight} />
              </p>
            </div>
            <div data-aos="zoom-in" className="motto">
              <img src={founder1} alt="girl" />
              <p>
                <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
                Programming is a skill best acquired by practice and example
                rather than from books
                <FontAwesomeIcon className="quote-icon" icon={faQuoteRight} />
              </p>
            </div>
            <div data-aos="zoom-in" className="motto">
              <img src={founder2} alt="girl" />
              <p>
                <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand
                <FontAwesomeIcon className="quote-icon" icon={faQuoteRight} />
              </p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
