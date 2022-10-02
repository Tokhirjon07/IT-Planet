// React And Hooks
import React, { useEffect, useState } from "react";
// React And Hooks

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Font Awesome

// Extra Library
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useHistory, Link } from "react-router-dom";
// Extra Library

// Pages Section
import ResponsiveNav from "../Components/ResponsiveNav";
import Benefit from "../Components/Benefit";
import Course from "../Components/Course";
import Footer from "../Components/Footer";
// Pages Section

const CoursesPage = ({ lessons }) => {
  const [loading, setLoading] = useState(true);
  const [bg, setBg] = useState(true);
  useEffect(() => {
    setLoading(true);
    setBg(true);
    setTimeout(() => {
      setLoading(false);
      setBg(false);
    }, 700);
  }, []);

  const styles = {
    background: bg
      ? "linear-gradient(95deg, rgba(35, 185, 212, 0.6),  rgba(25, 107, 222, 0.7), rgba(13, 205, 222, 0.6))"
      : "",
  };

  const [menu, setMenu] = useState(false);

  const history = useHistory();
  return (
    <motion.div
      style={styles}
      className="coursepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {loading ? (
        <div style={styles} className="container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      ) : (
        <div className="courses-container">
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
                Courses
              </Link>
              <Link className="nav-link" to="/contactpage">
                Contact
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
          <motion.div
            className="info-planet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <motion.h4
              initial={{ x: "-250vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8, duration: 1.1 }}
            >
              <span>IT Planet </span>
              is free-of-charge and community-based education program conducted
              by The developer community since 2020.
            </motion.h4>
            <motion.p
              initial={{ x: "-250vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.9, duration: 1.3 }}
            >
              Everyone can study at IT Planet, regardless of age, professional
              employment, or place of residence.
            </motion.p>

            <motion.p
              initial={{ x: "-250vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 1, duration: 1.6 }}
            >
              The mentors and trainers of our school are front-end and
              javascript developers from different companies and countries.
            </motion.p>
          </motion.div>
          <motion.div
            className="btn"
            initial={{ x: "-250vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.1, duration: 1.7 }}
          >
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Main Page <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </motion.div>
          <Benefit />
          <Course lessons={lessons} />
          <Footer />
        </div>
      )}
    </motion.div>
  );
};

export default CoursesPage;
